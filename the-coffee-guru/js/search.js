let map;
let service;
let infowindow;

function search() {
  // This asks the user for permission and then receives the latitude and longitude
  navigator.geolocation.getCurrentPosition(
        position => {
          lat = position.coords.latitude;
          lng = position.coords.longitude;

          // This creates an instance of my location
          const current_position = new google.maps.LatLng(lat, lng);

          // Generates map from current_position
          map = new google.maps.Map(document.getElementById("map"), {
            center: current_position,
            zoom: 15
          });

          // Creates instance of info window, displays data
          infowindow = new google.maps.InfoWindow();

          // Uses our current_position as point of origin, and finds nearby shops
          var request = {
            location:current_position,
            radius:4023,
            types: ['cafe']
          }

          // makes instance of google service
          service = new google.maps.places.PlacesService(map);
          
          //find nearby places using request variable
          service.nearbySearch(request, callback);
  })
}

// Gets results of found locations
function callback(results, status) {
  if (status == google.maps.places.PlacesServiceStatus.OK) {
    for (var i = 0; i < results.length; i++) {
      createMarker(results[i]);
    }
  }
}
// Creates a marker on the map at coordinate location
function createMarker(place) {
  const marker = new google.maps.Marker({
    map,
    position: place.geometry.location,
    title: place.name
  });

  // When you click the marker, it opens the info window
  marker.addListener('click', function() {

    // Displays info to info window
    infowindow.setContent(place.name);
    infowindow.open(map, marker);
  });
}

// Creates a marker on the map at coordinate location
function createMarker(place) {
  const marker = new google.maps.Marker({
    map,
    position: place.geometry.location,
    title: place.name
  });

  // When you click the marker, it opens the info window
  marker.addListener('click', function() {

    // Displays info to info window
    infowindow.setContent(place.name);
    infowindow.open(map, marker);
  });
}