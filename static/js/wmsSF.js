/**
 * Add polygons from geojson on the map
 *
 * In addition to points, leaflet can display
 * polygons from geojson
 */

// Center on Philadelphia
var map = L.map('basic-map').setView([44.4897,-103.8525], 11);

/**
 * Add OpenStreetMap tiles to the map
 */
var OpenStreetMap_DE = L.tileLayer('http://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png', {
	maxZoom: 18,
	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var overlay_DefaultLine = L.tileLayer.wms('http://ec2-52-26-55-244.us-west-2.compute.amazonaws.com/geoserver/sf/wms?version=1.1.0&layers=sf:roads&styles=&bbox=589434.8564686741,4914006.337837095,609527.2102150217,4928063.398014731&width=768&height=537&srs=EPSG:26713&', {
             layers: 'roads',
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



