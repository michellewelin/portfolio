$(document).ready(function() {
 
    $("#project").click(function(){
       
       $.fn.pagepiling.moveTo(6);
        
    });

    $(window).scroll(function() { 
        if ($(window).scrollTop() > $(".homepage-hero-module").offset().top) {
           $('.case-section2 a').css('color', '#333');
        }
        else {
            $('.case-section2 a').css('color', '#fff');
        }
    });


    // $(".arrow").click(function(){
       
    //    $.fn.pagepiling.moveSectionDown();
        
    // });

    $('.to-top').click(function(){ 
        $('html, body').animate({
            scrollTop: $(".homepage-hero-module").offset().top
        }, 1000);
    
    });

    $('.arrow').click(function(){ 
        $('html, body').animate({
            scrollTop: $(".case-section2").offset().top
        }, 1000);
    
    });

//video

    $( document ).ready(function() {

    scaleVideoContainer();

    initBannerVideoSize('.video-container .poster img');
    initBannerVideoSize('.video-container .filter');
    initBannerVideoSize('.video-container video');

    $(window).on('resize', function() {
        scaleVideoContainer();
        scaleBannerVideoSize('.video-container .poster img');
        scaleBannerVideoSize('.video-container .filter');
        scaleBannerVideoSize('.video-container video');
    });

});

function scaleVideoContainer() {

    var height = $(window).height() + 5;
    var unitHeight = parseInt(height) + 'px';
    $('.homepage-hero-module').css('height',unitHeight);

}

function initBannerVideoSize(element){

    $(element).each(function(){
        $('#debug').append($(this).width() + ' : ' + $(this).height() + '<br>');

        $(this).data('height', $(this).height());
        $(this).data('width', $(this).width());
    });

    scaleBannerVideoSize(element);

}

function scaleBannerVideoSize(element){

    var windowWidth = $(window).width(),
    windowHeight = $(window).height() + 5,
    videoWidth,
    videoHeight;

    console.log(windowHeight);

    $(element).each(function(){
        var videoAspectRatio = $(this).data('height')/$(this).data('width');

        $(this).width(windowWidth);

        if(windowWidth < 1000){
            videoHeight = windowHeight;
            videoWidth = videoHeight / videoAspectRatio;
            $(this).css({'margin-top' : 0, 'margin-left' : -(videoWidth - windowWidth) / 2 + 'px'});

            $(this).width(videoWidth).height(videoHeight);
        }

        $('.homepage-hero-module .video-container video').addClass('fadeIn animated');

    });
}

});


