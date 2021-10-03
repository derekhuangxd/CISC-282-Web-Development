/********************************************************************************************************/
/* implemented in jQuery with slick - a photo gallery slider showing 3 pictures at a time */
/********************************************************************************************************/
$(document).ready(function(){
    $('.container').slick({
        dots: true,
        infinite: true,
        centerMode: true,
        variableWidth: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
      });
  });