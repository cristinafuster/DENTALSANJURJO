$(window).on('load', inicializar);
$(window).on('scroll', efectosScroll);

$(document).ready(function(){

	$('.desplazar').on('click', navegar);


});


function inicializar(){

	$('.overlay').fadeOut(1500);
}

function navegar(){

	let objetivo = $(this).data('seccion');

	let profundidad = $(objetivo).offset().top;

	$('html').animate({
		scrollTop:profundidad
	}, 900);

}

function efectosScroll(){

/*console.log("funciona");  es una prueba md consola*/

	let scrollActual = $(window).scrollTop();

	/*console.log(scrollActual);*/

	let altoPantalla = $(window).innerHeight() / 2; 
	let profundidadBoton  = $('#tratamientos .boton').offset().top;
	let scrollObjetivo = profundidadBoton - altoPantalla;

	/*console.log(scrollObjetivo);*/

	if(scrollActual >= scrollObjetivo) {

		/*alert("llegamos");*/

		$('#tratamientos .boton').addClass('visible');

	}
}


