$(document).ready(function () {

    // Start Responsive Smooth Card Carousel // >>>>> Section App

    $num = $('.my-card').length;
    $even = $num / 2;
    $odd = ($num + 1) / 2;

    if ($num % 2 == 0) {
        $('.my-card:nth-child(' + $even + ')').addClass('active');
        $('.my-card:nth-child(' + $even + ')').prev().addClass('prev');
        $('.my-card:nth-child(' + $even + ')').next().addClass('next');
    } else {
        $('.my-card:nth-child(' + $odd + ')').addClass('active');
        $('.my-card:nth-child(' + $odd + ')').prev().addClass('prev');
        $('.my-card:nth-child(' + $odd + ')').next().addClass('next');
    }

    $('.my-card').click(function () {
        $slide = $('.active').width();

        if ($(this).hasClass('next')) {
            $('.card-carousel').stop(false, true).animate({
                left: '-=' + $slide
            });
        } else if ($(this).hasClass('prev')) {
            $('.card-carousel').stop(false, true).animate({
                left: '+=' + $slide
            });
        }

        $(this).removeClass('prev next');
        $(this).siblings().removeClass('prev active next');

        $(this).addClass('active');
        $(this).prev().addClass('prev');
        $(this).next().addClass('next');
    });

    // Keyboard nav
    $('html body').keydown(function (e) {
        if (e.keyCode == 37) { // left
            $('.active').prev().trigger('click');
        } else if (e.keyCode == 39) { // right
            $('.active').next().trigger('click');
        }
    });

    // >>> angle-right & angle-left >>> //

    $('.app-arrows .prev').click(function () {
        $slide = $('.active').width();
        $('.active').prev().trigger('click');
    });
    $('.app-arrows .next').click(function () {
        $slide = $('.active').width();
        $('.active').next().trigger('click');
    });

    // End Responsive Smooth Card Carousel //

    // Nice Scroll //

    $("html").niceScroll({
        cursorwidth: "3px",
        cursorborder: "1px solid #3aade6",
        cursorcolor: "#3aade6",

    });

    // Testimonial >>>> Slick Slider

    $('.slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '.slider-container .right',
        nextArrow: '.slider-container .left',
        rtl: true,
        infinite: true,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]

    });

    // Client >>>> Slick Slider

    $('.clients').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '.slider-slick .right',
        nextArrow: '.slider-slick .left',
        rtl: true,
        infinite: true,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]

    });

})