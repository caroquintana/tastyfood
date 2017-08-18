$(document).ready(function() {	
	$('.cuenta').on('click', function () {
		$('.botonsign').append('<a href="index2.html" id="sign" class="waves-effect waves-light btn">SIGN UP</a>');
	});

	$('select').change(function() {
		var valorselect = $(this).val();
		//console.log(valorselect);	

		//llamada ajax
		$.ajax({
			url: 'https://developers.zomato.com/api/v2.1/search',
	  		beforeSend: function( req ) {
			req.setRequestHeader('user-key','4085ae0eef54e40f4717990b90e4bfa6');
			},
			type: 'GET',
			dataType: 'json',
			data: {
				entity_id: valorselect,
				entity_type:'city',
			},
		})
		.done(function(data) {
			console.log("success");
			data.restaurants.forEach(function(el){
				var namerestaurant = el.restaurant.name;
				var comuna = el.restaurant.location.locality;
				var fotoplato = el.restaurant.featured_image;
				var tipococina = el.restaurant.cuisines;
				var rating = el.restaurant.user_rating.aggregate_rating;
				var costopromedio = el.restaurant.average_cost_for_two;
				var direccion = el.restaurant.location.address;
				//console.log(fotoplato);
				//$('.llamada').append('<ul><li>' + name + " " + direccion +" " + '<img src="'+fotoplato  +'" class="perfilplato"></li></ul>');
				$('.llamada').append('<div class="col s4 center"><div class="contrestorant"><img src="'+fotoplato+'" class="perfilplato"><ul class="inforest"><li><p class="titulorest"><b>'+ namerestaurant +'</b></p></li><li><p class="comunarest">' + comuna + '</p></li><li><i class="fa fa-cutlery" aria-hidden="true"></i></li></ul><div class="oculto"><p class="ocultodireccion">'+ direccion+'</p><p class="ocultoprecio">'+ costopromedio+'</p><p class="ocultorating">'+ rating+'</p><p class="ocultococina">'+tipococina +'</p></div></div></div></div>');
				$('.contrestorant').on('click',function(){
					$('.inforestorant').empty();
					var titulo = "";
					var direfavoritos = "";
					var preciofavoritos ="";
					var ratingfavoritos = "";
					var titulo = $(this).find(".titulorest").text();
					var direfavoritos = $(this).find(".ocultodireccion").text();
					var preciofavoritos = $(this).find(".ocultoprecio").text();
					var ratingfavoritos = $(this).find(".ocultorating").text();
					$('.inforestorant').append('<div class="infocabecera"><ul class="listfavorito"><li class="favcabecera"><h5 class="infotitulo">'+ titulo +'</h5></li><li class="favcabecera"><i class="fa fa-heart" aria-hidden="true"></i></li></ul></div><p class="titinfo"> Address</p><p class="infomenor">'+ direfavoritos +'</p><p class="titinfo">Price</p><p class="infomenor">'+ "$ "+ preciofavoritos+'</p><p class="titinfo">Rating</p><p class="infomenor">'+ ratingfavoritos+'</p>');

				});
				$('.contrestorant').on('click',function(){
					$('.tablacomparativa').empty();
					var titulo = "";
					var cocina = "";
					var ratingfavoritos = "";
					var preciofavoritos ="";
					var titulo = $(this).find(".titulorest").text();
					var cocina = $(this).find(".ocultococina").text();
					var ratingfavoritos = $(this).find(".ocultorating").text();
					var preciofavoritos = $(this).find(".ocultoprecio").text();
					$('.tablacomparativa').append('<table border="1"><colgroup><col /><col /><col /></colgroup><thead><tr><th scope="col" class="comvacio"></th><th scope="col" class="comrest opuno">'+titulo +'</th><th scope="col" class="comrest opdos">2nd Restorant</th></tr></thead><tfoot><tr><th scope="row" class="tablenivel"><i class="fa fa-circle" aria-hidden="true"></i>Rate</th><td>'+ratingfavoritos+'</td><td>Coming soon</td></tr></tfoot><tbody><tr><th scope="row" class="tablenivel"><i class="fa fa-circle" aria-hidden="true"></i>Cuisines</th><td>'+cocina+'</td><td>Coming soon</td></tr></tbody><tfoot><tr><th scope="row" class="tablenivel"><i class="fa fa-circle" aria-hidden="true"></i>Cost for two</th><td>$'+preciofavoritos+'</td><td>Coming soon</td></tr></tfoot></table>');

				});

			});
			console.log(valorselect);

		})
		.fail(function() {
			console.log("error");
		})
		.always(function() {
			console.log("complete");
		});


	});


	
});