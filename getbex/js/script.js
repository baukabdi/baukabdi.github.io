$(window).on('load', function() {
	setTimeout(function() {
		$('.preloader').addClass('preloader_active');
	}, 1200);

	setTimeout(function() {
		$('.preloader').remove();
	}, 10000);

});




$(document).ready(function() {

	/*===== Lang dropdown START =====*/
	$('.lang_button .dropdown-menu .dropdown-item').on('click', function() {
		var thVal = $(this).text();
		var langDropdown = $('#lang-dropdown span');
		langDropdown.text(thVal);
	});

	$('.lang_button .dropdown').on('show.bs.dropdown', function() {
		$(this).find('.dropdown-menu').first().stop(true, true).slideDown(300);

		setTimeout(function() {
			$('.lang_button .dropdown').addClass('dropdown_opened');
		}, 400);

		if ($('.submenu').hasClass('submenu_active')) {
			$('.submenu').removeClass('submenu_active');
			$('.menu_list_active').removeClass('menu_list_active');
		}
	});

	$('.lang_button .dropdown').on('hide.bs.dropdown', function() {
  	$(this).find('.dropdown-menu').first().stop(true, true).slideUp(400);
  	$('.lang_button .dropdown').removeClass('dropdown_opened');
  });
	  /*===== Lang dropdown END =====*/

	$('select').selectpicker({
		dropupAuto: false,
		selectOnTab: true
	});




	var selectButton = $('.select_item .dropdown-toggle');
	selectButton.on('mouseup', function() {
		var thParent = $(this).parent('.bootstrap-select');

		selectButton.removeClass('dropdown-toggle-show');
		if (!thParent.hasClass('show')) {
			$(this).addClass('dropdown-toggle-show');
		}
		else {
			$(this).removeClass('dropdown-toggle-show');
		}
	});

	$('body').on('click', function() {
		var selectParent = $('.bootstrap-select');
		if (selectParent.hasClass('show')) {
			selectButton.removeClass('dropdown-toggle-show');
		}
	});

	/*===== Shopping cart Open/Close START =====*/
	$('.shopping_cart_toggle a').on('click', function() {
		var sub = $('.shopping_card_opened');
		sub.slideDown(300);
		sub.addClass('active');
	});

	$(document).on('mouseup', function(e) {
		var toggle = $('.shopping_cart_toggle');
		var sub = $('.shopping_card_opened');
		var close = $('.shopping_card_opened .cr_close');

		if (!sub.is(e.target) && sub.has(e.target).length === 0) {
			sub.fadeOut(300);
			sub.removeClass('active');	
		}
		else if (close.is(e.target)) {
			sub.slideUp(300);
			sub.removeClass('active');
		}
	});
	/*===== Shopping cart Open/Close START =====*/

		/*===== Profile dropdown START =====*/
	$('.pd_open a').on('click', function(e) {
		e.stopPropagation();
		var pd = $('.profile_dropdown');
		pd.slideDown(300);
		pd.addClass('active');
	});

	$(document).on('mouseup', function(e) {
		var pd = $('.profile_dropdown');
		var pdClose = $('.profile_dropdown .pd_close');

		if (!pd.is(e.target) && pd.has(e.target).length === 0) {
			pd.fadeOut(300);
			pd.removeClass('active');	
		}
		else if (pdClose.is(e.target)) {
			pd.slideUp(300);
			pd.removeClass('active');
		}
	});
	/*===== Profile dropdown START =====*/

	$('.main_banner_wrapper').slick({
		arrows: false,
		slidesToShow: 1,
		dots: true,
		swipe: true,
		autoplay: false
	});

	/*===== Search START =====*/
	var searchOpened = $('.search_opened');
	var searchClose = $('.search_close');
	var sHints = $('.search_opened_hints');
	var headerMenu = $('.header_menu_column');
	var headerTopMenu = $('.header_top');

	$('body').on('click', '.search_open a', function(e) {
		e.preventDefault();

		headerMenu.addClass('header_menu_overlay');
		searchOpened.show();
		searchClose.show();
		headerTopMenu.addClass('vo-hidden');
	});

	// hide search box START
	$('body').on('click', '.search_close', function () {
		searchOpened.hide();
		searchClose.hide();
		headerMenu.removeClass('header_menu_overlay');
		sHints.hide();
		headerTopMenu.removeClass('vo-hidden');
	});

	$(document).mouseup(function(e) {
		if (!searchOpened.is(e.target) && searchOpened.has(e.target).length === 0) {
			searchOpened.hide();
			searchClose.hide();
			headerMenu.removeClass('header_menu_overlay');
			sHints.hide();
			searchOpened.removeClass('search_active');
			headerTopMenu.removeClass('vo-hidden');
		}
	});
	// hide search box END

	$('.search_input').on('keyup', function () {
		var sInput = $(this);
		
		if (sInput.val().length > 0) {
			sHints.slideDown(400);
			searchOpened.addClass('search_active');
		}

		else {
			sHints.slideUp(300);
			searchOpened.removeClass('search_active');
		}
	});

	$('.search_input').on('click', function() {
		if ($(this).val() != '') {
			sHints.slideDown(400);
			searchOpened.addClass('search_active');
		}
	});
	/*===== Search END =====*/

	/*===== Menu START =====*/
	$('.header_menu li').on('click', function(e) {
		var thMenuList = $(this);
		var menuList = $('.header_menu li');
		var submenu = $(this).find('.submenu');
		var submenuClose = $('.submenu_close');
		var submenuAll = $('.submenu');
		var menuListActive = $('.menu_list_active');

		submenuAll.removeClass('submenu_active');
		menuListActive.removeClass('menu_list_active');

		if (thMenuList.find('.submenu').length == 1) {
			$(this).addClass('menu_list_active');
			submenu.addClass('submenu_active');
			submenuClose.addClass('submenu_close_active');
		}
		
	});

	// hide submenu close on mouseup if list off has-submenu
	$('.header_menu li').on('mouseup', function() {
		if ($('.submenu_close').hasClass('submenu_close_active')) {
			$('.submenu_close').removeClass('submenu_close_active');
		}
	});

	$(document).on('click', function(e) {
		var menuList = $('.header_menu li');
		var submenu = $(this).find('.submenu');
		var submenuClose = $('.submenu_close');

		if (!menuList.is(e.target) && menuList.has(e.target).length === 0) {
			submenu.removeClass('submenu_active');
			submenuClose.removeClass('submenu_close_active');
			var menuListActive = $('.menu_list_active');
			menuListActive.removeClass('menu_list_active');
		}
	});

	$('.submenu_close').on('click', function() {
		var submenu = $('.submenu');
		var menuListActive = $('.menu_list_active');
		submenu.removeClass('submenu_active');
		menuListActive.removeClass('menu_list_active');
	});
	/*===== Menu END =====*/

	/*===== Header add mobile submenu START =====*/
	$('.header_add_mobile .has-submenu').on('click', function(e) {
		e.preventDefault();
		var mobSubmenu = $(this).find('.submenu');
		mobSubmenu.addClass('submenu_add_active');
		headerMenu.addClass('overflow-hidden');
	});

	$('body').on('click', '.header_add_mobile .submenu_arrow_back', function() {
		$('.submenu_add_active').removeClass('submenu_add_active');
		headerMenu.removeClass('overflow-hidden');
	});
	/*===== Header add mobile submenu END =====*/

	/*===== Products Slider START =====*/
	function productSlider(slickRefresh)  {
		var productsSection = $('.s-products-has-slider');

		productsSection.each(function() {
			var prSlider = $(this).find('.product_cart_slider');
			var prItem = $(this).find('.product_cart_slider .products_cart');
			var dotsContainer = $(this).find('.s-products-bottom .slick-dots-container');

			if (prItem.length > 6) {
				prSlider.slick({
					infinite: false,
					slidesPerRow: 3,
					rows: 2,
					arrows: false,
					dots: true,
					autoplay: false,
					appendDots: dotsContainer,
					speed: 1000,
					responsive: [
					{
						breakpoint: 1200,
						settings: {
							slidesPerRow: 2,
						}
					},
					{
						breakpoint: 575,
						settings: {
							slidesPerRow: 1,
						}
					}
					]
				});
			}	
		});
	}

	function relatedSlider() {
		var relatedSection = $('.related-goods .related_wrapper');

		relatedSection.each(function() {
			var prSlider = $(this).find('.product_cart_slider');
			var prItem = $(this).find('.product_cart_slider .products_cart');
			var dotsContainer = $(this).find('.s-products-bottom .slick-dots-container');

			if (prItem.length > 4) {
				prSlider.slick({
					infinite: false,
					slidesPerRow: 4,
					rows: 1,
					arrows: false,
					dots: true,
					autoplay: false,
					appendDots: dotsContainer,
					speed: 1000,
					responsive: [
					{
						breakpoint: 1200,
						settings: {
							slidesPerRow: 3,
						}
					},
					{
						breakpoint: 992,
						settings: {
							slidesPerRow: 2,
						}
					},
					{
						breakpoint: 575,
						settings: {
							slidesPerRow: 1,
						}
					}
					]
				});
			}	
		});
	}

	if ($('.s-products').length > 1) {
		$('.s-products').last().addClass('s-products-last');
	}

	productSlider();
	relatedSlider();
	/*===== Products Slider END =====*/

	$('body').on('click', '.add_favourite a', function(e) {
		e.preventDefault();
		$(this).toggleClass('favourite_fill');
	})

	/*===== Quantity START =====*/
	$('body').on('click', '.quantity_spin', function () {
		var $input = $(this).parent().find('input');
		if ($(this).hasClass('spin_up')) {
			$input.val(parseInt($input.val()) + 1);
			$input.change();
			return false;
		}
		else {
			var count = parseInt($input.val()) - 1;
			count = count < 1 ? 1 : count;
			$input.val(count);
			$input.change();
			return false;
		}
	});
	/*===== Quantity END =====*/
	

	/*===== Tabs function START =====*/
	$('[data-tab]').on('click', function(e) {
		var tab = $('[data-tab]');
		var thTab = $(this).data('tab');
		var cat = $('[data-cat]');
		e.preventDefault();
		tab.removeClass('active');
		$(this).addClass('active');

		cat.each(function() {
			thCat = $(this).data('cat');
			if (thCat != thTab) {
				$(this).hide();
			}
			else {
				$(this).fadeIn(300);
				$(this).removeClass('hidden');
			}
		})
	})
	/*===== Tabs function START =====*/

	/*===== Blog responsive slider START =====*/
	function blogSlider() {
		if (window.matchMedia("(max-width: 768px)").matches) {
			$('.blog_cards_row').slick({
				arrows: false,
				slidesToShow: 1,
				dots: true,
				swipe: true,
				autoplay: false,
				mobileFirst: true,
				speed: 600,
				responsive: [
					{
						breakpoint: 768,
						settings: 'unslick'
					}
				]
			});
		}
	}

	function blogSingleDiscSlider() {
		if (window.matchMedia("(max-width: 768px)").matches) {
			$('.s-blog-single .blog_discount_products').slick({
				arrows: false,
				dots: true,
				mobileFirst: true,

				responsive: [
				{
					breakpoint: 0,
					settings: {
						slidesToShow: 1
					}
				},
				{
					breakpoint: 400,
					settings: {
						slidesToShow: 2
					}
				},
				{
					breakpoint: 575,
					settings: {
						slidesToShow: 3
					}
				},
				{
					breakpoint: 768,
					settings: 'unslick'
				}
				]
			});
		}
	}
	
	$(window).resize(function() {
		blogSlider();
		blogSingleDiscSlider();
		$('select').selectpicker('refresh');

		filterTopFun();
	});

	blogSlider();
	blogSingleDiscSlider();

	$('.blog_tabs li').on('click', function() {
		$('.blog_cards_row').slick('refresh');
	});
	/*===== Blog responsive slider END =====*/

	$('.hamburger_button a').on('click', function(e) {
		e.preventDefault();
		var th = $(this).attr('href');
		var thHref = $(th);
		if (thHref.hasClass('is-active')) {
			thHref.removeClass('is-active');
			thHref.slideUp(500);
			$(this).removeClass('active');
			$('body').removeClass('overflow-hidden');
		}
		else {
			thHref.addClass('is-active');
			thHref.slideDown(400);
			$(this).addClass('active');
			$('body').addClass('overflow-hidden');
		}
	});

	var sprClmn = $('.s-products .column_left').width();
	$('.price_range input').jRange({
		from: 0,
		to: 500,
		step: 1,
		isRange : true,
		format: '€%s',
		width: sprClmn,
		showLabels: true,
		showScale: false,
		snap: false
	});

	$('.star_rating .star_rating_ico').on('click', function() {
		var thParent = $(this).parent('.star_rating');
		thParent.addClass('star_rating_active');
	});

	$('.slider-container').css('width', '100%');
	$('.slider-container').css('max-width', sprClmn);

	$('.link_more').on('click', function() {
		var linkMore = $(this).parent('ul').find('.more_lists');
		
		if (linkMore.hasClass('hidden')) {
			linkMore.slideDown('fast');
			linkMore.removeClass('hidden');
		}
		else {
			linkMore.slideUp('fast');
			linkMore.addClass('hidden');
		}
	});

	$('.more_info_button').on('click', function(e) {
		e.preventDefault();
		var text = $(this).parent('.product_description').find('.product_description_text');

		text.toggleClass('product_text_opened');
	});

	$('.read_more').on('click', function(e) {
		e.preventDefault();
		var moreText = $(this).parent('.overview_right').find('.more_text');

		if (!moreText.is(':visible')) {
			moreText.slideDown();
		}
		else {
			moreText.slideUp();
		}
		
	});
	
	/*===== Product Slider START =====*/
	var prSliderWrLi = $('.product_slider_wrapper li');
	var prSliderWr = $('.product_slider_wrapper');

	prSliderWrLi.on('click', function(e) {
		var th = $(this);
		var thumbSrc = $('.product_slider_thumb .product_thumb_image img');
		var thumbHref = $('.product_slider_thumb a');
		var logoSrc = $('.product_slider_thumb_logo img');
		var thSrc = $(this).find('img').attr('src');
		var thAlt = $(this).find('img').attr('alt');
		var logo = $(this).find('img').data('logo');
		var dataZoom = $(this).find('img').data('zoom');

		prSliderWrLi.removeClass('active');
		th.addClass('active');

		if (thumbSrc.attr('src') != thSrc && thumbHref.attr('href') != dataZoom) {
			thumbSrc.hide();
			thumbSrc.fadeIn(300);
		}

		thumbSrc.attr('src', thSrc);
		thumbSrc.attr('alt', thAlt);
		logoSrc.attr('src', logo);
		thumbHref.attr('href', dataZoom);
	});	

	$('.product_slider_thumb a').zoomple({ 
		offset : {x:-180,y:-180},
		zoomWidth : 365,  
		zoomHeight : 365,
		roundedCorners : true,
	});
	/*===== Product Slider END =====*/


	$('.product_list_circle .dropdown-menu a').on('click', function(e) {
		e.preventDefault();
		var aText = $(this).html();
		var drToggle = $(this).parents('.dropdown').find('.dropdown-toggle');
		drToggle.html(aText);
	});

	$('.product_choose_color .ch_color_item').on('click', function () {
		var th = $(this);
		var li = $('.product_choose_color .ch_color_item');
		var thValue = th.data('value');
		var chValue = th.parents('.product_choose_color').find('.color_value');

		li.removeClass('active');
		th.addClass('active');
		chValue.text(thValue);
	});

	$('.product_choose_size .ch_size_item').on('click', function (e) {
		e.preventDefault();
		var th = $(this);
		var li = $('.product_choose_size .ch_size_item');

		li.removeClass('active');
		th.addClass('active');
	});


	$('.product_discount_slider').slick({
		slidesToShow: 3,
		nextArrow: '<button class="slick_next"><span><img src="images/discount-slider-arrow.svg" alt="GetBex"></span></button>',
		slidesToScroll: 3,

		responsive: [
		{
			breakpoint: 420,
			settings: {
				slidesToShow: 2
			}
		},
		]
		
	});

	lc_lightbox('.descr_item a', {
		fullscreen: true,
		thumbs_nav: false,
		download: true,
		fs_only: false,
	});

	$('.video_wrapper').slick({
		slidesToShow: 1,
		arrows: false,
		dots: true
	});

	$('.star_rating_input').each(function(i){
		$(this).attr('id', 'star_rating_ico' + '-' + (i+1));
		$(this).attr('name', 'star_rating_ico' + '-' + (i+1));
		$(this).next('.star_rating_ico').attr('for', 'star_rating_ico' + '-' + (i+1));
	})


	function formLabelCheck() {
		var parent = $('.form-section .input_item');
		var input = $('.form-section .input_item input, .form-section .input_item textarea');
		input.each(function() {
			if (!$(this).val() == "") {
				$(this).parent('.input_item').addClass('input_item_change');
			}
			else {
				$(this).parent('.input_item').removeClass('input_item_change');
			}
		});
	}
	formLabelCheck();

	/*===== Ask form START =====*/
	$('body').on('mousedown', function(e) {
		formLabelCheck();
	});
	/*===== Ask form END =====*/

	$('.sharing_button').on('click', function(e) {
		e.preventDefault();
		$(this).toggleClass('sharing_button_opened');
		$('.sharing_social').toggleClass('sharing_social_opened');
	});

	$('.sharing_close').on('click', function(e) {
		e.preventDefault();
		$('.sharing_button').removeClass('sharing_button_opened');
		$('.sharing_social').removeClass('sharing_social_opened');
	});


	$('.modal').on('shown.bs.modal', function (e) {
		$('.s-main').addClass('position-static');
		$('.s-blog').addClass('z-index-0');
	})

	/*===== Filter return START =====*/
	$('.filter_button').on('click', function(e) {
		e.preventDefault();
		var th = $(this);
		var dataFilter = th.data('filter');
		var dataObj = $('#' + dataFilter);
		var filterClass = 'filter_wrapper_opened';
		var filterUnfill = $('.filter_unfill');
		var filterFill = $('.filter_fill');
		
		if (!dataObj.hasClass(filterClass)) {
			dataObj.addClass(filterClass);
			th.addClass('filter_button_active');
			filterFill.addClass('filter_fill_active');
			filterUnfill.addClass('filter_unfill_active');
		}
		else {
			dataObj.removeClass(filterClass);
			th.removeClass('filter_button_active');
			filterFill.removeClass('filter_fill_active');
			filterUnfill.removeClass('filter_unfill_active');
		}
	});
	/*===== Filter return END =====*/


	/*===== View type START =====*/
	$('.view_button_item').on('click', function(e) {
		e.preventDefault();
		var th = $(this);
		var btnItem = $('.view_button_item');
		var dataWidth = th.data('width');
		var productsCart = $('.products_cart');
		var widthAlchemy = dataWidth + '% !important'

		btnItem.removeClass('view_button_active');
		th.addClass('view_button_active');
		productsCart.attr('style', 'width:'+widthAlchemy+'');
	});
	/*===== View type START =====*/

	/*===== Filter change position on scroll START =====*/
	function filterTopFun() {
		var productListsSection = $('.s-products-lists');

		if (productListsSection.length >= 1) {
			var filterTop = $('.filter_top_wrapper');
			var filterTopHeight = filterTop.height();
			var filterOffset = filterTop.offset().top
			var filterWrapper = $('.products_filter_wrapper');
			var filterFixed = 'products_filter_wrapper_fixed';
			var filterTopFixed = 'products_filter_fixed';
			var headerHeight = $('.header_navbar').height();

			$(window).on('scroll', function() {
				var scrollTop = $(window).scrollTop();
				var thPlus = scrollTop + headerHeight;
				if (thPlus > filterOffset && filterTop.is(':visible')) {
					filterTop.addClass(filterTopFixed);
					filterWrapper.css('top', filterTopHeight + headerHeight - 2);
					filterWrapper.addClass(filterFixed);
				}
				else {
					filterTop.removeClass(filterTopFixed);
					filterWrapper.css('top', '0');
					filterWrapper.removeClass(filterFixed);
				}
			});
		}
	}

	filterTopFun();

	/*===== Filter change position on scroll END =====*/


	$('.env_sidebar li a').on('click', function(e) {

		var thArticle = $(this).attr('data-cat');
		var thBlock = $('#'+thArticle);

		console.log(thBlock);

		$('.my_env').each(function() {
			var thId = $(this).attr('id');
			if (thId == thArticle) {
				$(this).fadeIn('fast');
			}
			else {
				$(this).hide();
			}
		});
	});


	// var loginHeight = $('.s-login').height();
	// var documentHeight = $(document).height();
	// if (loginHeight < documentHeight) {
	// 	$('.s-login').css('height', '100vh');
	// }

	if ($('.signup_more_details_checkbox input').is(':checked')) {
		$('.signup_all_details').slideDown(600);
	}

	$('.signup_more_details_checkbox').on('change', function() {
		var moreInput = $(this).find('input');
		var moreBlock = $('.signup_all_details');
		if (moreInput.is(':checked')) {
			moreBlock.slideDown(600);
		}
		else {
			moreBlock.slideUp(400);
		}
	});


	$('.cs_delete').on('click', function(e) {
		e.preventDefault();
		var thList = $(this).parents('li');
		thList.fadeOut(500);
		setTimeout(function() {
			thList.remove();
		}, 1000);
	});



	var csfForm = $('.cart_step_form');

	$('.cart_step_table .table_body ul > li input[type="radio"]').each(function() {
		var thCsfForm = $(this).parents('label').find('.cart_step_form');
		if ($(this).is(':checked')) {
			thCsfForm.slideDown();
		}
	});

	

	$('.cart_step_table .table_body ul > li input[type="radio"]').on('change', function () {
		var thCsfForm = $(this).parents('label').find('.cart_step_form');
		var thLabel = $(this).parents('label');

		setTimeout(function() {
			var thScrllPosition = thLabel.offset().top;
			$('html, body').animate({
				scrollTop: thScrllPosition,
			}, 500);
		}, 500);
		

		if ($(this).is(':checked')) {
			csfForm.slideUp(400);
			thCsfForm.slideDown(500);
		}
		else {
			thCsfForm.slideUp(500);
		}
	});


	$('.csm_right ul').mCustomScrollbar();


	var csmButton = $('.csm_init');
	var csmPopup = $('.cart_step_map');
	var csmClose = $('.csm_close');

	csmButton.on('click', function(e) {
		e.preventDefault();
		csmPopup.addClass('csm_active');

		setTimeout(function() {
			var csmOffset = csmPopup.offset().top;
			$('html, body').animate({
				scrollTop: csmOffset - 25
			}, 500);
		}, 500);
	});

	csmClose.on('click', function() {
		csmPopup.removeClass('csm_active');
	});

	$('body').on('mouseup', function(e) {
		if (!csmPopup.is(e.target) && csmPopup.has(e.target).length === 0) {
			csmPopup.removeClass('csm_active');
		}
	});

	
});