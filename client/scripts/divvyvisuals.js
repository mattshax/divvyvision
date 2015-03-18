function formatDate(d) {
    var dd = d.getDate()
    if (dd < 10) dd = '0' + dd
    var mm = d.getMonth() + 1
    if (mm < 10) mm = '0' + mm
    var yy = d.getFullYear() % 100
    if (yy < 10) yy = '0' + yy
    yy = '20' + yy;
    /*
      var hr = d.getHours();
        if ( hr < 10 ) hr = '0' + hr
      var min = d.getMinutes();
        if ( min < 10 ) min = '0' + min
      return yy+'-'+mm+'-'+dd+' '+hr+':'+min
      */
    return yy + '-' + mm + '-' + dd
}

function bezier(t, p0, p1, p2, p3) {
    var cX = 3 * (p1.x - p0.x),
        bX = 3 * (p2.x - p1.x) - cX,
        aX = p3.x - p0.x - cX - bX;

    var cY = 3 * (p1.y - p0.y),
        bY = 3 * (p2.y - p1.y) - cY,
        aY = p3.y - p0.y - cY - bY;

    var cZ = 3 * (p1.z - p0.z),
        bZ = 3 * (p2.z - p1.z) - cZ,
        aZ = p3.z - p0.z - cZ - bZ;

    var x = (aX * Math.pow(t, 3)) + (bX * Math.pow(t, 2)) + (cX * t) + p0.x;
    var y = (aY * Math.pow(t, 3)) + (bY * Math.pow(t, 2)) + (cY * t) + p0.y;
    var z = (aZ * Math.pow(t, 3)) + (bZ * Math.pow(t, 2)) + (cZ * t) + p0.z;

    return [x, y, z];
};

function addBezier(pointA, pointB, height) {

    var earth = Cesium.Ellipsoid.WGS84;

    // start and end points on the surface of the earth 
    var startPoint = earth.cartographicToCartesian(Cesium.Cartographic.fromDegrees(pointA.long, pointA.lat, 0.0));
    var endPoint = earth.cartographicToCartesian(Cesium.Cartographic.fromDegrees(pointB.long, pointB.lat, 0.0));

    // determine the midpoint (point will be inside the earth) 
    var addCartesian = startPoint.clone();
    Cesium.Cartesian3.add(startPoint, endPoint, addCartesian);
    var midpointCartesian = addCartesian.clone();
    Cesium.Cartesian3.divideByScalar(addCartesian, 2, midpointCartesian);

    // move the midpoint to the surface of the earth 
    earth.scaleToGeodeticSurface(midpointCartesian);

    // add some altitude if you want (1000 km in this case) 
    var midpointCartographic = earth.cartesianToCartographic(midpointCartesian);
    midpointCartographic.height = height;
    midpointCartesian = earth.cartographicToCartesian(midpointCartographic);

    var spline = new Cesium.CatmullRomSpline({
        times: [0.0, 0.5, 1.0],
        points: [
            startPoint,
            midpointCartesian,
            endPoint
        ],
        //firstTangent:startPoint,
        //lastTangent:endPoint
    });
    var polylinePoints = [];
    for (var ii = 0; ii < 30; ++ii) {
        polylinePoints.push(spline.evaluate(ii / 30));
    }
    var description = '';
    return polylinePoints;
}

var activeData;
var lasthour;
var slider;
var subNav
var animationGo = true;

$(document).ready(function() {

    slider = new AnnualSlider.Slider($('#slider'));
    var hrslider = new HourlySlider.Slider($('#hrslider'));
    var d = new Date();
    var n = d.getHours();
    window.activeHour = n;
    lasthour = n;
    $(slider.subNav).on('toggleAnimation', function(e, data) {
        if (data.state == "on") {
            animationGo = true;
            startAnimation();
        }
        else {
            animationGo = false;
        }
    });

    slider.subNav.Set('divvy');

    var vizstate = {
        'nonmember': false,
        'male': true,
        'female': true
    }

    $(slider.subNav).on('toggleView', function(e, data) {
        if (data.view == 'Non-Members') {
            vizstate.nonmember = data.state
            console.log(vizstate.nonmember)
        }
        else if (data.view == 'Male Riders') {
            vizstate.male = data.state
        }
        else if (data.view == 'Female Riders') {
            vizstate.female = data.state
        }
        updateViz();
    });

    function updateViz() {
        viewer.entities.suspendEvents();
        for (var i = 0; i < polylineEntities.length; i++) {
            viewer.entities.remove(polylineEntities[i]);
        }
        hour = window.activeHour;
        lasthour = hour;
        console.log('showing hour ' + hour + ' polylines');
        for (var i = 0; i < polylineEntities.length; i++) {
            if (polylineEntities[i].hour == hour) {
                if (polylineEntities[i].type == 'nonmember') {
                    if (vizstate.nonmember == true) {
                        viewer.entities.add(polylineEntities[i]);
                    }
                    else {
                        viewer.entities.remove(polylineEntities[i]);
                    }
                }
                else if (polylineEntities[i].type == 'male') {
                    if (vizstate.male == true) {
                        viewer.entities.add(polylineEntities[i]);
                    }
                    else {
                        viewer.entities.remove(polylineEntities[i]);
                    }
                }
                else if (polylineEntities[i].type == 'female') {
                    if (vizstate.female == true) {
                        viewer.entities.add(polylineEntities[i]);
                    }
                    else {
                        viewer.entities.remove(polylineEntities[i]);
                    }
                }
            }
            else {
                viewer.entities.remove(polylineEntities[i]);
            }
        }
        viewer.entities.resumeEvents();
    }

    hrslider.reset('divvymain');
    hrslider.goToDate(window.activeHour);
    hrslider.show();

    function startAnimation() {
        function advance() {
            if (animationGo == true) {
                hrslider.advance(1);
                var hour = hrslider.getCurrentDay();
                if (hour != lasthour) {
                    viewer.entities.suspendEvents();
                    for (var i = 0; i < polylineEntities.length; i++) {
                        viewer.entities.remove(polylineEntities[i]);
                    }
                    window.activeHour = hour;
                    lasthour = hour;
                    console.log('showing hour ' + hour + ' polylines');
                    for (var i = 0; i < polylineEntities.length; i++) {
                        if (polylineEntities[i].hour == hour) {
                            if (polylineEntities[i].type == 'nonmember') {
                                if (vizstate.nonmember == true) {
                                    viewer.entities.add(polylineEntities[i]);
                                }
                                else {
                                    viewer.entities.remove(polylineEntities[i]);
                                }
                            }
                            else if (polylineEntities[i].type == 'male') {
                                if (vizstate.male == true) {
                                    viewer.entities.add(polylineEntities[i]);
                                }
                                else {
                                    viewer.entities.remove(polylineEntities[i]);
                                }
                            }
                            else if (polylineEntities[i].type == 'female') {
                                if (vizstate.female == true) {
                                    viewer.entities.add(polylineEntities[i]);
                                }
                                else {
                                    viewer.entities.remove(polylineEntities[i]);
                                }
                            }
                        }
                        else {
                            viewer.entities.remove(polylineEntities[i]);
                        }
                    }
                    viewer.entities.resumeEvents();
                }
                if (animationGo == true) {
                    setTimeout(function() {
                        if (hour < 23) {
                            advance();
                        }
                        else {
                            hrslider.goToDate(1);
                            var newDate = slider.advance(1);
                            slider.showLoader();
                            console.log(newDate);
                            getDivvyData(formatDate(newDate));
                        }
                    }, 1000)
                }
            }
        };
        if (animationGo == true) {
            advance();
        }
    }

    $(hrslider).on('sliderUpdate', function(e, data) {
        if (animationGo == true) {
            animationGo = false;
            slider.subNav.animationToggle.Toggle();
        }
        var hour = data.sliderTime;
        if (hour != lasthour) {
            viewer.entities.suspendEvents();
            for (var i = 0; i < polylineEntities.length; i++) {
                viewer.entities.remove(polylineEntities[i]);
            }
            window.activeHour = hour;
            lasthour = hour;
            console.log('showing hour ' + hour + ' polylines');
            for (var i = 0; i < polylineEntities.length; i++) {
                if (polylineEntities[i].hour == hour) {
                    if (polylineEntities[i].type == 'nonmember') {
                        if (vizstate.nonmember == true) {
                            viewer.entities.add(polylineEntities[i]);
                        }
                        else {
                            viewer.entities.remove(polylineEntities[i]);
                        }
                    }
                    else if (polylineEntities[i].type == 'male') {
                        if (vizstate.male == true) {
                            viewer.entities.add(polylineEntities[i]);
                        }
                        else {
                            viewer.entities.remove(polylineEntities[i]);
                        }
                    }
                    else if (polylineEntities[i].type == 'female') {
                        if (vizstate.female == true) {
                            viewer.entities.add(polylineEntities[i]);
                        }
                        else {
                            viewer.entities.remove(polylineEntities[i]);
                        }
                    }
                }
                else {
                    viewer.entities.remove(polylineEntities[i]);
                }
            }
            viewer.entities.resumeEvents();
        }
    });
    var polylineEntities = [];
    $(slider).on('sliderUpdate', function(e, data) {
        slider.showLoader();
        getDivvyData(formatDate(data.sliderDate));
    });
    var dateSave;
    function getDivvyData(date) {
            if (animationGo == true) {
                animationGo = false;
                var animationSave = true;
            }
            try {
                var entities = viewer.dataSources.get(0).entities.values;
                for (var i = 0; i < entities.length; i++) {
                    var entity = entities[i];
                    entity.polygon.material.color = new Cesium.ConstantProperty(buildColor);
                }
            }
            catch (e) {}
            dateSave = date;
            var date = {
                'date': date
            };
            // send post request to server
            var xmlhttp = new XMLHttpRequest(); // new HttpRequest instance 
            xmlhttp.open("POST", "divvy");
            xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
            xmlhttp.send(JSON.stringify(date));
            xmlhttp.onreadystatechange = function() {
                if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                    var data = (JSON.parse(xmlhttp.responseText));
                    var results = data.results;
                    activeData = data;
                    var entity = new Cesium.Entity('');
                    // entity.description = '<iframe sandbox="allow-same-origin allow-scripts allow-popups allow-forms" src="chord.html" width="440px" height="540px" allowtransparency="true" style="overflow:hidden;-webkit-transform:translate3d(0,0,0);" scrolling="no" id="divvyChord" frameBorder="0">';
                    document.getElementById('infobox').innerHTML = '<iframe sandbox="allow-same-origin allow-scripts allow-popups allow-forms" src="chord.html" width="440px" height="540px" allowtransparency="true" style="margin-top:10px;overflow:hidden;-webkit-transform:translate3d(0,0,0);" scrolling="no" id="divvyChord" frameBorder="0">';
                    viewer.selectedEntity = entity;
                    var datasend = {
                        date: dateSave,
                        matrix: data.matrix,
                        totals: data.totals,
                        neighborhoods: data.neighborhoods,
                        neighborhoodMap: data.neighborhoodMap
                    }
                    var frameTest = setInterval(function() {
                        try {
                            document.getElementById('divvyChord').contentWindow.feedMe(datasend);
                            // document.getElementsByClassName('cesium-infoBox-iframe')[0].contentDocument.getElementById('divvyChord').contentWindow.feedMe(datasend);
                            clearInterval(frameTest);
                        }
                        catch (e) {}
                    }, 100)
                    // on data response, sort all datasets by hour then visualize the bezier curves
                    // start by visualizing all bezier curve responses
                    if (results.rows.length > 0) {
                        viewer.entities.suspendEvents();
                        for (var i = 0; i < polylineEntities.length; i++) {
                            viewer.entities.remove(polylineEntities[i]);
                        }
                        polylineEntities = [];
                        // batch by hour
                        var batchedHours = [];
                        for (var i = 0; i < 24; i++) {
                            var bhours = [];
                            for (var j = 0; j < results.rows.length; j++) {
                                var hour = new Date(results.rows[j].starttime).getUTCHours();
                                if (hour >= i && hour < i + 1) {
                                    bhours.push(results.rows[j]);
                                    var entity = new Cesium.Entity();
                                    var description = '';
                                    //entity.name = 'test',
                                    //    entity.description = description,
                                        entity.bezier = new Cesium.ConstantProperty(true);
                                    entity.hour = hour;
                                    entity.bezier = true;
                                    var opacity = 1;
                                    if (results.rows[j].gender == null) {
                                        var color = new Cesium.Color(251 / 255, 176 / 255, 64 / 255, opacity);
                                        entity.type = 'nonmember';
                                    }
                                    else if (results.rows[j].gender.toLowerCase() == "male") {
                                        var color = new Cesium.Color(60 / 255, 95 / 255, 236 / 255, opacity);
                                        entity.type = 'male';
                                    }
                                    else if (results.rows[j].gender.toLowerCase() == "female") {
                                        var color = new Cesium.Color(222 / 255, 0, 197 / 255, opacity);
                                        entity.type = 'female';
                                    }
                                    else {
                                        var color = new Cesium.Color(251 / 255, 176 / 255, 64 / 255, opacity);
                                        entity.type = 'nonmember';
                                    }
                                    entity.polyline = {
                                        positions: addBezier(stationHash[results.rows[j].from_station_id], stationHash[results.rows[j].to_station_id], results.rows[j].tripduration ^ 2),
                                        width: 3,
                                        material: new Cesium.PolylineGlowMaterialProperty({
                                            glowPower: 0.3,
                                            color: color
                                        })
                                    };
                                    polylineEntities.push(entity);
                                }
                            }
                            batchedHours.push(bhours);
                        }
                        // show the active hours
                        hour = window.activeHour;
                        for (var i = 0; i < polylineEntities.length; i++) {
                            viewer.entities.remove(polylineEntities[i]);
                        }
                        hour = window.activeHour;
                        lasthour = hour;
                        console.log('showing hour ' + hour + ' polylines');
                        for (var i = 0; i < polylineEntities.length; i++) {
                            if (polylineEntities[i].hour == hour) {
                                if (polylineEntities[i].type == 'nonmember') {
                                    if (vizstate.nonmember == true) {
                                        viewer.entities.add(polylineEntities[i]);
                                    }
                                    else {
                                        viewer.entities.remove(polylineEntities[i]);
                                    }
                                }
                                else if (polylineEntities[i].type == 'male') {
                                    if (vizstate.male == true) {
                                        viewer.entities.add(polylineEntities[i]);
                                    }
                                    else {
                                        viewer.entities.remove(polylineEntities[i]);
                                    }
                                }
                                else if (polylineEntities[i].type == 'female') {
                                    if (vizstate.female == true) {
                                        viewer.entities.add(polylineEntities[i]);
                                    }
                                    else {
                                        viewer.entities.remove(polylineEntities[i]);
                                    }
                                }
                            }
                            else {
                                viewer.entities.remove(polylineEntities[i]);
                            }
                        }
                        viewer.entities.resumeEvents();
                        slider.hideLoader();
                        if (animationSave == true) {
                            animationGo = true;
                            startAnimation();
                        }
                    }
                }
            }
        } // end getDivvyData()

    slider.reset('twitter');

    var now = new Date();
    var start = new Date(now.getFullYear(), 0, 0);
    var diff = now - start;
    var oneDay = 1000 * 60 * 60 * 24;
    var day = Math.floor(diff / oneDay);

    var today = formatDate(new Date());
    today = today.replace("2015", "2014");
    getDivvyData(today);
    slider.goToDate(day);
    slider.show();

});