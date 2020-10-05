$(document).ready(function ($) {
  if ($(".wowclientsSection").length > 0) {
    var owl = $(".wowclientsSection .owl-carousel");
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

  if ($(".imgSlider").length > 0) {
    $(".imgSlider .owl-carousel").owlCarousel({
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

// cd-slider starts here

(function () {
  var autoUpdate = false,
    timeTrans = 4000;

  var cdSlider = document.querySelector(".cd-slider"),
    item = cdSlider.querySelectorAll("li"),
    nav = cdSlider.querySelector("nav.navigators");

  item[0].className = "current_slide";

  for (var i = 0, len = item.length; i < len; i++) {
    var color = item[i].getAttribute("data-color");
    item[i].style.backgroundColor = color;
  }

  // Detect IE
  // hide ripple effect on IE9
  var ua = window.navigator.userAgent;
  var msie = ua.indexOf("MSIE");
  if (msie > 0) {
    var version = parseInt(ua.substring(msie + 5, ua.indexOf(".", msie)));
    if (version === 9) {
      cdSlider.className = "cd-slider ie9";
    }
  }

  if (item.length <= 1) {
    nav.style.display = "none";
  }

  function prevSlide() {
    var currentSlide = cdSlider.querySelector("li.current_slide"),
      prevElement = currentSlide.previousElementSibling,
      prevSlide = prevElement !== null ? prevElement : item[item.length - 1],
      prevColor = prevSlide.getAttribute("data-color"),
      el = document.createElement("span");

    currentSlide.className = "";
    prevSlide.className = "current_slide";

    nav.children[0].appendChild(el);

    var size =
        cdSlider.clientWidth >= cdSlider.clientHeight
          ? cdSlider.clientWidth * 2
          : cdSlider.clientHeight * 2,
      ripple = nav.children[0].querySelector("span");

    ripple.style.height = size + "px";
    ripple.style.width = size + "px";
    ripple.style.backgroundColor = prevColor;

    ripple.addEventListener("webkitTransitionEnd", function () {
      if (this.parentNode) {
        this.parentNode.removeChild(this);
      }
    });

    ripple.addEventListener("transitionend", function () {
      if (this.parentNode) {
        this.parentNode.removeChild(this);
      }
    });
  }

  function nextSlide() {
    var currentSlide = cdSlider.querySelector("li.current_slide"),
      nextElement = currentSlide.nextElementSibling,
      nextSlide = nextElement !== null ? nextElement : item[0],
      nextColor = nextSlide.getAttribute("data-color"),
      el = document.createElement("span");

    currentSlide.className = "";
    nextSlide.className = "current_slide";

    nav.children[1].appendChild(el);

    var size =
        cdSlider.clientWidth >= cdSlider.clientHeight
          ? cdSlider.clientWidth * 2
          : cdSlider.clientHeight * 2,
      ripple = nav.children[1].querySelector("span");

    ripple.style.height = size + "px";
    ripple.style.width = size + "px";
    ripple.style.backgroundColor = nextColor;

    ripple.addEventListener("webkitTransitionEnd", function () {
      if (this.parentNode) {
        this.parentNode.removeChild(this);
      }
    });

    ripple.addEventListener("transitionend", function () {
      if (this.parentNode) {
        this.parentNode.removeChild(this);
      }
    });
  }

  updateNavColor();

  function updateNavColor() {
    var currentSlide = cdSlider.querySelector("li.current_slide");

    var nextColor =
      currentSlide.nextElementSibling !== null
        ? currentSlide.nextElementSibling.getAttribute("data-color")
        : item[0].getAttribute("data-color");
    var prevColor =
      currentSlide.previousElementSibling !== null
        ? currentSlide.previousElementSibling.getAttribute("data-color")
        : item[item.length - 1].getAttribute("data-color");

    if (item.length > 2) {
      nav.querySelector(".prev").style.backgroundColor = prevColor;
      nav.querySelector(".next").style.backgroundColor = nextColor;
    }
  }

  nav.querySelector(".next").addEventListener("click", function (event) {
    event.preventDefault();
    nextSlide();
    updateNavColor();
  });

  nav.querySelector(".prev").addEventListener("click", function (event) {
    event.preventDefault();
    prevSlide();
    updateNavColor();
  });

  //autoUpdate
  setInterval(function () {
    if (autoUpdate) {
      nextSlide();
      updateNavColor();
    }
  }, timeTrans);
})();
