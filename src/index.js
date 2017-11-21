console.log('hello')

const mapboxgl = require("mapbox-gl");

const buildMarker = require('./marker.js')

mapboxgl.accessToken = "pk.eyJ1IjoibWlrZWthbnRlciIsImEiOiJjamE5dDNwNmkwYzAyMzJuY290NHhrZmVuIn0.yscadQN4NsOFyTiImiD3qg";

const map = new mapboxgl.Map({
  container: "map",
  center: [-90.0715, 29.9511], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

const markerDomEl = document.createElement("div")
markerDomEl.style.width = "32px"
markerDomEl.style.height = "39px"
markerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";

new mapboxgl.Marker(markerDomEl).setLngLat([-90.0715, 29.9511]).addTo(map)

buildMarker('restaurant', [-91.0715, 29.9511]).addTo(map)

buildMarker('hotel', [-90.0715, 29.5511]).addTo(map)
