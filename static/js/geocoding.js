var geo = function () {
  function getLocation() { 
  //Get localisation from the browser
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(geo_success, geo_error);
        //InitializeMap;
        //navigator.geolocation.getCurrentPosition(showPosition);
    }
    else{
      $('#demo').append("<p>Geolocation is not supported by this browser.</p>");
    }
  }

  //Function to to retrieve the position and use it to get the distance
  function geo_success(position) {
      var latitude = position.coords.latitude;
      var longitude = position.coords.longitude;
      //Use Ajax to use the api and calculate the distance 
      $.getJSON('/api/distance-to-office', {latitude: latitude, longitude: longitude}, function(data){
	  $.each(data, function(index, element) { //parse json object to retrieve the data
		roundedDistance = Math.round(element * 100) / 100; 
		$('#demo').html("<p> You are " + roundedDistance + " kms away!</p>");
	  });
      });
  }
  //Function to handle erro of geolocation
  function geo_error() {
      alert("Sorry, no position available.");
  }
}

//Function to show position on a map
function InitializeMap() {
        navigator.geolocation.getCurrentPosition(function(position) {
        	var latitude = position.coords.latitude;
        	var longitude = position.coords.longitude;
		var accuracy = position.coords.accuracy;
		var latlng = new google.maps.LatLng(latitude, longitude);
		var myOptions = {
			zoom: 13,
			center: latlng,
			mapTypeId: google.maps.MapTypeId.ROADMAP
		};
		var locations = [
			['You are here', latitude, longitude],
			['Our office', 51.521328, -0.109799]
		];
		var map = new google.maps.Map(document.getElementById("map"), myOptions);
		var infowindow = new google.maps.InfoWindow();
		var marker, i;
	    	for (i = 0; i < locations.length; i++) {  
	      		marker = new google.maps.Marker({
	          	position: new google.maps.LatLng(locations[i][1], locations[i][2]),
	        	map: map
	      	});
	  	google.maps.event.addListener(marker, 'click', (function(marker, i) {
			return function() {
		        infowindow.close();
			infowindow.setContent(locations[i][0]);
	            	infowindow.open(map, this);
          		}
          	})(marker, i));
    		}			
	}, function error(msg){
		alert('Please enable your GPS position future.');  
		}, {maximumAge:600000, timeout:5000, enableHighAccuracy: true}
	);
}

window.onload = InitializeMap();
$(document).ready(function() {
  //Calling the api to calculate distance on button click
  $('.jumbotron .btn').on('click', function() {
  	geo.getLocation();
  	$('.jumbotron .btn').html("Here you go").removeClass('btn-primary').addClass('btn-info');
  });
  $('.viewMap .btn').on('click', function() {
	  //change css to make the map visible
	  $('#map').css('visibility', 'visible');
  });
});
