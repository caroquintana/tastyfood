$(document).ready(function() {
	$.ajax({
		url: 'https://developers.zomato.com/api/v2.1/search',
  		beforeSend: function( req ) {
		req.setRequestHeader('user-key','e2572b7de006db5c1f067f8e01aa10c4');
		},
		type: 'GET',
		dataType: 'json',
		data: {
			entity_id: 83,
			entity_type:'city',
		},
	})
	.done(function(data) {
		console.log("success");

		/*data.restaurants.forEach(function(el){
			var name = el.restaurant.name;
			var direccion = el.restaurant.location.locality;
			var fotoplato = el.restaurant.featured_image;
			console.log(fotoplato);
			//$('.llamada').append('<ul><li>' + name + " " + direccion +" " + '<img src="'+fotoplato  +'" class="perfilplato"></li></ul>');
			$('.llamada').append('<img src="' + fotoplato +'" class="perfilplato"><div class="continfo"><p class="titulorestorant"><b>'+ name +'</b>'+ direccion +' <i class="fa fa-cutlery" aria-hidden="true"></i></p></div>');
		});*/
		

	})
	.fail(function() {
		console.log("error");
	})
	.always(function() {
		console.log("complete");
	});
	
});