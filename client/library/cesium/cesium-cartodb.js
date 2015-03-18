(function() {
    var root = this;
    var Cesium = root.Cesium;
    if (!Cesium) {
        console.error("Cesium is not loaded.")
    }

    // New imagery provider with support for CartoDB's XYZ URLs
    Cesium.CartoDBImageryProvider = Cesium.OpenStreetMapImageryProvider;
    Cesium.CartoDBImageryProvider.prototype.getCDNSubdomain = function (x, y) {  // Multi-WMS server selection
        var subdomains = ['a', 'b', 'c', 'd'];
        return subdomains[(x + y) % subdomains.length];
    };
    Cesium.CartoDBImageryProvider.prototype.requestImage = function (x, y, level) {
        var url = this._url.replace('{s}', this.getCDNSubdomain(x, y)).replace('{z}', level).replace('{x}', x).replace('{y}', y);
        return Cesium.ImageryProvider.loadImage(this, url);
    };
})();
