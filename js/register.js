$('input#txtEmail').focus();

$('button.btnCancel').on('click', function(e){ 
	e.preventDefault();
	window.location.href="../index.html"; 
});


$('button.btnOk').on('click', function(e){ 
	e.preventDefault();
	
	alert('Validando campos ....ESTO FALTA :v');
});