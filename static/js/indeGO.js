/**
 * Add polygons from geojson on the map
 *
 * In addition to points, leaflet can display
 * polygons from geojson
 */

// Center on Philadelphia
var map = L.map('basic-map').setView([39.952299, -75.163256], 11);

/**
 * Add OpenStreetMap tiles to the map
 */
L.tileLayer('http://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
        '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a> |' +
        ' Neighborhoods obtained from <a href="https://github.com/azavea/geo-data">' +
        'Azavea</a>'
}).addTo(map);

// indeGO geojson URL
var indeGOURL = "/static/data/indeGO.geojson"

$.getJSON(indeGOURL, function(data) {
    L.geoJson(data, {
        onEachFeature: function(feature, layer) {
            layer.bindPopup(feature.properties.addressStreet)
        }
    }).addTo(map)
});

// BikeNetsgeojson URL
var bikeNetsURL = "/static/data/bikeNets.geojson"

$.getJSON(bikeNetsURL, function(data) {
    L.geoJson(data, {
        onEachFeature: function(feature, layer) {
            layer.bindPopup(feature.properties.STREETNAME)
        }
    }).addTo(map)
});
