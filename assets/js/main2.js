$(document).ready(function() {
  //Menu Desplegable.
     $(".button-collapse").sideNav({
     	 menuWidth: 250,
     });

    //Validación SIGN UP
    $('#btn-signUp').click(function(){
    	if(validarName()){
    		if(validarCorreo()){
    			if(validarPass()){
    				 window.location.href = "index3.html"; 
    			}
    		}
    	}
    })
});

//Validación Nombre del usuario.
function validarName(){
	var nombre = $('#name').val();
	if(nombre == ""){
		$('#noName').html('*Debe ingresar un nombre');
		$('#name').val("");
		return false;
	}else{
        $('#noName').html("");
        localStorage.setItem('guardarName', nombre);
        return true;
	}
};
//Validación  de correo.
function validarCorreo(){
   var email = $('#email').val();

   if(email == ""){
		$('#noEmail').html('*Debe ingresar un email');
		$('#email').val("");
		return false;
	}else if(!(/^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$/.test(email))) {
        $('#noEmail').html('*Debe ingresar un email valido');
        $('#email').val("");
        return false;
    }else{
        $('#noEmail').html("");

        localStorage.setItem('guardarEmail', email);
        return true;
	}
};

//Validación de contraseña.
function validarPass(){
	var pass = $('#password').val();

	if(pass == ""){
		$('#noPassword').html('*Debe ingresar una contraseña');
		$('#password').val("");
		return false;
	}else{
        $('#noPassword').html("");
        return true;
	}
};
