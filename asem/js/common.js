$(document).ready(function() {
	$('.select-custom-bootstrap').selectpicker();

	$('.content-show').on('click', function(e) {
		e.preventDefault();
		var th = $(this);
		var thAttr = th.attr('href');

		if (!th.hasClass('all-category__button-active')) {
			th.addClass('all-category__button-active');
			$(thAttr).slideDown('fast');
		}
		else {
			th.removeClass('all-category__button-active');
			$(thAttr).slideUp('fast');
		}
	});

	/******* Banner slide START *******/
	var bannerOwl = $('.banner-slider__wrap');
	bannerOwl.owlCarousel({
		items: 1,
		loop: true,
		autoplay: true,
		smartSpeed: 1000
	});

	// Next button
	$('.banner-slider-arrow__right').click(function(e) {
		e.preventDefault();
		bannerOwl.trigger('next.owl.carousel');
	})

	// Prev button
	$('.banner-slider-arrow__left').click(function(e) {
		e.preventDefault();
		bannerOwl.trigger('prev.owl.carousel', [300]);
	})
	/******* Banner slide END *******/ 


	/******* Products owl START *******/
	var productsOwl = $('.product__wrap');
	productsOwl.owlCarousel({
		dots: false,
		autoplay: false,
		responsive: {
			0: {
				items: 1
			},
			480: {
				items: 2,
			},
			768: {
				items: 3
			},
			992: {
				items: 4
			},
			1200: {
				items: 5
			}
		}
	});

	// Next button
	$('.slider-arrow__next').click(function(e) {
		e.preventDefault();
		var thOwl = $(this).parent().next('.product__wrap');
		thOwl.trigger('next.owl.carousel');
	})

	// Prev button
	$('.slider-arrow__prev').click(function(e) {
		e.preventDefault();
		var thOwl = $(this).parent().next('.product__wrap');
		thOwl.trigger('prev.owl.carousel', [300]);
	})
	/******* Products owl END *******/ 

	/******* Products radio START *******/
	var productRadio = $('.radio__item input');

	productRadio.on('change', function() {
		var thParent = $(this).parents('.product__item');
		var price = thParent.find('.product__price .uncrossed');
		var priceCrossed = thParent.find('.product__price .crossed');
		var numbers = thParent.find('.product__numbers');

		var priceValue = $(this).data('price');
		var priceCrossedValue = $(this).data('crossed-price');
		var numbersValue = $(this).data('numbers');

		price.text(priceValue);
		priceCrossed.text(priceCrossedValue);
		numbers.text(numbersValue);
	});

	var toFavorites = $('.to-favorites');
	toFavorites.on('click', function(e) {
		e.preventDefault();
		$(this).toggleClass('to-favorites__active');
	});
	/******* Products radio END *******/ 


	var stocksOwl = $('.stocks-slider');
	stocksOwl.owlCarousel({
		items: 1,
		animateIn: 'rollIn',
		animateOut: 'slideOutUp',
		autoplay: true,
		autoplayTimeout: 3000,
		autoplayHoverPause: true,
		smartSpeed: 1000,
	});

	$('.hamburger').on('click', function() {
		var th = $(this);
		var dataHash = '#' + th.data('hash');

		if (!$(dataHash).is(':visible')) {
			$(dataHash).slideDown('fast');
			$(this).addClass('is-active');
		}
		else {
			$(dataHash).slideUp('fast');
			$(this).removeClass('is-active');
		}
	});

	function showCatalog(className) {
		var button = $(className);
		button.on('click', function(e) {
			e.preventDefault();
			var subCat = $(this).find('.sub-category');
			var arrow = $(this).find('.all-cattegory__arrow-right');
			if (!subCat.is(':visible')) {
				subCat.slideDown('fast');
				arrow.addClass('all-cattegory__arrow-active');
			}
			else {
				subCat.slideUp('fast');
				arrow.removeClass('all-cattegory__arrow-active');
			}
		});
	}

	var mobileWidth = window.matchMedia("(max-width: 992px)");
	if (mobileWidth.matches) {
		showCatalog('.all-category__ul li');
	}

});