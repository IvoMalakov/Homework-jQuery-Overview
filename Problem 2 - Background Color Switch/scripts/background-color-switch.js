$(document).ready(function () {
    "use strict";

    function paintElements () {
        var classInput = $('#className'),
            className = classInput.val(),
            color = $('#color').val(),
            elemetsForPaintig = $('.' + className);

        elemetsForPaintig.css('background-color', color);
        classInput.val('');
    }

    $('#paintBtn').click(paintElements);
});