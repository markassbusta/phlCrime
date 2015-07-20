/**
 * Add polygons from geojson on the map
 *
 * In addition to points, leaflet can display
 * polygons from geojson
 */

// Center on Philadelphia
var map = L.map('basic-map',{zoomControl: false}).setView([39.952299, -75.163256], 16);

/**
 * Add OpenStreetMap tiles to the map
 */
var CartoDB_DarkMatter = L.tileLayer('http://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.png', {
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

//map.addControl(new L.Control.Zoomslider());

var control = new L.Control.Bookmarks().addTo(map);

//map.MapPaint.enable();

	//map.addControl(new MapPaint.SwitchControl());
var zoomHome = L.Control.zoomHome();
zoomHome.addTo(map);


var graphicScale = L.control.graphicScale({
		doubleLine: true,
		fill: 'hollow',
        showSubunits: false,
        
	}).addTo(map);





