/* off-canvas sidebar toggle */
$('[data-toggle=offcanvas]').click(function (e) {
    e.preventDefault()
    $('.row-offcanvas').toggleClass('active');
    $('.collapse').toggleClass('in').toggleClass('hidden-xs').toggleClass('visible-xs');
});

$(document).ready(function () {

    $('.nav li a').click(function (e) {

        $('.nav li.active').removeClass('active borderLeftViolet');

        var $parent = $(this).parent();
        $parent.addClass('active borderLeftViolet ');

        e.preventDefault();

    });

    $('.video').parent().click(function () {
        if ($(this).children(".video").get(0).paused) {
            $(this).children(".video").get(0).play();
            $(this).children(".playpause").fadeOut();
        } else {
            $(this).children(".video").get(0).pause();
            $(this).children(".playpause").fadeIn();
        }
    });
});