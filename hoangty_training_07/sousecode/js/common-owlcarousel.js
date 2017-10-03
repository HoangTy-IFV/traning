$(document).ready(function(){

    $('.main-slider').owlCarousel({
        margin: 0,
        nav: false,
        dots: true,
        thumbs: false,
        items: 1,
        autoplay:true,
        autoplayTimeout:8000,
        loop: true,
        mouseDrag: false,
    });

    $('.slider-intro').owlCarousel({
        margin: 0,
        nav: true,
        loop: true,
        dots: true,
        thumbs: false,
        items: 1,
        navText: ["<span class='ic-intro ic-intro-left'></span>","<span class='ic-intro ic-intro-right'></span>"],
        mouseDrag: false
    });

    $('.slider-follow').owlCarousel({
        margin: 1,
        nav: true,
        loop: true,
        dots: true,
        autoplay:true,
        thumbs: true,
        thumbsPrerendered: true,
        autoplayTimeout:8000,
        items: 3,
        navText: ["<span class='ic-follow ic-follow-left'></span>","<span class='ic-follow ic-follow-right'></span>"],
        //mouseDrag: false
    });
});