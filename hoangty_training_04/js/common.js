$(document).ready(function() {

    //menu-mobide
    $('.menu-mobile').click(function(e) {
        e.preventDefault();
        $('.menu-mobile').toggleClass('active');
        $('.wrapper').toggleClass('menu-open');
        $('#nav-menu').toggleClass('active');
    });


    //box question answer

    // $(window).scroll(function () {
    var wBrowser = $(window).width();
    if (wBrowser <= 450) {
        $('.question-answer h3:first').addClass('active');
        $('.cont-answer').hide();
        $('.cont-answer:first').slideDown();
        $('.question-answer h3').click(function() {
            var hasClass = $(this).hasClass('active');
            if (!hasClass) {
                $('.cont-answer').slideUp();
                $('.question-answer h3').removeClass('active');
                var $get_answer = $(this).next();
                $get_answer.slideToggle(400);
                if ('.cont-answer:visible') {
                    $get_answer.prev().addClass('active');
                }
            } else {
                $('.cont-answer').slideUp();
                $('.question-answer h3').removeClass('active');
            }
        });
    };


});
