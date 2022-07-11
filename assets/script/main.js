
// NICE SELECT
(function ($) {
    "use strict";
    $('select').niceSelect();

    // 02. Mobile Menu Js
    $('#mobile-menu').meanmenu({
        meanMenuContainer: '.mobile-menu',
        meanScreenWidth: "991",
        meanExpand: ['<i class="fal fa-plus"></i>'],
    });
    $('.category-toggle-btn').on('click', function () {
        $('.category-menu').slideToggle(500);
    });
    $('.category-toggle-btn-2').on('click', function () {
        $('.side-menu').slideToggle(500);
    });
})(jQuery);