
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
      console.log("Sorry, no position available.");
    }
      navigator.geolocation.getCurrentPosition(geo_success, geo_error);
    }

  else{
    $('#demo').append("<p>Geolocation is not supported by this browser.</p>");
  }
}

function showPosition(position) {
  console.log("Hello");
  //Display the current position
  $('#demo').append("<p>Latitude: " + position.coords.latitude +
    "<br>Longitude: " + position.coords.longitude + "</p>");
  }

