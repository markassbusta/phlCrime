/**
 * Initialize the map on the page
 *   - need an empty div with an id to insert map into
 *   - setView centers the map on coordinates (Philly City Hall)
 */
var map = L.map('basic-map').setView([39.952299, -75.163256], 13);

/**
 * Add OpenStreetMap tiles to the map
 *
 * There are many open-source, freely available tiles
 * for leaflet.
 *   See: http://leaflet-extras.github.io/leaflet-providers/preview/
 *
 */
L.tileLayer('http://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png').addTo(map);
      var searchControl = new L.esri.Controls.Geosearch().addTo(map);

     var results = new L.LayerGroup().addTo(map);

      searchControl.on("results", function(data){
        results.clearLayers();
       
          results.addLayer(L.marker(data.results[0].latlng));
        
      });


