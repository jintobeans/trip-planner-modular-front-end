const mapboxgl = require("mapbox-gl");


var buildMarker = function(type, coordinates) {
  let markerDomEl = document.createElement("div")
  markerDomEl.style.width = "32px"
  markerDomEl.style.height = "39px"

  let backgroundImages = {
    activity: 'url(http://i.imgur.com/WbMOfMl.png)',
    hotel: 'url(http://i.imgur.com/D9574Cu.png)',
    restaurant: 'url(http://i.imgur.com/cqR6pUI.png)'
  }
  markerDomEl.style.backgroundImage = backgroundImages[type]
  return new mapboxgl.Marker(markerDomEl).setLngLat(coordinates)
}


module.exports = buildMarker
