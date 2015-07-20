

// Center on Philadelphia
var map = L.map('basic-map').setView([39.952299, -75.163256], 15);

/**
 * Add MapBox basemaps to the map

 */

var MapBox = L.tileLayer('http://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
	attribution: 'Imagery from <a href="http://mapbox.com/about/maps/">MapBox</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
	subdomains: 'abcd',
	id: 'throbbinggristle.3c68c2db',
	accessToken: 'pk.eyJ1IjoidGhyb2JiaW5nZ3Jpc3RsZSIsImEiOiJmYWZhOTdjNjY4ZmUwMThlNTI3Y2Y1MmFmODY3YzljYiJ9.63LwhUTYUG54vqH4P_fZPA'
}).addTo(map);

var MapBox2 = L.tileLayer('http://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
	attribution: 'Imagery from <a href="http://mapbox.com/about/maps/">MapBox</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
	subdomains: 'abcd',
	id: 'affordances2.ecee9d1c',
	accessToken: 'pk.eyJ1IjoiYWZmb3JkYW5jZXMyIiwiYSI6ImUwOTI5NmJkODIxYzQzZDIwMTk5NzFlZDM3OWM1NjRlIn0.DeNHBpVwPhq23AKU626mVQ'
});

var MapBox3 = L.tileLayer('http://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
  attribution: 'Imagery from <a href="http://mapbox.com/about/maps/">MapBox</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  subdomains: 'abcd',
  id: 'explanatorygaps.72c44294',
  accessToken: 'pk.eyJ1IjoiZXhwbGFuYXRvcnlnYXBzIiwiYSI6ImZjODNiOWU4ZjczMWFhY2I1MTIyYTJiNDUzMjQyM2I2In0.CWxmZLJ4vijaxCCZ9r_Cew	'
});

//create baseMaps variable



// add GeoServer Overlays


// add ESRI geocoder widget

var searchControl = new L.esri.Controls.Geosearch().addTo(map);

     var results = new L.LayerGroup().addTo(map);

      searchControl.on("results", function(data){
        results.clearLayers();
       
          results.addLayer(L.marker(data.results[0].latlng));
        
      });

// Locate user's position

		function onLocationFound(e) {
var mydate = new Date(e.timestamp);
L.marker(e.latlng).addTo(map).bindPopup("found your location! @ :" + mydate.toString());
    

}

function onLocationError(e) {
    alert("Unable to find your location. You may need to enable Geolocation.");
}

map.on('locationerror', onLocationError);
map.on('locationfound', onLocationFound);
map.locate({setView: true, maxZoom:15});


var baseMaps = {
    "DarkMatter": MapBox,
    "Map Box Satellite": MapBox2,
    "Comic Books": MapBox3
    
}

//create basemap control
L.control.layers(baseMaps).addTo(map);

// HEAT MAP POINTS

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


var overlay_MFstyle = L.tileLayer.wms('http://ec2-52-27-23-96.us-west-2.compute.amazonaws.com/geoserver/MFLine/wms?version=1.1.0&layers=MFLine:MFLine&styles=&bbox=477872.39639999997,4422206.1818,493409.88090000086,4430488.710000003&width=768&height=409&srs=EPSG:26918&', {
			layers: 'MFLine',
			format: 'image/png',
			transparent: true,
			continuousWorld : true,
		}).addTo(map);


var overlay_BroadStyle = L.tileLayer.wms('http://ec2-52-27-23-96.us-west-2.compute.amazonaws.com/geoserver/BroadSt/wms?version=1.1.0&layers=BroadSt:broadSt&styles=&bbox=485149.78210000135,4417272.844799999,488328.2886000002,4432419.000399999&width=330&height=768&srs=EPSG:26918&', {
			layers: 'broadSt',
			format: 'image/png',
			transparent: true,
			continuousWorld : true,
		}).addTo(map);









