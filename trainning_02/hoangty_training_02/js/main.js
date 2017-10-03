$(document).ready(function() {
    


/* ----------------------------------------------
  1.  scroll navFixedSide
---------------------------------------------- */
	$(function() {
	    var topBtn = $('.navFixedSide');
	    topBtn.css('right', '-55px');

	    var topBtn2 = $('.toTop');
	    topBtn2.css('right', '-134px');
		var showFlug = false;
	  
		$(window).scroll(function () {
		        if ($(this).scrollTop() > 150) {
		            if (showFlug == false) {
		                showFlug = true;
		                topBtn.stop().animate({'right' : '-4px'}, 300);
		                topBtn2.stop().animate({'right' : '0px'}, 300);
		            }
		        } else {
		            if (showFlug) {
		                showFlug = false;
		                topBtn.stop().animate({'right' : '-55px'}, 300);
		                topBtn2.stop().animate({'right' : '-134px'}, 300);
		            }
		        }
		    });
	});
/* ----------------------------------------------
  2.  Go to Top 
---------------------------------------------- */

	$('.toTop').click(function(event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 500);
    });
    
});


