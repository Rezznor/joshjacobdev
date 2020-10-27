var typed = new Typed(".typed-container", {
    strings: ['I\'m Josh Jacob.^1000', '^400I\'m a Developer,^400', 'a Writer,^400', 'and a Leafs Fan.^400'],
    typeSpeed: 65,
    backSpeed: 50,
    backDelay: 800,
    startDelay: 1000,
    loop: true,

  });

  $(window).on("scroll", function() {
      $(window).scrollTop() >= 80 ? $(".sticky").addClass("sticky-active") : $(".sticky").removeClass("sticky-active")
  });
