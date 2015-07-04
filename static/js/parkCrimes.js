
var Stamen_Toner = L.tileLayer('http://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}.png', {
  attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  subdomains: 'abcd',
  minZoom: 0,
  maxZoom: 20,
  ext: 'png'
});

  var Esri_WorldImagery = L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
  attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
});

var map = L.map('basic-map', {
    center: [39.952299, -75.163256],
    zoom: 13,
    layers: [Stamen_Toner, Esri_WorldImagery]
});

var baseMaps = {
    "World Imagery": Esri_WorldImagery,
    "Stamen Toner": Stamen_Toner
    
}


L.control.layers(baseMaps).addTo(map);


// Add Philadelphia Parks Polygon geojson 

var ParksPolyURL = "/static/data/ParksPoly.geojson"

$.getJSON(ParksPolyURL, function(data) {
    L.geoJson(data, {
        onEachFeature: function(feature, layer) {
            layer.bindPopup(feature.properties.NAME)
        }
    }).addTo(map)
});



//style ParksPoly

// Add Esri Geocoder Widget
var searchControl = new L.esri.Controls.Geosearch().addTo(map);

     var results = new L.LayerGroup().addTo(map);

      searchControl.on("results", function(data){
        results.clearLayers();
       
          results.addLayer(L.marker(data.results[0].latlng));
        
      });

    // Add Crime Points

    var parkCrimes2009URL = "/static/data/parks2009.geojson"

    $.getJSON(parkCrimes2009URL,function(data){
         var crimeIcon = L.icon({
    iconUrl: '/static/lib/images/burglar.png',
    iconSize: [30,40]
  });
    var crimes = L.geoJson(data,{
      pointToLayer: function(feature,latlng){
        var marker = L.marker(latlng,{icon: crimeIcon});
        marker.bindPopup(feature.properties.ROAD + '<br/>' + feature.properties.OPEN_DT);
        return marker;
      }
    });
    






