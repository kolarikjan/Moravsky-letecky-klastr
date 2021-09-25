function fix_homepage_slider() {
    var height =$(".homepage-slider .slider-text").height() - $(".homepage-slider .item img").height();
    $(".homepage-categories").css("margin-top", height);
    height = height.toString().replace('-','');
    $(".homepage-categories .counters-row .counters-col").css("height", height + "px");
}
$(document).ready(function () {
    $('.home-slider').owlCarousel({
        loop:true,
        nav:false,
        dots: false,
        items:1,
        margin:0
    });
    $('.cat-slider').owlCarousel({
        loop:true,
        nav:true,
        navText: ["<img src='img/slider_arrow_left.svg' alt='arrow'>","<img src='img/slider_arrow_right.svg' alt='arrow'>"],
        dots: false,
        margin:25,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            768:{
                items:2,
                nav:false
            },
            993:{
                items:3,
                nav:false
            },
            1400:{
                items:4,
                nav:false
            }
        }
    });
    $('.zakaznici-slider').owlCarousel({
        loop:true,
        nav:true,
        dots: false,
        margin:25,
        navText: ["<img src='img/slider_arrow_left.svg' alt='arrow'>","<img src='img/slider_arrow_right.svg' alt='arrow'>"],
        responsive:{
            0:{
                items:1,
                nav:true
            },
            768:{
                items:3,
                nav:false
            },
            993:{
                items:4,
                nav:false
            },
            1200:{
                items:5,
                nav:false
            }
        }
    });
    $('.clenove-slider').owlCarousel({
        loop:true,
        nav:true,
        navText: ["<img src='img/slider_arrow_left.svg' alt='arrow'>","<img src='img/slider_arrow_right.svg' alt='arrow'>"],
        dots: false,
        margin:8,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            768:{
                items:3,
                nav:false
            },
            993:{
                items:5,
                nav:false
            },
            1200:{
                items:7,
                nav:false
            }
        }
    });
    $('.pr-images-slider').owlCarousel({
        loop:true,
        nav:true,
        navText: ["<img src='img/slider2_arrow_left.svg' alt='arrow'>","<img src='img/slider2_arrow_right.svg' alt='arrow'>"],
        dots: false,
        margin:8,
        items:3
    });
});
$(window).resize(function () { 
    
});
