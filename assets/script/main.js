
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


    // Products
    $('.product-active').slick({
        dots: false,
        arrows: true,
        infinite: true,
        speed: 300,
        prevArrow: '<a class="product-slick-prev"><i class="fa fa-angle-left"></i></a>',
        nextArrow: '<a class="product-slick-next"><i class="fa fa-angle-right"></i"</a>',
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,

            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                dots: false
            }
        },

        {
            breakpoint: 530,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,


            }
        },
        ]
    });

})(jQuery);


