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
var MapBox = L.tileLayer('http://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
	attribution: 'Imagery from <a href="http://mapbox.com/about/maps/">MapBox</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
	subdomains: 'abcd',
	id: 'affordances2.ecee9d1c',
	accessToken: 'pk.eyJ1IjoiYWZmb3JkYW5jZXMyIiwiYSI6ImUwOTI5NmJkODIxYzQzZDIwMTk5NzFlZDM3OWM1NjRlIn0.DeNHBpVwPhq23AKU626mVQ'
}).addTo(map);




