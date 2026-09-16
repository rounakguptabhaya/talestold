/* ===================================
    About
====================================== */

/*---------------------------------------------------------------------
    Theme Name: Woman Store
    Theme URI:
    Author: Themes Industry
    Author URI:
    Description: One Page , Multi Parallax Template
    Tags: one page, multi page, multipurpose, parallax, creative, html5

 ----------------------------------------------------------------------*/



//PAGE LOADER
$(window).on("load", function () {

    "use strict";

    try {
        $(".loader1").fadeOut(800);
        $('.side-menu').removeClass('hidden');
    } catch (e) { console.error('[loader/side-menu]', e); }


    /*===================================
            Cube Portfolio OWL CAROUSEL
    ======================================*/
    try {
        $('#js-grid-blog-posts').cubeportfolio({
            filters: '#js-filters-blog-posts',
            search: '#js-search-blog-posts',
            defaultFilter: '*',
            animationType: '3dflip',
            gapHorizontal: 70,
            gapVertical: 30,
            gridAdjustment: 'responsive',
            mediaQueries: [{
                width: 1500,
                cols: 3,
            }, {
                width: 1100,
                cols: 3,
            }, {
                width: 800,
                cols: 3,
            }, {
                width: 481,
                cols: 2,
                options: {}
            }, {
                width: 320,
                cols: 1,
                options: {}
            }],
            caption: 'none',
            displayType: 'fadeIn',
            displayTypeSpeed: 400,
        });
    } catch (e) { console.error('[cubeportfolio]', e); }

    /*===================================
        sync-portfolio- and Owl Carousel
    ======================================*/
    try {
        $('.sync-portfolio-carousel').owlCarousel({
            loop: true,
            margin: 0,
            dots: false,
            nav: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1000: {
                    items: 1
                }
            }
        });

        $(".owl-prev").html('<div class="navigation-link-prev"><a class="prev-btn"><i class="lni-chevron-left"></i> </a></div>');
        $(".owl-next").html('<div class="navigation-link-next"><a class="next-btn"><i class="lni-chevron-right"></i> </a></div>');
    } catch (e) { console.error('[sync-portfolio-carousel]', e); }

    // $('.navigation-links a.prev-btn').click(function() {
    //     var owl = $('.sync-portfolio-carousel');
    //     owl.owlCarousel();
    //     owl.trigger('next.owl.carousel');
    // });
    // $('.navigation-links a.next-btn').click(function() {
    //     var owl = $('.sync-portfolio-carousel');
    //     owl.owlCarousel();
    //     owl.trigger('prev.owl.carousel', [300]);
    // });

});

jQuery(function ($) {
    "use strict";

    //let $window = $(window);
    // alert($window);

    /*------ STICKY MENU FIXED ------*/
    try {
        $(window).scroll(function () {

            if ($(document).scrollTop() > 240) {
                $('.header-area').addClass('fixednavbar');

                if ($(window).width() > 767) {
                    $('.header-area .nav-logo').removeClass('col-6');
                    $('.header-area .nav-logo').addClass('col-2');
                    $('.header-area .nav-mega').removeClass('col-12');
                    $('.header-area .nav-mega').addClass('col-8');
                    $('.header-area .nav-utility').removeClass('col-3');
                    $('.header-area .nav-utility').addClass('col-2');

                    $('.header-area .nav-logo').removeClass('pt-3');
                    $('.header-area .nav-mega').removeClass('pt-3');
                    $('.header-area .nav-utility').removeClass('pt-3');

                    $('.slider').addClass('margin-manage');
                    $('.paralax-section-slide-data').addClass('margin-manage');
                    $('.paralax-section-slide-data1').addClass('margin-manage');
                    $('.map-load').addClass('margin-manage');

                }

            } else {
                $('.header-area').removeClass('fixednavbar');
                if ($(window).width() > 767) {
                    $('.header-area .nav-logo').addClass('col-6');
                    $('.header-area .nav-logo').removeClass('col-2');
                    $('.header-area .nav-mega').addClass('col-12');
                    $('.header-area .nav-mega').removeClass('col-8');
                    $('.header-area .nav-utility').addClass('col-3');
                    $('.header-area .nav-utility').removeClass('col-2');

                    $('.header-area .nav-logo').addClass('pt-3');
                    $('.header-area .nav-mega').addClass('pt-3');
                    $('.header-area .nav-utility').addClass('pt-3');

                    $('.slider').removeClass('margin-manage');
                    $('.paralax-section-slide-data').removeClass('margin-manage');
                    $('.paralax-section-slide-data1').removeClass('margin-manage');
                    $('.map-load').removeClass('margin-manage');
                }
            }
        });
    } catch (e) { console.error('[sticky-menu]', e); }

    /*------ End STICKY MENU FIXED ------*/


    /*------ DETECT SCREEN JS ------*/
    try {
        if ($(window).width() < 767) {

            $('.header-area .nav-logo').removeClass('col-6');
            $('.header-area .nav-logo').addClass('col-4');
            // // $('.header-area .nav-logo').addClass('col-3');
            //
            $('.header-area .nav-utility').removeClass('col-3');
            $('.header-area .nav-utility').addClass('col-6');
            //
            $('.header-area .nav-mega').removeClass('col-12');
            $('.header-area .nav-mega').addClass('col-2');

        }
        else {

            $('.header-area .nav-logo').removeClass('col-4');
            $('.header-area .nav-logo').addClass('col-6');
            // // $('.header-area .nav-logo').addClass('col-3');
            //
            $('.header-area .nav-utility').removeClass('col-6');
            $('.header-area .nav-utility').addClass('col-3');
            //
            $('.header-area .nav-mega').removeClass('col-2');
            $('.header-area .nav-mega').addClass('col-12');
        }
    } catch (e) { console.error('[detect-screen]', e); }

    /*
     * Side menu collapse opener
     * */
    try {
        $(".collapsePagesSideMenu").on('click', function () {
            $(this).children().toggleClass("rotate-180");
        });

        $(".user-data").on('click', function () {
            // alert("yes");
            $(".user-data .dropdown-m").css({display: 'block'});
        });
        $(".slider").on('click', function () {
            // alert("yes");
            $(".user-data .dropdown-m").css({display: 'none'});
        });
    } catch (e) { console.error('[side-menu-clicks]', e); }


    //Drop Down For register And cart menu
    try {
        $(document).click(function (event) {
            //if you click on anything except the modal itself or the "open modal" link, close the modal
            if (!$(event.target).closest(".mini-menu-card .shopping-cart").length) {
                $("body").find(".mini-menu-card .shopping-cart").removeClass("show");
            }
        });
        $(document).click(function (event) {
            //if you click on anything except the modal itself or the "open modal" link, close the modal
            if (!$(event.target).closest("#mini-menu .user-utiliity").length) {
                $("body").find("#mini-menu .user-utiliity").removeClass("show");
            }
        });
    } catch (e) { console.error('[dropdown-menus]', e); }


    /*===================================
      //Mega Menu OWL Carousel
    ======================================*/
    try {
        $('.featured-megamenu-carousel').owlCarousel({
            loop: true,
            margin: 10,
            nav: false,
            dots: false,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1000: {
                    items: 1
                }
            }
        });
    } catch (e) { console.error('[featured-megamenu-carousel]', e); }

    // Custom Mega Menu OWL
    try {
        $('.ini-customNextBtn').click(function () {
            var owl = $('.featured-megamenu-carousel');
            owl.owlCarousel();
            owl.trigger('next.owl.carousel');
        });
        $('.ini-customPrevBtn').click(function () {
            var owl = $('.featured-megamenu-carousel');
            owl.owlCarousel();
            owl.trigger('prev.owl.carousel', [300]);
        });
    } catch (e) { console.error('[mega-menu-buttons]', e); }


    /* ===================================
       Product Listing Owl Changes Images
    ====================================== */
    try {
        $('.product-listing-carousel').owlCarousel({
            loop: true,
            margin: 10,
            nav: true,
            dots: false,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1000: {
                    items: 1
                }
            }
        });
    } catch (e) { console.error('[product-listing-carousel]', e); }


    /*===================================
         LATEST ARRIVALS OWL CAROUSEL
    ======================================*/
    try {
        $('.lastest_featured_products').owlCarousel({
            loop: true,
            margin: 10,
            nav: false,
            dots: true,
            autoplay: true,
            autoplayTimeout: 3000,
            autoplayHoverPause: true,
            responsive: {
                0: {
                    items: 1
                },

                600: {
                    items: 2
                },
                1000: {
                    items: 5
                }
            }
        });
    } catch (e) { console.error('[lastest_featured_products]', e); }


    /*===================================
        SEARCH BOX MEDIA ITEAMS
    ======================================*/
    try {
        $('.search-box-meida-items').owlCarousel({
            loop: true,
            margin: 0,
            nav: true,
            dots: false,
            autoplay: true,
            autoplayTimeout: 3000,
            autoplayHoverPause: true,
            responsive: {
                0: {
                    items: 1
                },

                600: {
                    items: 1
                },
                1000: {
                    items: 1
                }
            }
        });
    } catch (e) { console.error('[search-box-meida-items]', e); }


    /*===================================
              //Sticky Filter Nav
    ======================================*/
    try {
        var sidebar = $('#product-filter-nav');
        if (sidebar.length) {
            Stickyfill.add(sidebar);
        }
    } catch (e) { console.error('[stickyfill]', e); }


    /*===================================
              Price Range
    ======================================*/
    try {
        if ($("#slider-range").length) {
            var marginSlider = document.getElementById('slider-range');

            noUiSlider.create(marginSlider, {
                start: [0, 800],
                margin: 30,
                step: 1,
                connect: true,
                range: {
                    'min': 0,
                    'max': 1000
                },

            });

            var marginMin = document.getElementById('min-p'),
                marginMax = document.getElementById('max-p');

            marginSlider.noUiSlider.on('update', function (values, handle) {
                if (handle) {
                    var str = values[handle]
                    var res = str.split(".");
                    marginMax.innerHTML = "$" + res[0];
                } else {
                    var str = values[handle]
                    var res = str.split(".");
                    marginMin.innerHTML = "$" + res[0] + " - ";
                }
            });
        }
    } catch (e) { console.error('[price-range-slider]', e); }


    /* ===================================
         Search Side Menu
     ====================================== */
    try {
        $("#add_search_box").click(function () {
            $(".search-box-overlay").addClass("fixed-box");
        });

        $("#close-window").click(function(){
            $(".search-box-overlay").addClass("remove-fixed-box");
            setTimeout(function(){
                $(".search-box-overlay").removeClass("fixed-box");
                $(".search-box-overlay").removeClass("remove-fixed-box");
            }, 1000);


        });
    } catch (e) { console.error('[search-side-menu]', e); }

    try {
        $('[data-fancybox]').fancybox({
            'transitionIn': 'elastic',
            'transitionOut': 'elastic',
            'speedIn': 600,
            'speedOut': 200,
            buttons: [
                'slideShow',
                'fullScreen',
                'thumbs',
                'share',
                // 'download',
                'zoom',
                'close'
            ],
        });
    } catch (e) { console.error('[fancybox]', e); }


    /* Mobile side menu is controlled by React NavbarTest. */


    /* ===================================
        Stop Parallax Banner Listing Page
    ======================================*/
    try {
        if ($(window).width() < 780) {
            $('.paralax-section-slide-data1').addClass('paralax-data');
        } else {
            $('.paralax-section-slide-data1').removeClass('paralax-data');
            $('.paralax-section-slide-data1').parallaxie({
                speed: 0.6,
                offset: -100,
            });
        }
    } catch (e) { console.error('[parallax-listing]', e); }

    /*=======================================================
      Alone,ShopCart,Login,Register,product-detail,contact
    =========================================================*/
    try {
        if ($(window).width() < 780) {
            $('.paralax-section-slide-data').addClass('paralax-data');
        } else {
            $('.paralax-section-slide-data').removeClass('paralax-data');
            $('.paralax-section-slide-data').parallaxie({
                speed: 0.6,
                offset: 0,
            });
        }
    } catch (e) { console.error('[parallax-alone]', e); }



    /* ===================================
        Stop Parallax Banner Index Page
    ======================================*/
    try {
        if ($(window).width() < 780) {
            $('.parallax-slide').addClass('paralax-data');
        } else {
            $('.parallax-slide').removeClass('paralax-data');
            $('.parallax-slide').parallaxie({
                speed: 0.6,
                offset: -200,
            });
        }
    } catch (e) { console.error('[parallax-index]', e); }



    /*===================================
              Swiper Sync Slider
    ======================================*/
    try {
        if ($("#gallery").length) {
            var galleryTop = new Swiper('#gallery', {
                effect: 'fade',
                direction: 'vertical',
                spaceBetween: 10,
                slidesPerView: 1,
                slidesPerGroup: 1,
                loop: true,
                initialSlide: 0,
                centeredSlides: true,
                loopAdditionalSlides: 5,
                touchRatio: 0.2,

            });

            var galleryThumbs = new Swiper('#thumbs', {
                direction: 'vertical',
                spaceBetween: 10,
                slidesPerView: 3,
                slidesPerGroup: 1,
                loop: true,
                initialSlide: 0,
                centeredSlides: true,
                loopAdditionalSlides: 3,
                touchRatio: 0.2,
                slideToClickedSlide: true
            });

            galleryTop.controller.control = galleryThumbs;
            galleryThumbs.controller.control = galleryTop;
        }
    } catch (e) { console.error('[swiper-gallery]', e); }


    /*===================================
              Input Number Counter
    ======================================*/
    try {
        $('.count').prop('disabled', true);
        $(document).on('click', '.plus', function () {
            $('.count').val(parseInt($('.count').val()) + 1);

        });
        $(document).on('click', '.minus', function () {
            $('.count').val(parseInt($('.count').val()) - 1);
            if ($('.count').val() == 0) {
                $('.count').val(1);

            }
        });
    } catch (e) { console.error('[number-counter]', e); }

    /* ===================================
              Wow Effects
    ======================================*/
    try {
        var wow = new WOW(
            {
                boxClass:'wow',      // default
                animateClass:'animated', // default
                offset:0,          // default
                mobile:false,       // default
                live:true        // default
            }
        );
        wow.init();
    } catch (e) { console.error('[wow-effects]', e); }




    /* ===================================
         //Scroll and Arrow Appear
    ======================================*/
    try {
        $(window).on('scroll', function () {
            if ($(this).scrollTop() > 300)
                $('.scroll-top-arrow').fadeIn('slow');
            else
                $('.scroll-top-arrow').fadeOut('3000');
        });

        //Click event to scroll to top
        $(document).on('click', '.scroll-top-arrow', function () {
            $('html, body').animate({scrollTop: 0}, 800);
            return false;
        });
    } catch (e) { console.error('[scroll-top-arrow]', e); }


    /* ===================================
              REV SLIDER
    ======================================*/
    // try {
    //     if ($(".slider").length) {

    //         $("#rev_slider_1_1").show().revolution({
    //             sliderType: "standard",
    //             jsFileLocation: "/vendor/",
    //             sliderLayout: "fullscreen",
    //             dottedOverlay: "none",
    //             delay: 9000,
    //             navigation: {
    //                 keyboardNavigation: "off",
    //                 keyboard_direction: "horizontal",
    //                 mouseScrollNavigation: "off",
    //                 mouseScrollReverse: "default",
    //                 onHoverStop: "off",
    //                 arrows: {
    //                     style: "gyges",
    //                     enable: true,
    //                     hide_onmobile: true,
    //                     hide_under: 767,
    //                     hide_onleave: false,
    //                     tmp: '',
    //                     left: {
    //                         h_align: "left",
    //                         v_align: "center",
    //                         h_offset: 20,
    //                         v_offset: 0
    //                     },
    //                     right: {
    //                         h_align: "right",
    //                         v_align: "center",
    //                         h_offset: 20,
    //                         v_offset: 0
    //                     }
    //                 }
    //             },
    //             responsiveLevels: [1240, 1024, 778, 480],
    //             visibilityLevels: [1240, 1024, 778, 480],
    //             gridwidth: [1140, 1024, 778, 480],
    //             gridheight: [700, 768, 960, 420],
    //             lazyType: "none",
    //             parallax: {
    //                 type: "mouse",
    //                 origo: "enterpoint",
    //                 speed: 400,
    //                 speedbg: 0,
    //                 speedls: 0,
    //                 levels: [2, 3, 5, 10, 25, 30, 35, 40, 45, 46, 47, 48, 49, 50, 51, 55],
    //                 disable_onmobile: "on"
    //             },
    //             shadow: 0,
    //             spinner: "spinner2",
    //             stopLoop: "off",
    //             stopAfterLoops: -1,
    //             stopAtSlide: -1,
    //             shuffle: "off",
    //             autoHeight: "off",
    //             fullScreenAutoWidth: "off",
    //             fullScreenAlignForce: "off",
    //             fullScreenOffsetContainer: "",
    //             fullScreenOffset: "",
    //             disableProgressBar: "on",
    //             hideThumbsOnMobile: "off",
    //             hideSliderAtLimit: 0,
    //             hideCaptionAtLimit: 0,
    //             hideAllCaptionAtLilmit: 0,
    //             debugMode: false,
    //             fallbacks: {
    //                 simplifyAll: "off",
    //                 nextSlideOnWindowFocus: "off",
    //                 disableFocusListener: false,
    //             }
    //         });
    //     }
    // } catch (e) { console.error('[revolution-slider]', e); }


});