$(window).on('load', inicializar);
$(window).on('scroll', efectosScroll);


$(document).ready(function(){

	$('.desplazar').on('click', navegar);
	$('nav').addClass('visible');


/* PLUGIN TYPED.JS */
	var typed = new Typed('#escrito', {
	  strings: ["Su clínica dental en Ribeira", "Su clínica dental en Ribeira: más de 20 años cuidando su boca"],
	  typeSpeed: 60,
	  loop: true,
	  smartBackspace: true
	});

});



function inicializar(){

	$('.overlay').fadeOut(2000);
}

function navegar(){

	let objetivo = $(this).data('seccion');

	let profundidad = $(objetivo).offset().top;

	$('html').animate({
		scrollTop:profundidad
	}, 1100);

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


