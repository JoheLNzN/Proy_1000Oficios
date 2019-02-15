$('a#btnPulishService').on("click", function (e) {
    e.preventDefault();
    
    var $modal = $('div#c-modal-create-service');
    $modal.fadeIn('slow');

    $modal.find('div.form-container').addClass('show');
});

$('a#gotoSubscription').on("click", function (e) {
    e.preventDefault();
    
    var $modal = $('div#c-modal-subscription');
    $modal.fadeIn('slow');
    $modal.find('div.form-container').addClass('show');
});


$('button.btnCancel').on("click", function (e) {
    e.preventDefault();
    var $modal = $(this).closest('.c-modal');
    $modal.find('div.form-container').removeClass('show');
    $modal.fadeOut(1100);
});

/* Contar publicaciones */

function countPublications(){

	var $name =  $('div.c-information span.i-name').text();
	var $total = $('div.service').length;

	var $publications = 0;

	$('div.c-services span.sa-worker').each(function(i, item){
		if($(this).text() == $name)
			$publications ++;
	});

	$('span.s-value-publication-mio').text($publications);
	$('span.s-value-publication-total').text($total);

}

countPublications();


$('a.getService').on('click', function(e){
     e.preventDefault();
    
    var $modal = $('div#viewer');
    $modal.fadeIn('slow');
});