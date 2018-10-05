'use strict';

$(function() {
  $('.slides').slick({
    autoplay: false,
    prevArrow: $('.prev'),
    nextArrow: $('.next'),
    dots: true,
    appendDots: $('.dots'),
    slidesToShow: 2,
    slidesToScroll: 2,
    arrows: false,
    responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
  });

  $('.block_actu article').click(function(){
    if ($(this).hasClass('active')){
      $('.block_actu article').removeClass('active')
    } else {
      $('.block_actu article').removeClass('active')
      $(this).addClass('active')
    }    
  })
})