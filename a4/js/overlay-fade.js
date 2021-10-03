/********************************************************************************************************/
/* jQuery - Fading in after 3 secs and out after 10 secs, and fadeOut when clicking on the overlay's background */
/********************************************************************************************************/
$(document).ready(function() {
    $('#newsletter-overlay, #newsletter-subscribe').hide();
    $('#newsletter-overlay, #newsletter-subscribe').delay(3000);
    $('#newsletter-overlay, #newsletter-subscribe').fadeIn(700);
    $('#newsletter-overlay, #newsletter-subscribe').delay(10000);
    $('#newsletter-overlay, #newsletter-subscribe').fadeOut(700);
    $('#newsletter-overlay').click(function(){
            $('#newsletter-overlay, #newsletter-subscribe').stop().fadeOut(700);
    });
});
