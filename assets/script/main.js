
// NICE SELECT
(function ($) {
    "use strict";
    $('select').niceSelect();

    // Mobile Menu Js
    $('#mobile-menu').meanmenu({
        meanMenuContainer: '.mobile-menu',
        meanScreenWidth: "991",
        meanExpand: ['<i class="fa fa-plus"></i>'],
    });
    $('.category-toggle-btn').on('click', function () {
        $('.category-menu').slideToggle(500);
    });
    $('.category-toggle-btn-2').on('click', function () {
        $('.side-menu').slideToggle(500);
    });

    //  Sidebar Js
    $(".offcanvas-toggle-btn").on("click", function () {
        $(".offcanvas-area").addClass("opened");
        $(".body-overlay").addClass("opened");
    });
    $(".offcanvas-close-button").on("click", function () {
        $(".offcanvas-area").removeClass("opened");
        $(".body-overlay").removeClass("opened");
    });

    //  Body overlay Js
    $(".body-overlay").on("click", function () {
        $(".offcanvas-area").removeClass("opened");
        $(".body-overlay").removeClass("opened");
    });

})(jQuery);


