$('a#btnPulishService').on("click", function (e) {
    e.preventDefault();
    
    var $modal = $('div#c-modal-create-service');
    $modal.fadeIn('slow');

    $modal.find('div.form-container').addClass('show');
});

$('button.btnCancel').on("click", function (e) {
    e.preventDefault();
    var $modal = $(this).closest('.c-modal');
    $modal.find('div.form-container').removeClass('show');
    $modal.fadeOut(1100);
});