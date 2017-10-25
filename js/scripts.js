$(window).on('load', inicializar);

$(document).ready(function(){

	$('.fa-bars').on('click', visibilidadMenu);

	$('.desplazar').on('click', navegar);

});


function visibilidadMenu(){

	$('#menu').toggleClass('abierto');
}

function inicializar(){

	$('.overlay').fadeOut(2500);
}

function navegar(){

	let objetivo = $(this).data('seccion');

	let profundidad = $(objetivo).offset().top;

	$('html').animate({
		scrollTop:profundidad
	}, 900);

	$('.menu').removeClass('abierto');
}
