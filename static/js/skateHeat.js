

// Center on Philadelphia
var map = L.map('basic-map').setView([39.952299, -75.163256], 13);

/**
 * Add MapBox basemaps to the map

 */

var MapBox = L.tileLayer('http://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
	attribution: 'Imagery from <a href="http://mapbox.com/about/maps/">MapBox</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
	subdomains: 'abcd',
	id: 'throbbinggristle.3c68c2db',
	accessToken: 'pk.eyJ1IjoidGhyb2JiaW5nZ3Jpc3RsZSIsImEiOiJmYWZhOTdjNjY4ZmUwMThlNTI3Y2Y1MmFmODY3YzljYiJ9.63LwhUTYUG54vqH4P_fZPA'
}).addTo(map);


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



// HEAT MAP POINTS

var points = [
[39.954076, -75.165458,"<img src='/static/lib/images/kalis.jpg'>"],
[39.953866, -75.164226],
[39.953692, -75.163673,"<img src=''>"],
[39.954306, -75.163636,"<img src='/static/lib/images/corcoran.jpg'>"],
[39.957651, -75.194073,"<img src='http://stwww.skateboardermag.com/wp-content/uploads/2013/03/Screen-shot-2013-03-05-at-8.24.48-AM-300x225.jpg'>"],
[39.978906, -75.157264,"<img src='/static/lib/images/sergeibslip.jpg'>"],
[39.981260, -75.152619,"<img src='/static/lib/images/tempHub.jpg'>"],
[39.980713, -75.157173,"<img src='/static/lib/images/wenning.jpg'>"],
[39.950971, -75.150658,"<img src=''>"],
[39.957682, -75.164622,"<img src='/static/lib/images/fgssolliechrome.jpg'>"],
[39.953924, -75.165937,"<img src='/static/lib/images/motorGall.jpg'>"],
[39.982676, -75.134686,"<img src='/static/lib/images/blueRed.jpg'>"],
[39.983469, -75.123313,"<img src='/static/lib/images/popsPark.jpg'>"],
[39.938468, -75.163468,"<img src='/static/lib/images/popsPark.jpg'>"],
[39.941171, -75.166225,"<img src='/static/lib/images/churchBump.png'>"],
[39.914847, -75.171981,"<img src='/static/lib/images/'>"],//oregon ledges
[39.954446, -75.165203,"<img src='/static/lib/images/patLip.jpg'>"],//love rail
[39.898703, -75.182027,"<img src='/static/lib/images/FDR.jpg'>"],
[39.962882, -75.180253,"<img src='/static/lib/images/paine.jpg'>"],
[39.952344, -75.165615,"<img src='/static/lib/images/style.jpg'>"],
[39.955016, -75.185809,"<img src='/static/lib/images/drexel.jpg'>"],
[39.954179, -75.165559,"<img src='/static/lib/images/wenningGap.jpg'>"],
[39.954465, -75.168045,"<img src='/static/lib/images/'>"],//blue round rail
[39.947460, -75.139894,"<img src='/static/lib/images/crossSuciu.jpg'>"],
[39.950758, -75.151376,"<img src='/static/lib/images/suciuOld.jpg'>"],//oldCity rail,
[39.954003, -75.166246,"<img src='/static/lib/images/loveBlue.jpg'>"],
[39.966847, -75.151556,"<img src='/static/lib/images/poplar.jpg'>"],
[39.937332, -75.158285,"<img src='/static/lib/images/popsFB.jpg'>"]



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


var overlay_DefaultPoint = L.tileLayer.wms('http://ec2-52-27-23-96.us-west-2.compute.amazonaws.com/geoserver/stations/wms?version=1.1.0&layers=stations:stations&styles=&bbox=477857.54260000214,4417298.476600001,493338.80950000044,4432409.611500002&width=768&height=749&srs=EPSG:26918&', {
			layers: 'stations',
			format: 'image/png',
			transparent: true,
			continuousWorld : true,
		}).addTo(map);









