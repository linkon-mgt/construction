$(function () {
  // counterUp start
  $('.counter').counterUp({
    delay: 10,
    time: 1500
  });
  // counterUp end

  //bottom to top button start

  //bottom to to button animation
  $(window).scroll(function () {
    var sticky = $(this).scrollTop()
    if (sticky > 50) {
      $(".bottom-to-top").fadeIn(300)
    } else {
      $(".bottom-to-top").fadeOut(300)
    }
  });
  //botttom to top button click start
  $(".bottom-to-top").click(function () {
    $('html,body').animate({
      scrollTop: 0
    }, 2000)
  })
  //bottom to top button  end


  // sticky menu start
  $(window).scroll(function () {
    var sticky = $(this).scrollTop()
    //this is for sticky menu
    if (sticky > 50) {
      $(".menu-bar").addClass("sticky-menu")
    } else {
      $(".menu-bar").removeClass("sticky-menu")
    }
    //this is for sticky menu padding
    if (sticky > 50) {
      $(".navbar-brand").addClass("scroll-logo")
    } else {
      $(".navbar-brand").removeClass("scroll-logo")
    }
  });
  // sticky menu end

  // team slide js start
  $('.team-slide').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: false,
    arrows: true,
    initialSlide: 1,
    prevArrow: '.team-arrow-left',
    nextArrow: '.team-arrow-right',
    responsive: [
      // for xtra small device
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        }
      },
      // for small device
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        }
      },
      // for medium device
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        }
      },
    ]
  });
  // team slide js end

  //smooth scroll start
  var html_body = $('html, body');
  $('.nav-item a').on('click', function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        html_body.animate({
          scrollTop: target.offset().top - 95
        }, 1500);
        return false;
      }
    }
  });
  //smooth scroll end


  //wow js  start
  new WOW().init();
  //wow js  end


  // nicescroll start
  $(document).ready(function() {
    $(".blog-scroll").niceScroll({cursorborder:"",cursorcolor:"#CBCBCB",boxzoom:true}); 
  })
  // nicescroll end
})