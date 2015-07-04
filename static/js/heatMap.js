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
//var neighborhoodsURL = "/static/data/neighborhoods.geojson"

//$.getJSON(neighborhoodsURL, function(data) {
 //   L.geoJson(data, {
    //    onEachFeature: function(feature, layer) {
          //  layer.bindPopup(feature.properties.listname)
    //    }
  //  }).addTo(map)
//});


var points = [
[39.954076, -75.165458,"<img src='http://quartersnacks.com/wp-content/uploads/2011/02/021310.jpg'>"],
[39.952960, -75.164551,"<img src=''>"],
[39.953866, -75.164226],
[39.953692, -75.163673,"<img src='http://www.thrashermagazine.com/imagesV2/Burnout/2012/burnout_suitableforframing/AIKA_BURNETT_burman.jpg'>"],
[39.954306, -75.163636,"<img src='http://4.bp.blogspot.com/-LrJWt7kHTEQ/TtwhWztfsFI/AAAAAAAAQV8/4-TuPAWBI8Q/s1600/pat5050chrome.jpg'>"],
[39.957651, -75.194073,"<img src='http://stwww.skateboardermag.com/wp-content/uploads/2013/03/Screen-shot-2013-03-05-at-8.24.48-AM-300x225.jpg'>"]

];

for(var i=0;i<points.length;i++)
{
L.marker([parseFloat(points[i][0]),parseFloat(points[i][1])],{opacity:0}).bindPopup(points[i][2],{keepInView:true}).addTo(map);
}

var heat = L.heatLayer(points,{blur:40,maxZoom:15,radius:15,gradient:{0.4: 'red', 0.65: 'yellow', 1: 'blue'}}).addTo(map);

heat.addLatLng([39.95, -75.15]);



// skate shops and amenities

var icon = L.MakiMarkers.icon({icon: "marker",
color: "#E8230D",
size: "1"});

L.marker([39.942096, -75.151953],{icon: icon}).addTo(map);


var icon = L.MakiMarkers.icon({icon: "beer",
color: "#00EFFF",
size: "1"});

L.marker([39.972721, -75.135612],{icon: icon}).addTo(map);

var icon = L.MakiMarkers.icon({icon: "beer",
color: "#00EFFF",
size: "1"});

L.marker([39.961522, -75.159305],{icon: icon}).addTo(map);

// added geocoder
var searchControl = new L.esri.Controls.Geosearch().addTo(map);

     var results = new L.LayerGroup().addTo(map);

      searchControl.on("results", function(data){
        results.clearLayers();
       
          results.addLayer(L.marker(data.results[0].latlng));
        
      });


