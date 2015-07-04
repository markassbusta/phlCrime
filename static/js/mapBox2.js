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
  id: 'pixels2predicates.f7804007',
  accessToken: 'pk.eyJ1IjoicGl4ZWxzMnByZWRpY2F0ZXMiLCJhIjoiZjNjY2QyNmFjZTk1ZWM3YTk1OGEyYjQ4ZTUwMjRmNTEifQ.5qa73-7lUx1-u02ZFMwJ7w'
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
