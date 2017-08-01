//import 'slick-carousel/slick/slick-theme.scss';
//import $ from 'jquery';
//import './scrollto';
"use strict";
$(document).ready( function(){

        $('.js-to-top').click((event) => {
        event.preventDefault();

    $('html, body').animate({
        scrollTop: $('.js-body').offset().top
    }, 200);
});



$('.services__list').slick({
    dots: true,
     infinite: true,
     slidesToShow: 2,
     slidesToScroll: 4
});


    // services slider
  function initFeaturesSlider() {
        var $slider = $('.services__list'),
            settings = {
                dots: true,
            },
            targetClass = 'slick-initialized',
            mq = window.matchMedia('(min-width: 850px)');

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



;( function( window, document )
{
    'use strict';

    var file     = 'src/i/sprite/sprite.svg',
        revision = 1;

    if( !document.createElementNS || !document.createElementNS( 'http://www.w3.org/2000/svg', 'svg' ).createSVGRect )
        return true;

    var isLocalStorage = 'localStorage' in window && window[ 'localStorage' ] !== null,
        request,
        data,
        insertIT = function()
        {
            document.body.insertAdjacentHTML( 'afterbegin', data );
        },
        insert = function()
        {
            if( document.body ) insertIT();
            else document.addEventListener( 'DOMContentLoaded', insertIT );
        };

    if( isLocalStorage && localStorage.getItem( 'inlineSVGrev' ) == revision )
    {
        data = localStorage.getItem( 'inlineSVGdata' );
        if( data )
        {
            insert();
            return true;
        }
    }

    try
    {
        request = new XMLHttpRequest();
        request.open( 'GET', file, true );
        request.onload = function()
        {
            if( request.status >= 200 && request.status < 400 )
            {
                data = request.responseText;
                insert();
                if( isLocalStorage )
                {
                    localStorage.setItem( 'inlineSVGdata',  data );
                    localStorage.setItem( 'inlineSVGrev',   revision );
                }
            }
        }
        request.send();
    }
    catch( e ){}

}( window, document ) );
});



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




