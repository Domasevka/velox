$(document).ready( function(){

        $('.js-to-top').click((event) => {
            event.preventDefault();

        $('html, body').animate({scrollTop: $('.js-body').offset().top}, 200);
    });

    jQuery(function ($) {
        var slider = $('.mis-stage').miSlider({
            //  The speed of the slide transition
            //  in milliseconds. Options: positive integer.
            speed: 700,
            //  slide pause time between transitions
            //  in milliseconds. Options: false, positive integer.
            //  false = Autoplay off.
            pause: 4000,
            //  The number of slides to increment with
            //  Autoplay and Nav Buttons.
            //  Options: positive or negative integer.
            //  Positive integer = Slide left.
            //  Negative integer = Slide right.
            increment: 1,
            //  The height of the stage in px.
            //  Options: false or positive integer.
            //  false = height is calculated using
            //  maximum slide heights.
            stageHeight: false,
            //  Number of slides visible at one time.
            //  Options: false or positive integer.
            //  false = Fit as many as possible.
            slidesOnStage: 1,
            //  Continuous motion - Boolean.
            //  true = slides loop in one direction if possible.
            slidesContinuous: true,
            //  The location of the current slide on the stage.
            //  Options: 'left', 'right', 'center'.
            slidePosition: 'left',
            //  The slide to start on.
            //  Options: 'beg', 'mid', 'end'
            //  or slide number starting at 1 - '1','2', etc.
            slideStart: 'beg',
            //  The width of the current slide in px.
            //  Options: false or positive integer.
            //  false = width is the maximum of
            //  the existing slide widths.
            slideWidth: false,
            //  The relative percentage scaling factor
            //  of the current slide
            //  other slides are scaled down.
            //  Options: positive number 100 or higher.
            //  100 = No scaling.
            slideScaling: 100,
            //  The vertical offset of the slide center
            //  as a percentage of slide height.
            //  Options:  positive or negative number.
            //  Neg value = up. Pos value = down.
            //  0 = No offset.
            offsetV: 0,
            //  Center slide contents vertically
            //  Boolean.
            centerV: false,
            // Transition to clicked slide instead of visting URL
            // Boolean.
            slideClickable: true,
            //  Enable numbered list navigation
            //  Boolean.
            navList: true,
            //  Enable prev and next button navigation
            //  Boolean.
            navButtons: true,
            //  Always show prev and next button navigation
            //  except when transitioning - Boolean.
            navButtonsShow: false,
            //  Opacity of the prev and next
            //  button navigation when not transitioning.
            //  Options: Number between 0 and 1.
            //  0 (transparent) - 1 (opaque).
            navButtonsOpacity: 0.5,
            //  Randomize the order of the slides
            //  Boolean.
            randomize: false,
            //  The slides loaded call back function
            //  called when slides have loaded.
            slidesLoaded: false,
            //  The slide transition before
            //  call back function - called before
            //  the slide transition.
            beforeTrans: false,
            //  The slide transition complete
            //  call back function - called at the end
            //  of a slide transition.
            afterTrans: false,
            //  The CSS class that will be applied
            //  to the stage element.
            classStage: 'mis-stage',
            //  The CSS class that will be
            //  applied to the slider element.
            classSlider: 'mis-slider',
            //  The CSS class that will be
            //  applied to each slide element.
            classSlide: 'mis-slide',
            //  The CSS class that will be
            //  applied to the parent of the
            //  prev and next button navigation elements.
            classNavButtons: 'mis-nav-buttons',
            //  The CSS class that will be
            //  applied to the parent of the
            //  numbered list navigation elements
            classNavList: 'mis-nav-list',
            //  The selector used to select
            //  the slider element
            //  Descendant of the stage
            selectorSlider: 'ol',
            //  The selector used to select
            //  each slide element
            //  Descendant of the slider
            selectorSlide: 'li'
        });
    });jQuery(function ($) {
        var slider = $('.mis-stage').miSlider({
            //  The speed of the slide transition
            //  in milliseconds. Options: positive integer.
            speed: 700,
            //  slide pause time between transitions
            //  in milliseconds. Options: false, positive integer.
            //  false = Autoplay off.
            pause: 4000,
            //  The number of slides to increment with
            //  Autoplay and Nav Buttons.
            //  Options: positive or negative integer.
            //  Positive integer = Slide left.
            //  Negative integer = Slide right.
            increment: 1,
            //  The height of the stage in px.
            //  Options: false or positive integer.
            //  false = height is calculated using
            //  maximum slide heights.
            stageHeight: false,
            //  Number of slides visible at one time.
            //  Options: false or positive integer.
            //  false = Fit as many as possible.
            slidesOnStage: 1,
            //  Continuous motion - Boolean.
            //  true = slides loop in one direction if possible.
            slidesContinuous: true,
            //  The location of the current slide on the stage.
            //  Options: 'left', 'right', 'center'.
            slidePosition: 'left',
            //  The slide to start on.
            //  Options: 'beg', 'mid', 'end'
            //  or slide number starting at 1 - '1','2', etc.
            slideStart: 'beg',
            //  The width of the current slide in px.
            //  Options: false or positive integer.
            //  false = width is the maximum of
            //  the existing slide widths.
            slideWidth: false,
            //  The relative percentage scaling factor
            //  of the current slide
            //  other slides are scaled down.
            //  Options: positive number 100 or higher.
            //  100 = No scaling.
            slideScaling: 100,
            //  The vertical offset of the slide center
            //  as a percentage of slide height.
            //  Options:  positive or negative number.
            //  Neg value = up. Pos value = down.
            //  0 = No offset.
            offsetV: 0,
            //  Center slide contents vertically
            //  Boolean.
            centerV: false,
            // Transition to clicked slide instead of visting URL
            // Boolean.
            slideClickable: true,
            //  Enable numbered list navigation
            //  Boolean.
            navList: true,
            //  Enable prev and next button navigation
            //  Boolean.
            navButtons: true,
            //  Always show prev and next button navigation
            //  except when transitioning - Boolean.
            navButtonsShow: false,
            //  Opacity of the prev and next
            //  button navigation when not transitioning.
            //  Options: Number between 0 and 1.
            //  0 (transparent) - 1 (opaque).
            navButtonsOpacity: 0.5,
            //  Randomize the order of the slides
            //  Boolean.
            randomize: false,
            //  The slides loaded call back function
            //  called when slides have loaded.
            slidesLoaded: false,
            //  The slide transition before
            //  call back function - called before
            //  the slide transition.
            beforeTrans: false,
            //  The slide transition complete
            //  call back function - called at the end
            //  of a slide transition.
            afterTrans: false,
            //  The CSS class that will be applied
            //  to the stage element.
            classStage: 'mis-stage',
            //  The CSS class that will be
            //  applied to the slider element.
            classSlider: 'mis-slider',
            //  The CSS class that will be
            //  applied to each slide element.
            classSlide: 'mis-slide',
            //  The CSS class that will be
            //  applied to the parent of the
            //  prev and next button navigation elements.
            classNavButtons: 'mis-nav-buttons',
            //  The CSS class that will be
            //  applied to the parent of the
            //  numbered list navigation elements
            classNavList: 'mis-nav-list',
            //  The selector used to select
            //  the slider element
            //  Descendant of the stage
            selectorSlider: 'ol',
            //  The selector used to select
            //  each slide element
            //  Descendant of the slider
            selectorSlide: 'li'
        });
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
    /*var slider = $('.js-mis-stage').miSlider({
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
        classStage: "js-mis-stage",
        classSlider: "mis-slider",
        classSlide: "mis-slide",
        classNavButtons: "mis-nav-buttons",
        classNavList: "mis-nav-list",
        orSlider: "ol",
        selectorSlide: "li"
    });*/


});

