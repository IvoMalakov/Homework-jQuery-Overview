$(document).ready(function () {
    "use strict";

    $('#list')
        .prepend($('<li>').text("Task 0"))
        .append($('<li>').text("Task 6"));
});