
$(window).on('scroll', efectosScroll);


$(document).ready(function(){

	$('.barras').on('click', muestraMenu);


});


function muestraMenu(){
	$('nav').toggleClass('abierto');
	}





function efectosScroll(){

	let scrollActual = $(window).scrollTop();
	let altoPantalla = $(window).innerHeight() / 2; 
	let profundidadBoton  = $('#tratamientos .boton').offset().top;
	let scrollObjetivo = profundidadBoton - altoPantalla;

	if(scrollActual >= scrollObjetivo) {

	$('#tratamientos .boton').addClass('visible');

	}
}

function mostrarMenu() {

	$('.menu').toggleClass('abierto');
	}
