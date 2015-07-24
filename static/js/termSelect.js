

// Center on Airport
var map = new L.map('basic-map', {zoomControl:false}).setView([39.952299, -75.163256], 15);

/**
 * Add basemap tiles 
 */
 var CartoDB_PositronNoLabels = L.tileLayer('http://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png', {
	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>',
	subdomains: 'abcd',
	maxZoom: 19
}).addTo(map);




// airport terminal buildings geojson URL
var apTerm = "/static/data/airportTerm.geojson"


// add geoJSON select control function 
$.getJSON(apTerm,function(data){
	var geoLayer = L.geoJson(data).addTo(map);

	map
		.fitBounds( geoLayer.getBounds() )
		.setMaxBounds( geoLayer.getBounds().pad(0.5) );

		var geoList = new L.Control.GeoJSONSelector( geoLayer );

		geoList.on('item-active', function(e) {
			$('#selection').text( JSON.stringify(e.layer.feature.properties.TYPE) );

});	
	map.addControl(geoList);
});

// add geoserver overlays
var overlay_DefaultPolygon = L.tileLayer.wms('http://ec2-52-27-23-96.us-west-2.compute.amazonaws.com/geoserver/airportRunways/wms?version=1.1.0&layers=airportRunways:GIS_AIRPORT.Runways&styles=&bbox=-75.2752807767853,39.8605440088057,-75.2126961472546,39.8877399676479&width=768&height=333&srs=EPSG:4326&', {
			layers: 'GIS_AIRPORT.Runways',
			format: 'image/png',
			transparent: true,
			continuousWorld : true,
		}).addTo(map);

var overlay_DefaultPolygon = L.tileLayer.wms('http://ec2-52-27-23-96.us-west-2.compute.amazonaws.com/geoserver/RentalPoly/wms?version=1.1.0&layers=RentalPoly:GIS_AIRPORT.Rental_Car_Lots&styles=&bbox=-75.2471929895799,39.87788710365,-75.2419448620285,39.8833845470283&width=733&height=768&srs=EPSG:4326&', {
			layers: 'GIS_AIRPORT.Rental_Car_Lots',
			format: 'image/png',
			transparent: true,
			continuousWorld : true,
		}).addTo(map);

var overlay_termStyle = L.tileLayer.wms('http://ec2-52-27-23-96.us-west-2.compute.amazonaws.com/geoserver/airportTerminal/wms?version=1.1.0&layers=airportTerminal:GIS_AIRPORT.Terminal_Buildings&styles=&bbox=-75.2526089529656,39.872374656598,-75.2356681252549,39.8824379618888&width=768&height=456&srs=EPSG:4326&', {
			layers: 'GIS_AIRPORT.Terminal_Buildings',
			format: 'image/png',
			transparent: true,
			continuousWorld : true,
		}).addTo(map);


var overlay_DefaultPolygon = L.tileLayer.wms('http://ec2-52-25-236-134.us-west-2.compute.amazonaws.com/geoserver/apParking/wms?version=1.1.0&layers=apParking:fewerLots&styles=&bbox=-75.2516064926151,39.8764872354633,-75.230890030485,39.8917234949106&width=768&height=564&srs=EPSG:4326&', {
			layers: 'fewerLots',
			format: 'image/png',
			transparent: true,
			continuousWorld : true,
		}).addTo(map);

var overlay_DefaultLine = L.tileLayer.wms('http://ec2-52-25-236-134.us-west-2.compute.amazonaws.com/geoserver/moreRail/wms?version=1.1.0&layers=moreRail:betterCut&styles=&bbox=-75.2566496244127,39.8748353626317,-75.2387004186045,39.8986308782245&width=579&height=768&srs=EPSG:4326&', {
			layers: 'betterCut',
			format: 'image/png',
			transparent: true,
			continuousWorld : true,
		}).addTo(map);

var overlay_DefaultLine = L.tileLayer.wms('http://ec2-52-25-236-134.us-west-2.compute.amazonaws.com/geoserver/lessRail/wms?version=1.1.0&layers=lessRail:lessRail&styles=&bbox=-75.248345225291,39.8755839879008,-75.2398432788398,39.8794156448123&width=768&height=346&srs=EPSG:4326&', {
			layers: 'lessRail',
			format: 'image/png',
			transparent: true,
			continuousWorld : true,
		}).addTo(map);




// add clusters for art exhibits
var artURL = "/static/data/airportArt.geojson"


var pointG= "/static/lib/images/art.png"

$.getJSON(artURL,function(data){
	var artIcon = L.icon({
		iconUrl: pointG,
		iconSize: [20,20]
	});
	 var exhibits = L.geoJson(data,{
		pointToLayer: function(feature,latlng){
			var marker = L.marker(latlng,{icon: artIcon});
			marker.bindPopup(feature.properties.EXHIBITION + '<br/>' + feature.properties.PATH);
			return marker;
		}
	});
	 var clusters = L.markerClusterGroup();
	 clusters.addLayer(exhibits);
	 map.addLayer(clusters);
	});

// add clusters for information stations

var infoURL = "/static/data/information.geojson"

var inform = "/static/lib/images/info.png"

$.getJSON(infoURL,function(data){
	var infoIcon = L.icon({
		iconUrl: inform,
		iconSize: [17,17]
	});
	 var information = L.geoJson(data,{
		pointToLayer: function(feature,latlng){
			var marker = L.marker(latlng,{icon: infoIcon});
			marker.bindPopup(feature.properties.TYPE + '<br/>' + feature.properties.TERMINAL);
			return marker;
		}
	});
	 var clustersC = L.markerClusterGroup();
	 clustersC.addLayer(information);
	 map.addLayer(clustersC);
	});
// add ATMs cluster

var atmURL = "/static/data/ATMS.geojson"

var money = "/static/lib/images/money.png" 

$.getJSON(atmURL,function(data){
	var atmIcon = L.icon({
		iconUrl: money,
		iconSize: [25,25]
	});
	 var ATMs = L.geoJson(data,{
		pointToLayer: function(feature,latlng){
			var marker = L.marker(latlng,{icon: atmIcon});
			marker.bindPopup(feature.properties.TYPE + '<br/>' + feature.properties.TERMINAL);
			return marker;
		}
	});
	 var clustersB = L.markerClusterGroup();
	 clustersB.addLayer(ATMs);
	 map.addLayer(clustersB);
	});

//add petPort clusters
var petURL = "/static/data/petPort.geojson"

var paws = "/static/lib/images/paw.png"

$.getJSON(petURL,function(data){
	var pawIcon = L.icon({
		iconUrl: paws,
		iconSize: [20,20]
	});
	 var PS = L.geoJson(data,{
		pointToLayer: function(feature,latlng){
			var marker = L.marker(latlng,{icon: pawIcon});
			marker.bindPopup(feature.properties.TYPE + '<br/>' + feature.properties.TERMINAL);
			return marker;
		}
	});
	 var clustersD = L.markerClusterGroup();
	 clustersD.addLayer(PS);
	 map.addLayer(clustersD);
	});

// add powerStation Clusters

var powerURL = "/static/data/power.geojson"

var power = "/static/lib/images/power.png"

$.getJSON(powerURL,function(data){
	var pwrIcon = L.icon({
		iconUrl: power,
		iconSize: [20,20]
	});
	 var pwr = L.geoJson(data,{
		pointToLayer: function(feature,latlng){
			var marker = L.marker(latlng,{icon: pwrIcon });
			marker.bindPopup(feature.properties.TYPE + '<br/>' + feature.properties.TERMINAL);
			return marker;
		}
	});
	 var clustersE = L.markerClusterGroup();
	 clustersE.addLayer(pwr);
	 map.addLayer(clustersE);
	});

// Add Title 
var title = new L.Control();
		title.onAdd = function (map) {
			this._div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
			this.update();
			return this._div;
		};
		title.update = function () {
			this._div.innerHTML = '<h2>Philadelphia International Airport</h2>'
		};
		title.addTo(map);


// Add Legend
var legend = L.control({position: 'bottomright'});
		legend.onAdd = function (map) {
			var div = L.DomUtil.create('div', 'info legend');
			div.innerHTML = "<h3><u>Legend:</u></h3><table><img src=/static/lib/images/info.png>Information</table><table><img src=/static/lib/images/money.png>ATM</table><table><img src=/static/lib/images/power.png>Power Station</table><table><img src=/static/lib/images/paw.png>Pet Port</table><table><img src=/static/lib/images/art.png>Art Exhibit</table>";
    		return div;
		};
		legend.addTo(map);

// add bookmarks widget

var control = new L.Control.Bookmarks().addTo(map);


		//var zoomHome = L.Control.zoomHome();
//zoomHome.addTo(map);








 





 




