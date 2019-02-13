$('a#btnPulishService').on("click", function (e) {
    e.preventDefault();

    var $modal = $('div#c-modal-create-service');
    $modal.fadeIn('slow');

});

$('button.btnCancel').on("click", function (e) {
    e.preventDefault();
    var $modal = $(this).closest('.c-modal');
    $modal.fadeOut('slow');
});