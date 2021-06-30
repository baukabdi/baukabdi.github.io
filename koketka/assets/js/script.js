$(document).ready(function () {

	var headerRight = $('.header_right');
	$('.hamburger_button').on('click', function () {
		headerRight.addClass('header_is_active');
	});

	$('.times_button').on('click', function () {
		headerRight.removeClass('header_is_active');
	});

	$('.search_button').on('click', function (e) {
		var search = $('.header_search_wrap');

		if (!search.is(':visible')) {
			search.slideDown('fast');
		}
		else {
			search.slideUp('fast');
		}
	});


	if (window.matchMedia("(max-width: 992px)").matches) {
		$('.menu-item-has-children').on('click', function () {
			var submenu = $(this).find('.sub-menu');
			if (!submenu.is(':visible')) {
				submenu.slideDown(500);
			}
			else {
				submenu.slideUp(500);
			}
		});
	}

	/*===== Submenu change image BEGIN =====*/
	$('.sub_list a').hover(function () {
		var path = $(this).data('path');
		var right = $('.sub-menu .right img');
		right.attr('src', path);
	});
	/*===== Submenu change image END =====*/


	/*===== Main banner slider BEGIN =====*/
	$('.main_banner_slider').slick({
		prevArrow: '<div class="banner_arrow_prev"><img src="assets/images/slide-prev.svg"></div>',
		nextArrow: '<div class="banner_arrow_next"><img src="assets/images/slide-next.svg"></div>',
	});
	/*===== Main banner slider END =====*/

	/*===== Fancybox options BEGIN =====*/
	$('[data-fancybox]').fancybox({
		touch: false,
	});

	$('.popup_close').on('click', function () {
		$.fancybox.close();
	});

	/*===== Fancybox options END =====*/


	/*===== Fotorama for product single Options START =====*/
	$('.product_single_fotorama').fotorama({
		width: 450,
		thumbs: false,
		thumbwidth: '140px',
		thumbheight: '118px',
		thumbmargin: 15,
		arrows: false,
		allowfullscreen: true
	});

	$(document).on('mouseover', '.fotorama__nav__frame', function () {
		var $fotoramaDiv = $(this).parents('.fotorama'),
			fotoramaApi = $fotoramaDiv.data('fotorama');
		fotoramaApi.show({
			index: $('.fotorama__nav__frame', $fotoramaDiv).index(this)
		});
	});
	/*===== Fotorama for product single Options END =====*/


	/*===== Quantity BEGIN =====*/
	var numUp = $('.spin_up');
	var numDown = $('.spin_down');

	numUp.on('click', function (e) {
		e.preventDefault();
		this.parentNode.querySelector('input[type=number]').stepUp();
	})

	numDown.on('click', function (e) {
		e.preventDefault();
		this.parentNode.querySelector('input[type=number]').stepDown();
	})
	/*===== Quantity END =====*/


	/*===== Related Slider BEGIN =====*/
	var relatedItem = $('.related_products_slider li');
	if (relatedItem.length > 3) {
		relatedItem.css('margin-right', '30px');
		$('.related_products_slider').slick({
			slidesToShow: 3,
			arrows: false,
			dots: true,
			autoplay: true,

			responsive: [{
				breakpoint: 1200,
				settings: {
					slidesToShow: 2
				},
				breackpoint: 650,
				settings: {
					slidesToShow: 1
				}
			}]
		});
	}
	/*===== Related Slider END =====*/
	$('.price_range input').jRange({
	    from: 1500,
	    to: 10000,
	    step: 1,
	    isRange : true,
	    format: '%s',
	    width: 250,
	    showLabels: true,
	    snap: true
	});

	/*===== Filter toggle BEGIN =====*/
	$('.filter_button').on('click', function (e) {
		e.preventDefault();
		var filterShow = $('.filter_show');
		if (!filterShow.hasClass('filter_show_active')) {
			filterShow.addClass('filter_show_active');
		}
		else {
			filterShow.removeClass('filter_show_active');
		}
	});
	/*===== Filter toggle END =====*/



	/*===== Select picker =====*/
	$('select').not('[multiple="multiple"]').selectpicker();
	$('.phone__custom').inputmask("8 (999) 999 99 99");


	/*===== Cabinet tab =====*/
	$('.active_sidebar a').on('click', function(e) {
		e.preventDefault();
		var attrHref = $(this).attr('href');
		var section = $('.c-cabinet');
		var th = $(this);
		var link = $('.active_sidebar a');

		link.removeClass('active_link');
		th.addClass('active_link');
		section.addClass('hidden');
		$(attrHref).removeClass('hidden');
	});


	$('[multiple="multiple"]').multiselect({
		includeSelectAllOption: true,
	});

	var wh = $(window).height();
	var bh = $('body').height();
	console.log(wh);

	if (bh < wh) {
		$('.footer').addClass('footer_absolute');
	}
	$('body').on('click', function() {
		if (bh < wh) {
			$('.footer').addClass('footer_absolute');
		}
		else {
			$('.footer').removeClass('footer_absolute');
		}
	});

});
