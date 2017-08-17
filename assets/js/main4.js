var map;
function initialize() {
              var map = new google.maps.Map(
                document.getElementById('map'), {
                  center: new google.maps.LatLng(-33.4488897, -70.6692655),
                  zoom: 15,
                  mapTypeId: google.maps.MapTypeId.ROADMAP
                });
              var image = {
                url: '../../dist/img/fork.png',
          // This marker is 35 pixels wide by 35 pixels high.
          size: new google.maps.Size(50, 60),
          // The origin for this image is (0, 0).
          origin: new google.maps.Point(0, 0),
          // The anchor for this image is the base of the flagpole at (0, 32).
          anchor: new google.maps.Point(0, 35)
        };
        var clickMarker = new google.maps.Marker({
          position: map.getCenter(),
          map: map,
          draggable: true,
          icon: image,
          label: {
            title: '$85',
            color: 'black',
            fontSize: '15px',
            fontWeight: 'bold'
          }
        });
      }

$(document).ready(function() {
	$('select').material_select();
});