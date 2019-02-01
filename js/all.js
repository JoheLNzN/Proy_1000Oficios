$('div.c-input input.input').on('focus', function(){
	$(this).parent().addClass('current-row-form');
}).on('focusout', function(){
	$(this).parent().removeClass('current-row-form');
});

/* Message Close Automatic */

function showMessageSuccess(message) {

    var $div = '<div class="c-notificacion notificacion-success" id="msgSuccess">' +
                     '<p>' + message + '</p>' +
               '</div>';

    $('body').append($div);

    var $id = $(document).find('#msgSuccess');

    $id.animate({ right: '15px' }, 600, 'easeOutBounce');

    var intervalo = setInterval(function () {
        $id.animate({ right: '-600px' }, 600, 'easeOutBounce', function () {
            $(document).find('div#msgSuccess').remove();
        });

        clearInterval(intervalo);
    }, 5000);
}

/* Loader */

function showLoader() {
    $('div#c-loader').fadeIn('slow');
}

function hideLoader() {
    $('div#c-loader').fadeOut('slow');
}