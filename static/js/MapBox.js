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
  id: 'markassbusta.5123f87c',
  accessToken: 'pk.eyJ1IjoibWFya2Fzc2J1c3RhIiwiYSI6Il83Y1R5ZXMifQ.H-N8zfJJm4fhvseViCXhuA'
}).addTo(map);

// Neighborhoods geojson URL
 var overlay_neighborStyle = L.tileLayer.wms('http://ec2-52-25-236-134.us-west-2.compute.amazonaws.com/geoserver/neighborhoods/wms?version=1.1.0&layers=neighborhoods:Neighborhoods_Philadelphia&styles=&bbox=2660586.2010556012,204650.5548618585,2750109.               0049492796,304965.3233920191&width=685&height=768&srs=EPSG:2272&', {
              layers: 'Neighborhoods_Philadelphia',
              format: 'image/png',
              	transparent: true,
               continuousWorld : true,
           }).addTo(map);

L.control.weather({
  lang: "es",
  units: "metric"
}).addTo(map);  


  L.controlCredits({
             image: "static/lib/images/geoServer.png",
             link: "http://www.geoserver.org/",
             text: "Overlay created with geoserver<br/>by GreenInfo Network"
         }).addTo(map);

  L.control.locate().addTo(map);	


  map.addControl( new L.Control.Compass() );