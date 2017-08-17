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

