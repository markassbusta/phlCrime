/**
 * Add polygons from geojson on the map
 *
 * In addition to points, leaflet can display
 * polygons from geojson
 */

// Center on Philadelphia
var map = L.map('basic-map').setView([42.6525, -73.7572], 11);

/**
 * Add OpenStreetMap tiles to the map
 */
L.tileLayer('http://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
  attribution: 'Imagery from <a href="http://mapbox.com/about/maps/">MapBox</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  subdomains: 'abcd',
  id: 'explanatorygaps.72c44294',
  accessToken: 'pk.eyJ1IjoiZXhwbGFuYXRvcnlnYXBzIiwiYSI6ImZjODNiOWU4ZjczMWFhY2I1MTIyYTJiNDUzMjQyM2I2In0.CWxmZLJ4vijaxCCZ9r_Cew	'
}).addTo(map);



var overlay_DefaultPolygon = L.tileLayer.wms('http://ec2-52-24-208-26.us-west-2.compute.amazonaws.com/geoserver/airportTerminal/wms?version=1.1.0&layers=airportTerminal:GIS_AIRPORT.Terminal_Buildings&styles=&bbox=-75.2526089529656,39.872374656598,-75.2356681252549,39.8824379618888&width=768&height=456&srs=EPSG:4326&', {
			layers: 'GIS_AIRPORT.Terminal_Buildings',
			format: 'image/png',
			transparent: true,
			continuousWorld : true,
		}).addTo(map);
// Neighborhoods geojson URL

