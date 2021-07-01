

// HAMBURGER
$(document).ready(function() {

  $('.hamburger').on('click', function(e) {
    e.preventDefault();
    $(this).toggleClass('hamburger-active');
    $('.menu').toggleClass('menu-opened');
  });

});



$(window).scroll(function(){
    if ($(window).scrollTop() > 400) { 
        $('.hamburger').css('box-shadow', '0px 4px 7.52px 0.48px rgba(0, 0, 0, 0.29)');
        $('.menu').css('box-shadow', '0px 5px 6.58px 0.42px rgba(0, 0, 0, 0.15)');
    }
    else {
        $('.hamburger').css('box-shadow', 'none');
        $('.menu').css('box-shadow', 'none');
    }
});

// END HAMBURGER



// WINDOW CAROUSEL
$(document).ready(function() {

  var owl = $('.window-carousel');

  owl.owlCarousel({
    items: 1,
    loop: false,
    dots: false
  });


// Go to the next item
$('.windows-arrow-right').click(function(e) {

  e.preventDefault();
  owl.trigger('next.owl.carousel');
})

// Go to the previous item
$('.windows-arrow-left').click(function(e) {
  e.preventDefault();
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    owl.trigger('prev.owl.carousel', [300]);
  })

});
// END WINDOW CAROUSEL


// PARTNERS CONTENT OWL CAROUSEL
$(function() {
  $('.partners-slide').owlCarousel({
    dots: false,
    responsive: {
      0: {
        items: 7,
        loop: true,
        autoWidth: true,
        margin: 20
      }
    }
  });
});
// END PARTNERS CONTENT OWL CAROUSEL


// GALLERY MAGNIFIC POPUP
$('.gallery-item').magnificPopup({
  type: 'image',
  delegate: 'a',
  zoom: {
    enabled: true
  },
  gallery: {
    enabled: true
  }
});
// END GALLERY MAGNIFIC POPUP


// GALLERY OWL CAROUSEL

var owl = $('.gallery-item');

  owl.owlCarousel({
    items: 7,
    loop: false,
    dots: false,
    margin: 0,
    autoWidth: true,
    loop: true
  });


// Go to the next item
$('#arrow-next').click(function(e) {

  e.preventDefault();
  owl.trigger('next.owl.carousel');
})

// Go to the previous item
$('#arrow-prev').click(function(e) {
  e.preventDefault();
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    owl.trigger('prev.owl.carousel', [300]);
  })


// END GALLERY OWL CAROUSEL