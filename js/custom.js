$(document).ready(function() {

    //trigger wow
    new WOW().init();

    // Home Page -> Trigger Home Slider
    $('.carousel').carousel({
        interval: 1000000
    });

    // $('.collapse').collapse();

    // Trigger with mouseHover
    $('.project').mouseover(function() {
        $('.project').mousemove(function(e) {
            var x = e.pageX - $(this).offset().left,
                    y = e.pageY - $(this).offset().top;

            var px = x/$(this).width(),
                    py = y/$(this).height();
            
            var xx = -15 + (30*px),
                    yy = 15 - (30*py);
        
            //TweenMax.killTweensOf($(this));
            TweenMax.to($(this), 0.5, {rotationY: xx, rotationX: yy, rotationZ: 0, transformPerspective: 1000, ease: Quad.easeOut});
        });
    }).mouseout(function() {
        $(this).unbind('mousemove');
        //TweenMax.killTweensOf($(this));
        TweenMax.to($(this), 0.5, {rotationY: 0, rotationX: 0, rotationZ: 0, transformPerspective: 1000, ease: Quad.easeOut});
    });

    // Country Page -> Trigger Owl Carousel
    $('.countryServices__owl').owlCarousel({
        loop:true,
        dots: false,
        nav: false,
        margin: 20,
        center: true,
        startPosition: 0,
        responsive:{
            0:{items:1},
            600:{items:3},
            1000:{items:4}
            },
        slideBy:2,
        autoplayTimeout:1000
    });

    // Country Page -> adabt padding-left of countryServices__owl div as above container offset left

    function countryServicesOwlPaddLeft(){
        let countryServicesContainer = $('.countryServices .container').offset().left

        $('.countryServices__owl').css('paddingLeft', countryServicesContainer + 'px');
    }countryServicesOwlPaddLeft();

    $(window).resize(function() {
        countryServicesOwlPaddLeft();
    });

    // Country Page -> collapse discover services
    $('.dicoverServices__collapse').each(function (){
        $(this).find('.dicoverServices__collapse_h').each(function() {
            $(this).on('click', function() {
            
                $(this).addClass('orange__color').parent().siblings().find('.dicoverServices__collapse_h').removeClass('orange__color');
                $(this).addClass('orange__color').parent().parent().siblings().find('.dicoverServices__collapse_h').removeClass('orange__color');
                
                $(this).next('.dicoverServices__collapse_p').slideDown().parent().siblings().find('.dicoverServices__collapse_p').slideUp();
                $(this).next('.dicoverServices__collapse_p').slideDown().parent().parent().siblings().find('.dicoverServices__collapse_p').slideUp();
            });
        });
    });

    

});