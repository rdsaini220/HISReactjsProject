/***** Image-Maker ******/
$(document).ready(function() {

  // FOR TESTIMONIAL TITLE 
  var fancyHeading = document.getElementsByClassName('fancy')[0];
  var letters = fancyHeading.textContent.split('');

  var content = letters.map((val, i) => {
    let delay = Math.floor((Math.random() * 1000) + 1);
    return ('<span style="animation-delay: '+ delay + 'ms">'
            + val +
            '</span>');
  });

  // FOR OUR WORK PROCESS TITLE
  var workHeading = document.getElementsByClassName('workHeading')[0];
  var workLetters = workHeading.textContent.split('');

  var workContent = workLetters.map((val, i) => {
    let delay = Math.floor((Math.random() * 1000) + 1);
    return ('<span style="animation-delay: '+ delay + 'ms">'
            + val +
            '</span>');
  });

  workHeading.innerHTML = "";

  for (var i = 0; i < workContent.length; i++) {
    workHeading.innerHTML += workContent[i];
  }


    //Image Maker
  	$('.background-image-maker').each(function() {
    	var imgURL = $(this).next('.holder-image').find('img').attr('src');
    	$(this).css('background-image', 'url(' + imgURL + ')');
  	});

    //Header
    $(window).on("scroll", function () {
        if ($(window).scrollTop() > 0) {
            $("#header-fix").addClass("active");
        } else {
            //remove the background property so it comes transparent again (defined in your css)
            $("#header-fix").removeClass("active");
        }
    });

    //Home Slider
    $('#homeSlider').owlCarousel({
        loop:true,
        margin:0,
        items:1,
        nav:false,
        dots: false
    })


    //Parallax Scene for Icons
    if($('.parallax-scene-1').length){
      var scene = $('.parallax-scene-1').get(0);
      var parallaxInstance = new Parallax(scene);
    }
    if($('.parallax-scene-2').length){
      var scene = $('.parallax-scene-2').get(0);
      var parallaxInstance = new Parallax(scene);
    }
    if($('.parallax-scene-3').length){
      var scene = $('.parallax-scene-3').get(0);
      var parallaxInstance = new Parallax(scene);
    }
    if($('.parallax-scene-4').length){
      var scene = $('.parallax-scene-4').get(0);
      var parallaxInstance = new Parallax(scene);
    }


    
    //Testimonial
    $('.owl-carousel').owlCarousel({
        loop: true,
        autoplay:true,
        smartSpeed:1000,
        items: 1,
        autoplayTimeout:5000,
        autoplayHoverPause:true,
    });

    //Navbar
    var $nav = $('ul.navbar-nav > li');
      $nav.hover(
        function () {
          
          $(this).addClass('hover');
        },
        function () {
          $(this).removeClass('hover');

        }
    );
});

/***** Header Fix ******/

