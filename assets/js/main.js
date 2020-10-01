$(document).ready(function ($) {
  if ($(".with-carousel").length > 0) {
    var owl = $(".with-carousel .owl-carousel");
    owl.owlCarousel({
      loop: true,
      nav: true,
      autoplay: true,
      smartSpeed: 1200,

      navSpeed: 1200,
      dotsSpeed: 1200,
      margin: 90,
      responsive: {
        0: {
          items: 1,
        },
        767: {
          items: 1,
          margin: 15,
        },
        992: {
          items: 2,
          margin: 30,
        },
      },
    });
  }

  if ($(".slider").length > 0) {
    $(".slider").owlCarousel({
      animateOut: "fadeOut",
      animateIn: "fadeIn",
      items: 1,
      loop: true,

      smartSpeed: 900,
      margin: 30,
    });
  }

  if ($(".img-slider").length > 0) {
    $(".img-slider .owl-carousel").owlCarousel({
      animateOut: "fadeOutRight",
      animateIn: "fadeInLeft",
      items: 1,
      nav: false,
      dots: false,
      loop: true,
      autoplay: true,
      autoplayHoverPause: true,
      smartSpeed: 1100,
      margin: 0,
    });
  }

  //Header Resizer on Scroll
  $(window).scroll(function () {
    if ($(this).scrollTop() > 800) {
      $(".home .header").addClass("smaller animated fadeIn");
    } else {
      $(".home .header").removeClass("smaller animated fadeIn");
    }
  });
});
