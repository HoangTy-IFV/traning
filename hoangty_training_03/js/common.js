$(document).ready(function() {
     	$('.menu-mobile').click(function(e) {
            e.preventDefault();
            $('.menu-mobile').toggleClass('active');
            $('.wrapper').toggleClass('menu-open');
            $('#nav-menu').toggleClass('active');
        });

      
    });


