
function getLocation() { 
  //Get localisation from the browser
  if (navigator.geolocation) {
    
    function geo_success(position) {
      var latitude = position.coords.latitude;
      var longitude = position.coords.longitude; 
      $('#demo').append("<p>Latitude: " + latitude +
        "<br>Longitude: " + longitude + "</p>");
      
    }
    function geo_error() {
      alert("Sorry, no position available.");
    }
      navigator.geolocation.getCurrentPosition(geo_success, geo_error);
    }

  else{
    $('#demo').append("<p>Geolocation is not supported by this browser.</p>");
  }
}

function showPosition(position) {
  //Display the current position
  $('#demo').append("<p>Latitude: " + position.coords.latitude +
    "<br>Longitude: " + position.coords.longitude + "</p>");
  }

$(document).ready(function() {
  //Calling the api to calculate distance on button click
  $('.btn').on('click', function() {
    $.getJSON('/api/distance-to-office', {latitude: latitude, longitude: longitude}, function(data){
    var kilometres = parseFloat(data.distance);
    var roundedKilometres = Math.round( kilometres * 100 ) / 100;
    $('#demo').html("<p>You are " + roundedKilometres + "Km from our offices.</p>");
    });
  })
});