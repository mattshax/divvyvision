(function() {
    "use strict";
    /*global console,require,__dirname,process*/
    /*jshint es3:false*/

    var express = require('express');
    var compression = require('compression');
    var url = require('url');
    var request = require('request');

    var fs = require("fs");
    var bodyParser = require("body-parser");

    var cassandra = require('cassandra-driver');
    var turf = require('turf');

    var databaseIP = process.env.databaseIP || 'localhost'

    var client = new cassandra.Client({
        contactPoints: [databaseIP],
        keyspace: 'divvy'
    });

    var yargs = require('yargs').options({
        'port': {
            'default': process.env.PORT || 3006,
            'description': 'Port to listen on.'
        },
        'public': {
            'type': 'boolean',
            'description': 'Run a public server that listens on all interfaces.'
        },
        'upstream-proxy': {
            'description': 'A standard proxy server that will be used to retrieve data.  Specify a URL including port, e.g. "http://proxy:8000".'
        },
        'bypass-upstream-proxy-hosts': {
            'description': 'A comma separated list of hosts that will bypass the specified upstream_proxy, e.g. "lanhost1,lanhost2"'
        },
        'help': {
            'alias': 'h',
            'type': 'boolean',
            'description': 'Show this help.'
        }
    });
    var argv = yargs.argv;

    if (argv.help) {
        return yargs.showHelp();
    }

    var mime = express.static.mime;
    mime.define({
        'application/json': ['czml', 'json', 'geojson', 'topojson', 'gltf'],
        'text/plain': ['glsl']
    });

    var app = express();
    app.use(bodyParser.json());
    app.use(compression());
    app.use(express.static(__dirname + '/client'))


    function getRemoteUrlFromParam(req) {
        var remoteUrl = req.params[0];
        if (remoteUrl) {
            // add http:// to the URL if no protocol is present
            if (!/^https?:\/\//.test(remoteUrl)) {
                remoteUrl = 'http://' + remoteUrl;
            }
            remoteUrl = url.parse(remoteUrl);
            // copy query string
            remoteUrl.search = url.parse(req.url).search;
        }
        return remoteUrl;
    }

    var dontProxyHeaderRegex = /^(?:Host|Proxy-Connection|Connection|Keep-Alive|Transfer-Encoding|TE|Trailer|Proxy-Authorization|Proxy-Authenticate|Upgrade)$/i;

    function filterHeaders(req, headers) {
        var result = {};
        // filter out headers that are listed in the regex above
        Object.keys(headers).forEach(function(name) {
            if (!dontProxyHeaderRegex.test(name)) {
                result[name] = headers[name];
            }
        });
        return result;
    }

    var upstreamProxy = argv['upstream-proxy'];
    var bypassUpstreamProxyHosts = {};
    if (argv['bypass-upstream-proxy-hosts']) {
        argv['bypass-upstream-proxy-hosts'].split(',').forEach(function(host) {
            bypassUpstreamProxyHosts[host.toLowerCase()] = true;
        });
    }

    app.get('/proxy/*', function(req, res, next) {
        // look for request like http://localhost:8080/proxy/http://example.com/file?query=1
        var remoteUrl = getRemoteUrlFromParam(req);
        if (!remoteUrl) {
            // look for request like http://localhost:8080/proxy/?http%3A%2F%2Fexample.com%2Ffile%3Fquery%3D1
            remoteUrl = Object.keys(req.query)[0];
            if (remoteUrl) {
                remoteUrl = url.parse(remoteUrl);
            }
        }

        if (!remoteUrl) {
            return res.send(400, 'No url specified.');
        }

        if (!remoteUrl.protocol) {
            remoteUrl.protocol = 'http:';
        }

        var proxy;
        if (upstreamProxy && !(remoteUrl.host in bypassUpstreamProxyHosts)) {
            proxy = upstreamProxy;
        }

        // encoding : null means "body" passed to the callback will be raw bytes

        request.get({
            url: url.format(remoteUrl),
            headers: filterHeaders(req, req.headers),
            encoding: null,
            proxy: proxy
        }, function(error, response, body) {
            var code = 500;

            if (response) {
                code = response.statusCode;
                res.header(filterHeaders(req, response.headers));
            }

            res.send(code, body);
        });
    });

    Object.size = function(obj) {
        var size = 0,
            key;
        for (key in obj) {
            if (obj.hasOwnProperty(key)) size++;
        }
        return size;
    };

    var stations = require('./client/data/stations_geo.json');
    var neighborhoods = require('./client/data/ChicagoNeighborhoods.json');

    // group stations by neighborhood
    var taggedstations = turf.tag(stations, neighborhoods, 'PRI_NEIGH', 'PRI_NEIGH');

    // create the station hash table
    var stationHash = new Object();

    for (var i = 0; i < taggedstations.features.length; i++) {
        var prop = taggedstations.features[i].properties;
        stationHash[prop.id] = {
            long: prop.longitude,
            lat: prop.latitude,
            neighborhood: prop.PRI_NEIGH,
            to: 0,
            from: 0
        };
    }

    // create the neighborhood hash table
    var neighborhoodHash = new Object();
    var neighborhoodsArray = [];

    for (var i = 0; i < neighborhoods.features.length; i++) {
        var prop = neighborhoods.features[i].properties;
        neighborhoodsArray[i] = {
            name: prop.PRI_NEIGH
        };
        neighborhoodHash[prop.PRI_NEIGH] = { in : 0, out: 0, total:0
        };
    }

    // initiate the matrix
    var neighborhoodMatrix = [];
    for (var i = 0; i < neighborhoods.features.length; i++) {
        var nm1 = [];
        for (var j = 0; j < neighborhoods.features.length; j++) {
            nm1.push(0);
        }
        neighborhoodMatrix.push(nm1);
    }

    app.post('/divvy', function(req, res) {
        var data = req.body;
        console.log('getting divvy data for ' + data.date);

        // get the data from the cassandra database

        client.execute("select * from divvy_data where starttime > '" + data.date + "' AND starttime <= '" + data.date + " 23:59' LIMIT 2000 ALLOW FILTERING ;", function(err, result) {
            if (!err) {

                if (result.rows.length > 0) {

                    var totalTrips = result.rows.length;

                    //  server-side turfjs process to aggregate total incoming/outgoing trips by neighborhood                
                    var stationHashClone = {};
                    for (var key in stationHash)
                        stationHashClone[key] = stationHash[key];
                    for (var i = 0; i < result.rows.length; i++) {
                        stationHashClone[result.rows[i].to_station_id].to += 1;
                        stationHashClone[result.rows[i].from_station_id].from += 1;
                    }

                    var neighborhoodHashClone = {};
                    for (var key in neighborhoodHash)
                        neighborhoodHashClone[key] = neighborhoodHash[key];
                    for (var key in stationHashClone) {
                        neighborhoodHashClone[stationHashClone[key].neighborhood].in += stationHashClone[key].to;
                        neighborhoodHashClone[stationHashClone[key].neighborhood].out += stationHashClone[key].from;
                        neighborhoodHashClone[stationHashClone[key].neighborhood].total += (stationHashClone[key].to+stationHashClone[key].from);
                    }

                    var totalNeighborhoodFlows = neighborhoodHashClone;

                    // calculate the connectivity matrix between neighborhoods

                    var neighborhoodMatrixMap = new Object();
                    for (var i = 0; i < neighborhoods.features.length; i++) {
                        var prop = neighborhoods.features[i].properties;
                        neighborhoodMatrixMap[prop.PRI_NEIGH] = i;
                    }

                    var neighborhoodMatrixClone = neighborhoodMatrix.slice(0);

                    for (var j = 0; j < result.rows.length; j++) {

                        var from = neighborhoodMatrixMap[stationHashClone[result.rows[j].from_station_id].neighborhood];
                        var to = neighborhoodMatrixMap[stationHashClone[result.rows[j].to_station_id].neighborhood];
                        neighborhoodMatrixClone[from][to] += 1;

                    }
                    
                 //   var neighborhoodMatrixClonePercent = JSON.parse(JSON.stringify(neighborhoodMatrixClone));
                 
                    // get all on a percentage basis
                    for (var i = 0; i < neighborhoodMatrixClone.length; i++) {
                        for (var j = 0; j < neighborhoodMatrixClone.length; j++) {
                            //  neighborhoodMatrixClone[i][j]= Math.round(neighborhoodMatrixClone[i][j]/totalTrips * 10000) / 10000 ;
                            neighborhoodMatrixClone[i][j] = neighborhoodMatrixClone[i][j] / totalTrips;
                        }
                    }

                    // sum total percentages per neighborhood
                    var totals = [];
                    for (var i = 0; i < neighborhoodMatrixClone.length; i++) {
                        totals[i] = neighborhoodMatrixClone[i].reduce(function(a, b) {
                            return a + b;
                        });
                    }

                    var resultSend = {
                        matrix: neighborhoodMatrixClone,
                        //matrixTrips:neighborhoodMatrixClone,
                        neighborhoods: neighborhoodsArray,
                        neighborhoodMap:neighborhoodMatrixMap,
                        netflow: totalNeighborhoodFlows,
                        totals: totals,
                        results: result
                    };

                    res.end(JSON.stringify(resultSend));

                } // end if > 0 rows


            }
            else {
                console.log(err);
            }

        });


    });

    var server = app.listen(argv.port, argv.public ? undefined : 'localhost', function() {
        if (argv.public) {
            console.log('Divvy.Vision development server running publicly.  Connect to http://localhost:%d/', server.address().port);
        }
        else {
            console.log('Divvy.Vision development server running locally.  Connect to http://localhost:%d/', server.address().port);
        }
    });

    server.on('error', function(e) {
        if (e.code === 'EADDRINUSE') {
            console.log('Error: Port %d is already in use, select a different port.', argv.port);
            console.log('Example: node server.js --port %d', argv.port + 1);
        }
        else if (e.code === 'EACCES') {
            console.log('Error: This process does not have permission to listen on port %d.', argv.port);
            if (argv.port < 1024) {
                console.log('Try a port number higher than 1024.');
            }
        }
        console.log(e);
        process.exit(1);
    });

    server.on('close', function() {
        console.log('Divvy.Vision development server stopped.');
    });

    process.on('SIGINT', function() {
        server.close(function() {
            process.exit(0);
        });
    });

})();
