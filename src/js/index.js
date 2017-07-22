//import $ from 'jquery';
$(document).ready(function() {

    $('.js-to-top').click((event) => {
        event.preventDefault();

    $('html, body').animate({
        scrollTop: $('.js-body').offset().top
    }, 200);
});


$(function ($) {
    var slider = $('.mis-stage').miSlider({
    stageHeight: 380,
    slidesOnStage: false,
    slidePosition: 'center',
    slideStart: 'mid',
    slideScaling: 150,
    offsetV: -5,
    centerV: true,
    navButtonsOpacity: 1
});

/*var slider = $('.mis-stage').miSlider({
    speed: 700,
    pause: 4000,
    increment: 1,
    stageHeight: false,
    slidesOnStage: 1,
    slidesContinuous: true,
    slidePosition: "left",
    slideStart: "beg",
    slideWidth: false,
    slideScaling: 100,
    offsetV: 0,
    centerV: false,
    slideClickable: true,
    navList: true,
    navButtons: true,
    navButtonsShow: false,
    navButtonsOpacity: 0.5,
    randomize: false,
    slidesLoaded: false,
    beforeTrans: false,
    afterTrans: false,
    classStage: "mis-stage",
    classSlider: "mis-slider",
    classSlide: "mis-slide",
    classNavButtons: "mis-nav-buttons",
    classNavList: "mis-nav-list",
    orSlider: "ol",
    selectorSlide: "li"
});*/

});

    /*  $( ".main-nav__btn-cross" ).hide();
     $( ".main-nav__mobile" ).hide();
     $( ".main-nav__btn-hamburger" ).click(function() {
     $( ".main-nav__mobile" ).slideToggle( "slow", function() {
     $( ".main-nav__btn-hamburger" ).hide();
     $( ".main-nav__btn-cross" ).show();
     });
     });

     $( ".main-nav__btn-cross" ).click(function() {
     $( ".main-nav__mobile" ).slideToggle( "slow", function() {
     $( ".main-nav__btn-cross" ).hide();
     $( ".main-nav__btn-hamburger" ).show();
     });
     });*/
});

