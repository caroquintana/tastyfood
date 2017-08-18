$(document).ready(function () {

	var localNombre = localStorage.getItem('guadarName'); 
	$('#nombre').html(localNombre); 
	var localCorreo = localStorage.getItem('guadarEmail'); 
	$('#correo').html(localCorreo); 



	$('#files').on('click', function(){

            $('#files').change(function(){

             var reader = new FileReader();

                reader.onload = function(file){

                    var fileContent = file.target.result;

                     //crear img y guardar en localStorage
                    var img = '<img width="80%" src="" class="imagen-cargada"' + fileContent + '">';
                    localStorage.setItem('foto', img);

           
                }

                reader.readAsDataURL(this.files[0]);


      });

  });

     var localFoto = localStorage.getItem('foto');
                    $("#imagen").html(localFoto);
});