import $ from 'jquery';

$(document).ready(function() {

    $('.js-to-top').click((event) => {
        event.preventDefault();

    $('html, body').animate({
        scrollTop: $('.js-body').offset().top
    }, 200);
});

});
