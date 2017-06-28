$(document).ready(function() {

    $( ".main-nav__btn-cross" ).hide();
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
    });

});
