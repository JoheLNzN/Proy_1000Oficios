$('input#txtEmail').focus();

$('button.btnCancel').on('click', function(e){ 
	e.preventDefault();
	window.location.href="../index.html"; 
});


$('button.btnOk').on('click', function(e){ 
	e.preventDefault();

	/* Obtener el plan seleccionado*/

	var $plan = $('ul.list-plans li.selected');

	var $msg = $plan.length == 0 ? 'No ha seleccionado un plan.' : 
	          'El plan seleccionado es de ' + ($plan.find('span.type-plan').html());

	alert('Validando campos, ' + $msg);
});

/* Seleccionar un plan */

$('ul.list-plans li').on('click', function(e){
	e.preventDefault();

	var $current = $(this);

	$current.toggleClass('selected').siblings().removeClass('selected');

});