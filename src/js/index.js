//import 'slick-carousel/slick/slick-theme.scss';
//import $ from 'jquery';
//import './scrollto';
//import "menu";
"use strict";
$(document).ready(function () {

//to top button

    $('.js-to-top').click((event)=>{
        event.preventDefault();

    $('html, body').animate({
        scrollTop: $('.js-body').offset().top
    }, 200);
});


//services slider

    function initServiceSlider() {
        var $slider = $('.services__list'),
            settings = {
                autoplay      : true,
                autoplaySpeed : 4500,
                slidesToShow: 1,
                slidesToScroll: 1,
                prevArrow     : '<button class="services__btn services__btn_left">' +
                '<svg class="svg-arrow"><use xlink:href="#left-arrow"></use></svg></button>',
                nextArrow     : '<button class="services__btn services__btn_right">' +
                '<svg class="svg-arrow "><use xlink:href="#left-arrow"></use></svg></button>',
                arrows: true,
                dots: true
            },
            targetClass = 'slick-initialized',
            mq = window.matchMedia('(min-width: 767px)');

        mq.addListener(onWidthChange);

        onWidthChange(mq);

        function onWidthChange(_mq) {
            if (_mq.matches) {
                if ($slider.hasClass(targetClass)) {
                    $slider.slick('unslick');
                }
            } else {
                if (!$slider.hasClass(targetClass)) {
                    $slider.slick(settings);
                }
            }
        }
    }

    initServiceSlider();

//svg sprite
    ( function (window, document) {
        'use strict';

        var file = 'src/i/sprite/sprite.svg',
            revision = 1;

        if (!document.createElementNS || !document.createElementNS('http://www.w3.org/2000/svg', 'svg').createSVGRect)
            return true;

        var isLocalStorage = 'localStorage' in window && window['localStorage'] !== null,
            request,
            data,
            insertIT = function () {
                document.body.insertAdjacentHTML('afterbegin', data);
            },
            insert = function () {
                if (document.body) insertIT();
                else document.addEventListener('DOMContentLoaded', insertIT);
            };

        if (isLocalStorage && localStorage.getItem('inlineSVGrev') == revision) {
            data = localStorage.getItem('inlineSVGdata');
            if (data) {
                insert();
                return true;
            }
        }

        try {
            request = new XMLHttpRequest();
            request.open('GET', file, true);
            request.onload = function () {
                if (request.status >= 200 && request.status < 400) {
                    data = request.responseText;
                    insert();
                    if (isLocalStorage) {
                        localStorage.setItem('inlineSVGdata', data);
                        localStorage.setItem('inlineSVGrev', revision);
                    }
                }
            };
            request.send();
        }
        catch (e) {
        }

    }(window, document) );

//mobile menu
//bower install jquery-nav-scroll

    $('.nav').navScroll({
        mobileDropdown: true,
        mobileBreakpoint: 768
    });

    $('.nav').on('click', '.nav-mobile', function (e) {
        e.preventDefault();
        $('.nav ul').slideToggle('fast');
    });


});
/*//mobile menu
function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}*/



/*function misSlider() {
 var slider = $('.js-mis-stage').miSlider({
 stageHeight: 380,
 slidesOnStage: false,
 slidePosition: 'center',
 slideStart: 'mid',
 slideScaling: 150,
 offsetV: -5,
 centerV: true,
 navButtonsOpacity: 1
 });
 }*/




