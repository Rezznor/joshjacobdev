
$(document).ready(function() {
  
    "use strict";

    // Typed plugin settings
    var typed = new Typed(".typed-container", {
        strings: ['I\'m a Fullstack Developer,^600', 'I\'m a UI/UX Design Enthusiast,^600', 'I\'m a Writer,^600', 'I\'m a Leafs fan.^600'],
        typeSpeed: 65,
        backSpeed: 30,
        backDelay: 800,
        startDelay: 1000,
        loop: true,
        smartBackspace: true,
    
      });

      
      $("#working-hours").html((Math.floor(Math.random() * (96 - 16 + 1)) + 16));
      $("#cups-of-coffee").html((Math.floor(Math.random() * 100) + 1));
    
      $(window).on("scroll", function() {
          $(window).scrollTop() >= 80 ? $(".sticky").addClass("sticky-active") : $(".sticky").removeClass("sticky-active")
      });

      // Owl Carousel plugin settings
      var owl = $('.owl-carousel');
      owl.owlCarousel({
          items: 1,
          loop: true,
          margin: 10,
          autoplay: true,
          autoplayTimeout: 4000,
          autoplayHoverPause: true,
      });

    // Simple counting-up for stats section
    var counterUp = window.counterUp["default"];
    var $counters = $(".counter");
    $counters.each(function (ignore, counter) {
          counterUp(counter, {
              duration: 2000,
              delay: 16
          });
    });

      // Select all links with hashes
    $('a[href*="#"]')
        // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function(event) {
        // On-page links
        if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
            && 
            location.hostname == this.hostname
        ) {
            // Figure out element to scroll to
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            // Does a scroll target exist?
            if (target.length) {
            // Only prevent default if animation is actually gonna happen
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top - 80
            }, 1000, function() {
                // Callback after animation
                // Must change focus!
                var $target = $(target);
                $target.focus();
                if ($target.is(":focus")) { // Checking if the target was focused
                return false;
                } else {
                $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                $target.focus(); // Set focus again
                };
            });
            }
        }
    });

    var scrollToTopBtn = document.querySelector(".scroll-to-top-btn")
    var rootElement = document.documentElement

    function handleScroll() {
    // Do something on scroll
    var scrollTotal = rootElement.scrollHeight - rootElement.clientHeight
    if ((rootElement.scrollTop / scrollTotal ) > 0.25) {
        // Show button
        scrollToTopBtn.classList.add("showBtn")
    } else {
        // Hide button
        scrollToTopBtn.classList.remove("showBtn")
    }
    }

    function scrollToTop() {
    // Scroll to top logic
    rootElement.scrollTo({
        top: 0,
        behavior: "smooth"
    })
    }
    scrollToTopBtn.addEventListener("click", scrollToTop)
    document.addEventListener("scroll", handleScroll)

});

