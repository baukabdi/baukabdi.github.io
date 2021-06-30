$(window).on('load', function() {
	$('.preloader').delay(1000).fadeOut('slow');
});

$(document).ready(function() {

	/*---------- Main slider START ----------*/
	var mainOwl = $('.main-slider__wrap')
	mainOwl.owlCarousel({
		items: 1,
		loop: true,
		dots: false,
		smartSpeed: 1000,
		autoplay: true,
		autoplayTimeout: 7000,
		// animateIn: 'zoomIn',
		// animateOut: 'fadeOut',
    autoplayHoverPause: true,
		navText: ['<span class="main-owl-navbar"><img src="images/arrow-left.svg" alt=""></span>',
							'<span class="main-owl-navbar"><img src="images/arrow-right.svg" alt=""></span>'],
		responsive: {
			0: {
				nav: true,
				autoHeight: true,
			},
			1200: {
				nav: false,
			}
		},
		onInitialize : function(element){
        mainOwl.children().sort(function(){
            return Math.round(Math.random()) - 0.5;
        }).each(function(){
            $(this).appendTo(mainOwl);
        });
    },
	});

	$('.main-slider__arrow_right').click(function() {
		mainOwl.trigger('next.owl.carousel');
	})

	$('.main-slider__arrow_left').click(function() {
		mainOwl.trigger('prev.owl.carousel', [300]);
	})
	/*---------- Main slider END ----------*/

	/*---------- Menu START ----------*/
	$('body').on('click', '.menu-button__wrap', function() {
		$('.menu-opened__wrap').fadeIn(1000);
		$('.menu-opened__wrap').addClass('active');

		if ($('.menu-opened__wrap').hasClass('active')) {
			$('.menu-button__wrap').addClass('opacity-0');
			$('.menu-list__item').addClass('trf-none');
			$('.menu-social').addClass('trf-none');
		}
	});

	function menuHide() {
		var menuOpened = $('.menu-opened__wrap');
		var menuButton = $('.menu-button__wrap');
		var menuList = $('.menu-list__item');
		var menuSocial = $('.menu-social');

		menuOpened.fadeOut('fast');
		menuOpened.removeClass('active');
		menuButton.removeClass('opacity-0');

		menuList.removeClass('trf-none');
		menuSocial.removeClass('trf-none');
	}


	$('body').on('click', '.close-menu', function(e) {
		e.preventDefault();
		menuHide();
	})

	$(document).on('mouseup', function (e) {
		var menuOpened = $('.menu-opened__wrap ');
		var menuListWrap = $('.menu-list__wrap');
		var menuButton = $('.menu-button__wrap');
		var menuSocial = $('.menu-social ');
		if (!menuListWrap.is(e.target) && menuListWrap.has(e.target).length === 0 && menuButton.has(e.target).length === 0 && menuSocial.has(e.target).length === 0) {
			menuHide();
		}
	});

	
	/*---------- Menu END ----------*/

	/*---------- Gallery auto width/height START ----------*/
	var galleryImg = $('.gallery__wrap .gallery__item img');

	galleryImg.each(function() {
		if ($(this).width() < $(this).parent().width()) {
			$(this).css('width', '100%');
			$(this).css('height', 'auto');
		}
		else {
			$(this).css('width', 'auto');
			$(this).css('height', '100%');
		}
	});
	/*---------- Gallery auto width/height END ----------*/


	/*---------- Gallery album filter START ----------*/
	$('body').on('click', '[data-filter]', function() {
		dataCat = $('[data-cat]');
		thDataFilter = $(this).data('filter');
		var galleryTitle = $('.s-gallery .c-title');
		$('.filter-title').remove();
		$('.show-all-cat').remove();
		galleryTitle.after('<p class="filter-title">'+thDataFilter+'</p>');
		$('.gallery__wrap').after('<a class="show-all-cat" href="#"><img src="images/arrow-back.svg">Back</a>');

		$('.show-all-cat').on('click', function() {
			dataCat.show();
			$('.filter-title').remove();
			$(this).remove();
		})

		dataCat.each(function() {
			if (thDataFilter == $(this).data('cat')) {
				$(this).show();
			}
			else {
				$(this).hide();
			}
		})
	});
	/*---------- Gallery album filter END ----------*/

	var $obj = lc_lightbox('.album-images__item a', {
		fullscreen: true,
		download: true,
		fs_only: false
	});

});