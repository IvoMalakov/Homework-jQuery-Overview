$(document).ready(function () {
    var imageIndex = 0,
        slider = $('#slider'),
        images = $('#slider img'),
        numberOfImages = images.length,
        leftButton = $('#left'),
        rightButton = $('#right'),
        timeOut = 5000,
        animationDuration = 750,
        imageWidth = 500;

    function resetSlider () {
        if (imageIndex >= numberOfImages) {
            imageIndex = 0;
            slider.css('left', 0);
        } else if (imageIndex < 0) {
            imageIndex = numberOfImages - 1;
            slider.css('left', -imageWidth * imageIndex);
        }
    }

    setInterval(function () {
        imageIndex++;
        slider.animate({
            left: '-=' + imageWidth
        },
            animationDuration,
            resetSlider
        );
    }, timeOut);

    leftButton.click(function () {
        imageIndex--;
        slider.animate({
            left: '+=' + imageWidth
        },
            animationDuration,
            resetSlider
        );
    });

    rightButton.click(function () {
        imageIndex++;
        slider.animate({
                left: '-=' + imageWidth,
            },
            animationDuration,
            resetSlider
        );
    });
});