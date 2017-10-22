

$(document).ready(function(){

$('.boton').on('click',cambiaClases);
	});

function cambiaClases(){

$('.boton').addClass('inactivo');

$(this).removeClass('inactivo').addClass('activo');
		}
