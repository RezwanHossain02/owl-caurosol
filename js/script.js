$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
      margin:10,
      autoplay:true,
      autoplayTimeout:1000,
      loop:true,
      autoplayHoverPause:true,
    
      responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:2,
            nav:false
        },
        1000:{
            items:3,
            nav:true,
            loop:true
        }
    }
    

    });
  });
