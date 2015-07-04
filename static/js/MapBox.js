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
L.tileLayer('http://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
  attribution: 'Imagery from <a href="http://mapbox.com/about/maps/">MapBox</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  subdomains: 'abcd',
  id: 'markassbusta.5123f87c',
  accessToken: 'pk.eyJ1IjoibWFya2Fzc2J1c3RhIiwiYSI6Il83Y1R5ZXMifQ.H-N8zfJJm4fhvseViCXhuA'
}).addTo(map);

// Neighborhoods geojson URL
var neighborhoodsURL = "/static/data/neighborhoods.geojson"

$.getJSON(neighborhoodsURL, function(data) {
    L.geoJson(data, {
        onEachFeature: function(feature, layer) {
            layer.bindPopup(feature.properties.listname)
        }
    }).addTo(map)
});
