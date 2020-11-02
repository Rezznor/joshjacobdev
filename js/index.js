
$(document).ready(function() {
  
    "use strict";

    var typed = new Typed(".typed-container", {
        strings: ['I\'m a Fullstack Developer,^600', 'I\'m a UI/UX Designer,^600', 'I\'m a Writer,^600', 'I\'m a Leafs Fan.^600'],
        typeSpeed: 65,
        backSpeed: 30,
        backDelay: 800,
        startDelay: 1000,
        loop: true,
        smartBackspace: true,
    
      });
    
      $(window).on("scroll", function() {
          $(window).scrollTop() >= 80 ? $(".sticky").addClass("sticky-active") : $(".sticky").removeClass("sticky-active")
      });

      var owl = $('.owl-carousel');
      owl.owlCarousel({
          items: 1,
          loop: true,
          margin: 10,
          autoplay: true,
          autoplayTimeout: 4000,
          autoplayHoverPause: true,
      });

      var counterUp = window.counterUp["default"];
      var $counters = $(".counter");
      $counters.each(function (ignore, counter) {
          counterUp(counter, {
              duration: 2000,
              delay: 16
          });
      });

});

