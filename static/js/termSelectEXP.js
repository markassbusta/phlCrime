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
 L.tileLayer('http://stamen-tiles-{s}.a.ssl.fastly.net/toner-background/{z}/{x}/{y}.png', {
	attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
	subdomains: 'abcd',
	minZoom: 0,
	maxZoom: 20,
	ext: 'png'
}).addTo(map);


 map.addControl(L.control.zoom({position:'topright'}));

// Neighborhoods geojson URL
var apTerm = "/static/data/airportTerm.geojson"

$.getJSON(apTerm,function(json){
	var geoLayer = L.geoJson(json).addTo(map);

	map
		.fitBounds( geoLayer.getBounds() )
		.setMaxBounds( geoLayer.getBounds().pad(0.5) );

		var geoList = new L.Control.GeoJSONSelector( geoLayer );

		geoList.on('item-active', function(e) {
			$('#selection').text( JSON.stringify(e.layer.feature.properties) );

});	
	map.addControl(geoList);
});


