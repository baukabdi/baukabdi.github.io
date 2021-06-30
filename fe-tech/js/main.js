$(document).ready(function() {

	// header top mobile
	$(function() {
		$('.hamburger').on('click', function() {
			$('.header-top').addClass('header-top__active');
		})

		$('.close').on('click', function() {
			$('.header-top').removeClass('header-top__active');
		});
	});

	// header top mobile end

	// catalog menu
	$('.catalog__btn').on('click', function(e) {
		e.preventDefault();
		var attrHref = $(this).find('a').attr('href');
		$(attrHref).slideToggle();
	})
	// catalog menu end


	// Плавный скролл
	$(document).ready(function(){
		$(".main-arrow__up").on("click", function (event) {
			event.preventDefault();
			var id  = $(this).attr('href'),
			top = $(id).offset().top;
			$('body,html').animate({scrollTop: top}, 800);
		});
	});
// Плавный скролл end

	// main owl
	$(function() {
		var owl = $('.main-banner__slider__wrap');
		owl.owlCarousel({
			loop: true,
			items: 1,
			dots: true,
			dotsContainer: '#custom-dots',
			autoplay: true,
			autoplayTimeout: 7000
		});

		$('.owl-dot').click(function () {
			owl.trigger('to.owl.carousel', [$(this).index(), 300]);
		});
	});
	// main owl


	// partners owl
	$(function() {
		var owl = $('.partners-slide');
		owl.owlCarousel({
			loop: true,
			// autoplay:true,
			// autoplayTimeout:3000,
			dots: false,
			autoWidth: true,

			responsive : {
				0 : {
					items: 1,
				},

				480 : {
					items: 2,
				},

				600 : {
					items: 3
				},

				833: {
					items: 5,
					autoWidth: false
				}
			}

		});


		$('.brands-arrow__right').click(function(e) {
			e.preventDefault();
			owl.trigger('next.owl.carousel');
		})

		$('.brands-arrow__left').click(function(e) {
			e.preventDefault();
			owl.trigger('prev.owl.carousel', [300]);
		})
	})
	// partners owl end

	// hit tabs
	$(function() {
		$('.hit-sells').find('.tabs-links li').on('click', function(e) {
			e.preventDefault();
			$('.hit-sells').find('.tabs-links li').removeClass('tabs-active');
			$(this).addClass('tabs-active');

			var attrHref = $(this).find('a').attr('href');
			$('.hit-sells').find('.hit__sells__catalog').removeClass('tab-block__active');
			$(attrHref).addClass('tab-block__active');
		});
	});
	// hit tabs end


	// new products tabs
	$(function() {
		$('.new-products').find('.tabs-links li').on('click', function(e) {
			e.preventDefault();
			$('.new-products').find('.tabs-links li').removeClass('tabs-active');
			$(this).addClass('tabs-active');

			var attrHref = $(this).find('a').attr('href');
			$('.new-products').find('.hit__sells__catalog').removeClass('tab-block__active');
			$(attrHref).addClass('tab-block__active');
		});
	});
	// new products tabs end


	// hit tabs owl
	$(function() {

		var owl = $('.hit-sells').find('.tabs-links');
		owl.owlCarousel({
			autoWidth: true,

			responsive : {
				0 : {
					items: 1,
				},

				480 : {
					items: 5,
				},
			}

		});

		$('.hit-sells').find('.tabs__arrow__right').click(function(e) {
			e.preventDefault();
			owl.trigger('next.owl.carousel');
		})

		$('.hit-sells').find('.tabs__arrow__left').click(function(e) {
			e.preventDefault();
			owl.trigger('prev.owl.carousel', [300]);
		})

	});
	// hit tabs owl end


	// new products tabs owl
	$(function() {

		var owl = $('.new-products').find('.tabs-links');
		owl.owlCarousel({
			autoWidth: true,

			responsive : {
				0 : {
					items: 1,
				},

				480 : {
					items: 5,
				},
			}

		});

		$('.new-products').find('.tabs__arrow__right').click(function(e) {
			e.preventDefault();
			owl.trigger('next.owl.carousel');
		})

		$('.new-products').find('.tabs__arrow__left').click(function(e) {
			e.preventDefault();
			owl.trigger('prev.owl.carousel', [300]);
		})

	});
	// new products tabs owl end


	// new tabs
	$(function() {
		$('.new-tabs-links li').on('click', function(e) {
			e.preventDefault();
			$('.new-tabs-links li').removeClass('tabs-active');
			$(this).addClass('tabs-active');

			var attrHref = $(this).find('a').attr('href');
			$('.new__sells__catalog').removeClass('tab-block__active');
			$(attrHref).addClass('tab-block__active');
		});
	});
	// new tabs end

	// clients owl
	$(function() {
		var owl = $('.clients-blocks');
		owl.owlCarousel({
			items: 1,
			loop: true,
			dots: false
		});


		$('.clients-arrow__right').click(function(e) {
			e.preventDefault();
			owl.trigger('next.owl.carousel');
		})

		$('.clients-arrow__left').click(function(e) {
			e.preventDefault();
			owl.trigger('prev.owl.carousel', [300]);
		})
	})
	// clients owl end

});

// close popup
$(function() {
	$('.close__popup').click(function(e) {
		e.preventDefault();
		$(this).closest('.all__popup__bg').fadeOut();
	});
});
// close popup end


// registration tab
$(function() {
	$('.registration__tabs li').click(function(e) {
		e.preventDefault();
		$('.registration__tabs li').removeClass('register__active');
		$(this).addClass('register__active');

		var thsAttr = $(this).find('a').attr('href');
		$('.register-tab__form').hide();
		$(thsAttr).show();
	});
});

$('.open__popup').click(function(e) {

	e.preventDefault();

	var thsAttr = $(this).attr('href');
	$(thsAttr).fadeIn();
});
// registration tab end