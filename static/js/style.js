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
var CartoDB_DarkMatter = L.tileLayer('http://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png', {
	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>',
	subdomains: 'abcd',
	maxZoom: 19
}).addTo(map);

var myStyle = {
	"color": "orange"
};

var myStyle2 = {
	"color": "green"
};

// Neighborhoods geojson URL
var broadURL = "/static/data/BroadStLine.geojson"

$.getJSON(broadURL, function(data) {
    L.geoJson(data,{style: myStyle}).addTo(map)
});

var MFLineURL = "/static/data/MFLine.geojson"

$.getJSON(MFLineURL, function(data){
	L.geoJson(data).addTo(map)
});

var parksURL = "/static/data/ParksPoly.geojson"

$.getJSON(parksURL, function(data){
	L.geoJson(data,{ style: myStyle2}).addTo(map)
});

var overlay_DefaultLine = L.tileLayer.wms('http://ec2-52-24-208-26.us-west-2.compute.amazonaws.com/geoserver/bikeNets/wms?version=1.1.0&layers=bikeNets:GIS_STREETS.Bike_Network&styles=&bbox=-75.26927040715,39.8765007479188,-74.965723210479,40.1220444601986&width=768&height=621&srs=EPSG:4326&', {
                        layers: 'GIS_STREETS.Bike_Network',
                        format: 'image/png',
                        transparent: true,
                        continuousWorld : true,
                }).addTo(map);


