/**
 * Add polygons from geojson on the map
 *
 * In addition to points, leaflet can display
 * polygons from geojson
 */

// Center on Philadelphia
var map = L.map('basic-map').setView([39.952299, -75.163256], 11);

var natGeoLayer = L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Tiles &copy; Esri &mdash; National Geographic, Esri, DeLorme, NAVTEQ, UNEP-WCMC, USGS, NASA, ESA, METI, NRCAN, GEBCO, NOAA, iPC',
    maxZoom: 16
});

var mapQuestOpenAerial = L.tileLayer('http://oatile{s}.mqcdn.com/tiles/1.0.0/sat/{z}/{x}/{y}.jpg', {
    attribution: 'Tiles Courtesy of <a href="http://www.mapquest.com/">MapQuest</a> &mdash; Portions Courtesy NASA/JPL-Caltech and U.S. Depart. of Agriculture, Farm Service Agency',
    subdomains: '1234'
});


var bikeNetsURL = "/static/data/bikeNets.geojson"

var bikeNets = $.getJSON(bikeNetsURL, function(data) {
    L.geoJson(data, {
        onEachFeature: function(feature, layer) {
            layer.bindPopup(feature.properties.STREETNAME)
        }
    });


var map = L.map('basic-map', {
    center: [39.952299, -75.163256],
    zoom: 11,
    layers: [natGeoLayer, Data]
});

var baseMaps = {
    "ESRI National Geographic": natGeoLayer,
    "MapQuest Open Aerial": mapQuestOpenAerial
}

var Data = {
   
   };

L.control.layers(baseMaps, Data).addTo(map);

