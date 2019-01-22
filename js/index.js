$('div.form-container div.c-input input.input').on('focus', function(){
	$(this).parent().addClass('current-row-form');
}).on('focusout', function(){
	$(this).parent().removeClass('current-row-form');
});

$('button#btnLogin').on('click', function(){
	window.location.href= "../main.html";
});

$('input#txtEmail').focus();