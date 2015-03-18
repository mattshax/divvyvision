var noselect = false;

var basemapProvider = new Cesium.CartoDBImageryProvider({
    url: 'http://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png',
    credit: 'Basemap courtesy of CartoDB'
});

Cesium.InfoBoxViewModel.defaultSanitizer = function(rawHtml) {
    return rawHtml;
};

var viewer = new Cesium.Viewer("cesiumContainer", {
    timeline: false,
    animation: false,
    baseLayerPicker: false, // Only showing one layer in this demo
    //useDefaultRenderLoop : false,
    //homeButton:false,
    fullscreenButton: false,
    geocoder: true,
    selectionIndicator: false,
    infoBox: false,
    sceneModePicker: false,
    navigationHelpButton: true,
    imageryProvider: basemapProvider,
    navigationInstructionsInitiallyVisible: false
});

viewer.scene.globe.enableLighting = true;

var terrainProvider = new Cesium.CesiumTerrainProvider({
    url: '//assets.agi.com/stk-terrain/world',
    credit: '',
    requestWaterMask: true
});
//viewer.terrainProvider = terrainProvider;

viewer.scene.globe.depthTestAgainstTerrain = false;

viewer.scene.frameState.creditDisplay._imageContainer.style.display = 'none';
viewer.scene.frameState.creditDisplay._textContainer.style.display = 'none';

viewer.homeButton.viewModel.command.beforeExecute.addEventListener(function(commandInfo) {

    var startPos = {
        "duration": 1,
        "direction": {
            "x": 0.24146393146600847,
            "y": 0.9513712823598792,
            "z": 0.19127951511268426
        },
        "up": {
            "x": 0.20628135068895498,
            "y": -0.24292852105730334,
            "z": 0.9478574460406468
        },
        "destination": {
            "x": 195611.63255574455,
            "y": -4757404.871143106,
            "z": 4234217.555386543
        }
    };
    viewer.camera.flyTo({
        destination: startPos.destination,
        orientation: {
            up: startPos.up,
            direction: startPos.direction
        },
        duration: startPos.duration
    });

    commandInfo.cancel = true;
});

var dailyLayer;


var imageryLayers = viewer.scene.imageryLayers;

var layer = imageryLayers.get(0);

layer.brightness = 1.66;
layer.contrast = 0.98;
layer.hue = 0;
layer.saturation = 0.12;
layer.gamma = 0.64;

viewer.scene.skyBox.show = false;
viewer.scene.sun.show = false;
viewer.scene.moon.show = false;
viewer.scene.skyAtmosphere.show = false;

var startPos = {
    "duration": 1,
    "direction": {
        "x": 0.24146393146600847,
        "y": 0.9513712823598792,
        "z": 0.19127951511268426
    },
    "up": {
        "x": 0.20628135068895498,
        "y": -0.24292852105730334,
        "z": 0.9478574460406468
    },
    "destination": {
        "x": 195611.63255574455,
        "y": -4757404.871143106,
        "z": 4234217.555386543
    }
};

viewer.camera.flyTo({
    destination: startPos.destination,
    orientation: {
        up: startPos.up,
        direction: startPos.direction
    },
    duration: startPos.duration
});

var rotation = false;

function updateAndRender() {
    if (rotation == true) {
        // viewer.scene.camera.rotate(Cesium.Cartesian3.UNIT_Z, -.001);
        var center = Cesium.Cartesian3.fromDegrees(-87.628326, 41.881879, 5000.0);
        var transform = Cesium.Matrix4.fromTranslation(center);
        viewer.scene.camera.rotate(Cesium.Cartesian3.UNIT_Y, -.0001, transform);
    }
    Cesium.requestAnimationFrame(updateAndRender);
}
Cesium.requestAnimationFrame(updateAndRender);

function PointOfInterestBuilderViewModel(viewer) {
    this.camera = viewer.scene.camera;
    this.cameraInfo = ko.observable("foo");
    this.update = function() {
        var lla = viewer.scene.globe.ellipsoid.cartesianToCartographic(this.camera.positionWC);
        var upStr = "new Cesium.Cartesian3(" + this.camera.upWC.x + ", " + this.camera.upWC.y + ", " + this.camera.upWC.z + ")";
        var dirStr = "new Cesium.Cartesian3(" + this.camera.directionWC.x + ", " + this.camera.directionWC.y + ", " + this.camera.directionWC.z + ")";
        var destStr = "new Cesium.Cartographic(" + lla.longitude + ", " + lla.latitude + ", " + lla.height + ")";
        var cameraJson = {
            up: upStr,
            direction: dirStr,
            destination: destStr,
            duration: 10000
        };
        var info = JSON.stringify(cameraJson, null, "    ");
        this.cameraInfo(info);
    };
}

function PointOfInterestViewModel() {
    var self = this;
    self.pointsOfInterest = ko.observableArray([
        new ChicagoPOI_1(),
        new ChicagoPOI_2(),
        new ChicagoPOI_3(),
        new ChicagoPOI_4(),
        new ChicagoPOI_5()
    ]);
    self.flightPointIndex = 0;
    self.info = ko.observable("");

    self.changePointOfInterest = function(pointOfInterest) {
        self.cancelFlight();
        var infoDiv = document.getElementById("info");
        infoDiv.className = "uncollapsed";
        self.flightPointIndex = 0;
        self.selectedPointOfInterest = pointOfInterest;
        self.info(pointOfInterest.info);
        self.flyTo(pointOfInterest.flightPoints[0]);
    };

    self.onPointReached = function() {
        self.flightPointIndex += 1;
        if (self.flightPointIndex >= this.selectedPointOfInterest.flightPoints.length) {
            var infoDiv = document.getElementById("info");
            infoDiv.className = "collapsed";
            return;
        }
        self.flyTo(self.selectedPointOfInterest.flightPoints[this.flightPointIndex]);
    };

    self.cancelFlight = function() {
        //     viewer.scene.animations.removeAll();
        var infoDiv = document.getElementById("info");
        infoDiv.className = "collapsed";
    };

    self.flyTo = function(pointOfInterestFlightPoint) {
        var up;
        var direction;
        /*
         var flight = Cesium.CameraFlightPath.createTween(viewer.scene, {
                        destination : pointOfInterestFlightPoint.destination,
                        up : pointOfInterestFlightPoint.up,
                        direction : pointOfInterestFlightPoint.direction,
                        duration : pointOfInterestFlightPoint.duration/1000,
                        linearPath : true,
                        complete : function() {
                            console.log('done');
                            self.onPointReached();
                        }
                    });
                    console.log(flight);
                    viewer.scene.tweens.add(flight);
        */
        var timestep = 0.5;
        var startTime = 0;
        var endTime = 150;
        var currentTime = 0;
        var p1 = viewer.camera._position.clone();
        var p2 = pointOfInterestFlightPoint.destination;
        var ellipsoid = viewer.scene.globe.ellipsoid;

        function animateTest(currentTime, startTime, endTime, p1, p2) {
            var start = p1.clone();
            var t = (currentTime - startTime) / (endTime - startTime);
            //  console.log(t);
            viewer.camera.position = Cesium.Cartesian3.lerp(p1, p2, t, start);
            if (currentTime < endTime) {
                setTimeout(function() {
                    animateTest(currentTime + timestep, startTime, endTime, p1, p2);
                }, 0)
            }
            else {
                console.log('done');
            }
        }
        viewer.camera.flyTo({
            destination: pointOfInterestFlightPoint.destination,
            orientation: {
                up: pointOfInterestFlightPoint.up,
                direction: pointOfInterestFlightPoint.direction
            },

            duration: pointOfInterestFlightPoint.duration,
            complete: function() {
                self.onPointReached()
            }
        });
    };
}

var poiBuilderViewModel = new PointOfInterestBuilderViewModel(viewer);
ko.applyBindings(poiBuilderViewModel, document.getElementById("cameraInfo"));

var pointOfInterestViewModel = new PointOfInterestViewModel();
ko.applyBindings(pointOfInterestViewModel, document.getElementById("filmstrip"));
ko.applyBindings(pointOfInterestViewModel, document.getElementById("info"));

var cesiumContainer = document.getElementById('cesiumContainer');
cesiumContainer.onmousedown = function() {
    pointOfInterestViewModel.cancelFlight();
};
cesiumContainer.onmousewheel = function() {
    pointOfInterestViewModel.cancelFlight();
};

var filmstripCollapsed = false;

function onCollapse() {
    var collapseButton = document.getElementById("collapse");
    var filmstripDiv = document.getElementById("filmstrip");
    if (filmstripCollapsed) {
        collapseButton.className = "uncollapsed";
        filmstripDiv.className = "uncollapsed";
    }
    else {
        collapseButton.className = "collapsed";
        filmstripDiv.className = "collapsed";
    }
    filmstripCollapsed = !filmstripCollapsed;
}

setTimeout(function() {
    onCollapse()
}, 50);

function onClickInfo() {
    var infoDiv = document.getElementById("info");
    infoDiv.className = "collapsed";
}

viewer.scene.preRender.addEventListener(function(scene, time) {
    poiBuilderViewModel.update();
});

window.document.addEventListener("keydown", function(e) {
    if (e.keyCode == 13) {
        var saveCamPos = {
            direction: viewer.camera._direction,
            up: viewer.camera._up,
            position: viewer.camera._position
        }
        console.log(JSON.stringify(saveCamPos));
    }
});

// load neighborhoods
var selectColor;
var buildColor;
var picktimeselect;
var selection = true;
var currentPicked;
var oldPicked;
var oldPrimitive;
var dataSourceNeighbor = new Cesium.GeoJsonDataSource();
viewer.dataSources.add(dataSourceNeighbor);
dataSourceNeighbor.loadUrl('data/ChicagoNeighborhoods.json').then(function() {
    var entities = dataSourceNeighbor.entities.entities;
    for (var i = 0; i < entities.length; i++) {
        var entity = entities[i];
        var name = entity.name;
        entity.polygon.material = Cesium.ColorMaterialProperty.fromColor(new Cesium.Color(1.0, 1.0, 1.0, 0.01));
        entity.polygon.outlineColor = new Cesium.ConstantProperty(new Cesium.Color(0, 0, 0, 0));
        //   entity.polygon.extrudedHeight = new Cesium.ConstantProperty(5.0);
        entity.neighborhood = true;
    }
    selectColor = new Cesium.Color(0 / 255, 255 / 255, 255 / 255, 0.4);
    buildColor = new Cesium.Color(1.0, 1.0, 1.0, 0.01);
    var handler = new Cesium.ScreenSpaceEventHandler(viewer.scene.canvas);
    handler.setInputAction(
        function(movement) {
            if (selection == true) {
                if (noselect == false) {
                    //   var pickedObject = viewer.scene.pick(movement.endPosition);
                    var pickedObjects = viewer.scene.drillPick(movement.endPosition);
                    if (Cesium.defined(pickedObjects)) {
                        for (var i = 0; i < pickedObjects.length; ++i) {
                            var entity = pickedObjects[i].id;
                            if (entity.neighborhood == true) {
                                var pickedObject = pickedObjects[i];
                            }
                        }
                    }
                    //      var timewait=50;
                    //     setTimeout(function(){
                    //              var newpickedObject = viewer.scene.pick(movement.endPosition);
                    //          if (pickedObject==newpickedObject){
                    // enable rest of action only if pickedobject is the same for 100 mseconds
                    if ((pickedObject != undefined) && (pickedObject.id.neighborhood != undefined)) {
                        currentPicked = pickedObject.id;
                        var attributes = pickedObject.primitive.getGeometryInstanceAttributes(currentPicked);
                        attributes.color = Cesium.ColorGeometryInstanceAttribute.toValue(selectColor);
                        try {
                            //      document.getElementsByClassName('cesium-infoBox-iframe')[0].contentDocument.getElementById('divvyChord').contentWindow.highlightMe(currentPicked._properties.PRI_NEIGH);
                            document.getElementById('divvyChord').contentWindow.highlightMe(currentPicked._properties.PRI_NEIGH);
                            if (currentPicked != oldPicked) {
                                // color by trips
                                currentPicked.polygon.material.color = new Cesium.ConstantProperty(selectColor);
                                var activeID = activeData.neighborhoodMap[currentPicked._properties.PRI_NEIGH];
                                var activeMatrix = activeData.matrix[activeID];
                                // create the gradient here based on activeMatrix
                                var scale = chroma.scale(['black', 'white']).domain(activeMatrix, 10, 'k-means');
                                // get max and min values
                                // normalize values between them for opacity
                                var entities = viewer.dataSources.get(0).entities.values;
                                var save = JSON.parse(JSON.stringify(currentPicked._properties.PRI_NEIGH));
                                for (var i = 0; i < entities.length; i++) {
                                    var entity = entities[i];
                                    if (entity._properties.PRI_NEIGH != save) {
                                        entity.polygon.material.color = new Cesium.ConstantProperty(buildColor);
                                    }
                                }
                                for (var i = 0; i < entities.length; i++) {
                                    var entity = entities[i];
                                    if (entity._properties.PRI_NEIGH != save) {
                                        var trips = activeMatrix[activeData.neighborhoodMap[entity._properties.PRI_NEIGH]];
                                        try {
                                            var color = scale(trips).rgb();
                                            entity.polygon.material.color = new Cesium.ConstantProperty(new Cesium.Color(color[0] / 255, color[1] / 255, color[2] / 255, 0.35));
                                        }
                                        catch (e) {
                                            entity.polygon.material.color = new Cesium.ConstantProperty(new Cesium.Color(0 / 255, 0 / 255, 0 / 255, 0.35));
                                        }
                                    }
                                }
                                try {
                                    var attributes = pickedObject.primitive.getGeometryInstanceAttributes(oldPicked);
                                    attributes.color = Cesium.ColorGeometryInstanceAttribute.toValue(buildColor);
                                    // hover over the chord
                                    try {
                                        //  document.getElementsByClassName('cesium-infoBox-iframe')[0].contentDocument.getElementById('divvyChord').contentWindow.highlightOff();
                                        document.getElementById('divvyChord').contentWindow.highlightOff();
                                    }
                                    catch (e) {}
                                }
                                catch (e) {}
                            }
                        }
                        catch (e) {}
                        oldPicked = pickedObject.id;
                        oldPrimitive = pickedObject.primitive;
                    }
                    else {
                        try {
                            var attributes = oldPrimitive.getGeometryInstanceAttributes(oldPicked);
                            attributes.color = Cesium.ColorGeometryInstanceAttribute.toValue(buildColor);
                            try {
                                //    document.getElementsByClassName('cesium-infoBox-iframe')[0].contentDocument.getElementById('divvyChord').contentWindow.highlightOff();
                                document.getElementById('divvyChord').contentWindow.highlightOff();
                            }
                            catch (e) {}
                            var entities = viewer.dataSources.get(0).entities.values;
                            for (var i = 0; i < entities.length; i++) {
                                var entity = entities[i];
                                entity.polygon.material.color = new Cesium.ConstantProperty(buildColor);
                            }
                        }
                        catch (e) {}
                    }
                    //          }// pick time check
                    //  },timewait);
                } //noselect check
            }
        },
        Cesium.ScreenSpaceEventType.MOUSE_MOVE
    );
});

// load footprints
var dataSource1 = new Cesium.GeoJsonDataSource();
viewer.dataSources.add(dataSource1);
dataSource1.loadUrl('data/footprints_rectangle.json').then(function() {
    var entities = dataSource1.entities.entities;
    var colorHash = {};
    for (var i = 0; i < entities.length; i++) {
        var entity = entities[i];
        //var name = entity.NAME;
        entity.polygon.material = Cesium.ColorMaterialProperty.fromColor(new Cesium.Color(1.0, 1.0, 1.0, 0));
        entity.polygon.outlineColor = new Cesium.ConstantProperty(new Cesium.Color(1, 1, 1, 0.48));
        entity.polygon.outlineWidth = new Cesium.ConstantProperty(0.5);
        entity.polygon.extrudedHeight = new Cesium.ConstantProperty(entity.properties.STORIES * 5.0);
        entity.building = true;
    }
    var currentPickedBuild;
    var oldPickedBuild;
    var oldPrimitiveBuild;
    var selectColorBuild = new Cesium.Color(0 / 255, 255 / 255, 255 / 255, 0.5);
    var buildColorBuild = new Cesium.Color(1.0, 1.0, 1.0, 0.1);
    /*
        var handler = new Cesium.ScreenSpaceEventHandler(viewer.scene.canvas);
        handler.setInputAction(
            function(movement) {
    console.log(selection);
    if (selection==false){
      var pickedObjects = viewer.scene.drillPick(movement.endPosition);
            if (Cesium.defined(pickedObjects)) {
                for (var i = 0; i < pickedObjects.length; ++i) {
                    var entity = pickedObjects[i].id;
                    if (entity.building==true){
                        var pickedObjectBuild=pickedObjects[i];
                    }
                }
            }
                if ((pickedObjectBuild != undefined) && (pickedObjectBuild.id.building != undefined)) {
                    currentPickedBuild = pickedObjectBuild.id;
                    var attributes = pickedObjectBuild.primitive.getGeometryInstanceAttributes(currentPickedBuild);
                    attributes.color = Cesium.ColorGeometryInstanceAttribute.toValue(selectColorBuild);
                    if (currentPickedBuild != oldPickedBuild) {
                        try {
                            var attributes = pickedObjectBuild.primitive.getGeometryInstanceAttributes(oldPickedBuild);
                            attributes.color = Cesium.ColorGeometryInstanceAttribute.toValue(buildColorBuild);
                        }
                        catch (e) {}
                    }
                    oldPickedBuild = pickedObjectBuild.id;
                    oldPrimitiveBuild = pickedObjectBuild.primitive;
                }
                else {
                   try{
                        var attributes = oldPrimitiveBuild.getGeometryInstanceAttributes(oldPickedBuild);
                        attributes.color = Cesium.ColorGeometryInstanceAttribute.toValue(buildColorBuild);
                   }catch(e){}
                }
    }
            },
            Cesium.ScreenSpaceEventType.MOUSE_MOVE
        );
    */
});


// load stations
var stationHash = new Object();
Cesium.loadJson('data/stations_real.json').then(function(json) {
    var data = json.stationBeanList;
    // create hash table for stationID and coordinates
    for (var i = 0; i < data.length; i++) {
        var prop = data[i];
        stationHash[prop.id] = {
            long: prop.longitude,
            lat: prop.latitude
        };
        //  var height = Math.ceil(Math.random() * 2500);
        var height = Math.ceil(10);
        viewer.entities.add({
            name: prop.stationName,
            position: Cesium.Cartesian3.fromDegrees(prop.longitude, prop.latitude, 0),
            cylinder: {
                length: height,
                topRadius: 20.0,
                bottomRadius: 20.0,
                material: new Cesium.Color(30 / 255, 230 / 255, 230 / 255, 0.5),
                outline: false,
                outlineColor: Cesium.Color.DARK_GREEN
            }
        });
        /*
                var width = Math.ceil(Math.random() * 500);
                viewer.entities.add({
                    name: prop.stationName,
                    position: Cesium.Cartesian3.fromDegrees(prop.longitude, prop.latitude, 0),
                    cylinder: {
                        length: 0.1,
                        topRadius: width,
                        bottomRadius: width,
                        material: new Cesium.Color(22 / 255, 47 / 255, 92 / 255, 0.3),
                        outline: false,
                        outlineColor: Cesium.Color.DARK_GREEN
                    }
                });
        */
    }
});

Cesium.InfoBoxViewModel.defaultSanitizer = undefined;

var lastSelect;
window.addEventListener("message", receiveMessage, false);
function receiveMessage(event) {
    if (event.data.msg == "hoveractive") {
        try {
            lastSelect.polygon.material.color = new Cesium.ConstantProperty(buildColor);
        }
        catch (e) {}
        hoverme = event.data.neighborhood;
        var entities = viewer.dataSources.get(0).entities.values;
        for (var i = 0; i < entities.length; i++) {
            var entity = entities[i];
            if (hoverme == entities[i]._properties.PRI_NEIGH) {
                entity.polygon.material.color = new Cesium.ConstantProperty(selectColor);
                //entity.polygon.outlineColor = new Cesium.ConstantProperty(new Cesium.Color(0, 0, 0, 0));
                lastSelect = entity;
                var activeID = activeData.neighborhoodMap[entities[i]._properties.PRI_NEIGH];
                var activeMatrix = activeData.matrix[activeID];
                //break;
            }
        }
        // create the gradient here based on activeMatrix
        var scale = chroma.scale(['black', 'white']).domain(activeMatrix, 10, 'k-means');
        // get max and min values
        // normalize values between them for opacity
        for (var i = 0; i < entities.length; i++) {
            var entity = entities[i];
            if (entity._properties.PRI_NEIGH != hoverme) {
                var trips = activeMatrix[activeData.neighborhoodMap[entity._properties.PRI_NEIGH]];
                var color = scale(trips).rgb();
                entity.polygon.material.color = new Cesium.ConstantProperty(new Cesium.Color(color[0] / 255, color[1] / 255, color[2] / 255, 0.35));
            }
        }
    }
    else if (event.data.msg == "hoveroff") {
        var entities = viewer.dataSources.get(0).entities.values;
        for (var i = 0; i < entities.length; i++) {
            var entity = entities[i];
            entity.polygon.material.color = new Cesium.ConstantProperty(buildColor);
        }
    }
}

function noselectzone() {
    noselect = true;
}

function selectzone() {
    noselect = false;
}

var helpShown = true;
document.getElementsByClassName('cesium-navigationHelpButton-wrapper')[0].addEventListener('click', function() {
    document.getElementById('HelpContainerBG').style.display = '';
    document.getElementById('HelpContainer').style.display = '';
    setTimeout(function() {
        helpShown = true;
    }, 50);

}, false);

document.addEventListener('click', function(e) {
    if (helpShown == true) {
        if (e.toElement.id != 'HelpContainer' && e.toElement.id != 'helpcontent' && e.toElement.className != 'helpc') {
            document.getElementById('HelpContainerBG').style.display = 'none';
            document.getElementById('HelpContainer').style.display = 'none';
            helpShown = false;
        }
    }
}, false);
