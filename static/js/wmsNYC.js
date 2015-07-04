/**
 * Add polygons from geojson on the map
 *
 * In addition to points, leaflet can display
 * polygons from geojson
 */

// Center on Philadelphia
var map = L.map('basic-map').setView([40.7127, -74.0059], 11);

/**
 * Add OpenStreetMap tiles to the map
 */
L.tileLayer('http://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.png', {
	attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
	subdomains: 'abcd',
	minZoom: 1,
	maxZoom: 16,
	ext: 'png'
}).addTo(map);

var overlay_DefaultStylerforsimpleroadsegments = L.tileLayer.wms('http://ec2-52-26-55-244.us-west-2.compute.amazonaws.com/geoserver/tiger/wms?version=1.1.0&layers=tiger:tiger_roads&styles=&bbox=-74.02722,40.684221,-73.907005,40.878178&width=476&height=768&srs=EPSG:4326&', {
			layers: 'tiger_roads',
			format: 'image/png',
			transparent: true,
			continuousWorld : true,
		}).addTo(map);

var icon = L.MakiMarkers.icon({icon: "marker-stroked",
color: "#00EFFF",
size: "1"});

L.marker([40.714439, -74.002842],{icon: icon}).addTo(map);


var icon = L.MakiMarkers.icon({icon: "beer",
color: "#00EFFF",
size: "1"});

L.marker([40.712509, -73.946080],{icon: icon}).addTo(map);





// Add Geocoder widget

var searchControl = new L.esri.Controls.Geosearch().addTo(map);

     var results = new L.LayerGroup().addTo(map);

      searchControl.on("results", function(data){
        results.clearLayers();
       
          results.addLayer(L.marker(data.results[0].latlng));
        
      });



