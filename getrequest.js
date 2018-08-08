var API_ENDPOINT = "***"

document.getElementById("searchButton").onclick = function(){

	var county = $('#county').val();


	$.ajax({
				url: API_ENDPOINT + '?county='+county,
				type: 'GET',
				success: function (response) {

					$('#posts tr').slice(1).remove();

	        jQuery.each(response, function(i,data) {



						$("#posts").append("<tr> \
								<td>" + data['Property_ID'] + "</td> \
								<td>" + data['Address'] + "</td> \
								<td>" + data['Property_Type'] + "</td> \
								<td>" + data['Listing_Price'] + "</td> \
								</tr>");
	        });
				},
				error: function () {
						alert("error");
				}
		});
}


var dallas = {lat: 32.8208751, lng: -96.871628};
var locations = [[32.8208751,-96.871628],[32.8318751,-96.82628]]

function initMap() {
  
  
  
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 10,
    center: dallas
  });
  
   var infowindow = new google.maps.InfoWindow();

    var marker, i;
    var markers = new Array();

    for (i = 0; i < locations.length; i++) {  
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i][0], locations[i][1]),
        map: map
      });

      markers.push(marker);
}

}
