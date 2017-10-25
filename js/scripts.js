$(window).on('load', inicializar);

$(document).ready(function(){

	$('.desplazar').on('click', navegar);


});


function inicializar(){

	$('.overlay').fadeOut(2500);
}

function navegar(){

	let objetivo = $(this).data('seccion');

	let profundidad = $(objetivo).offset().top;

	$('html').animate({
		scrollTop:profundidad
	}, 900);

}




