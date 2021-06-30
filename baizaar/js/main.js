$(document).ready(function() {

	// WOW
	$(function() {
		new WOW().init();
	});
	// WOW end

	// AOS
	AOS.init({
		offset: 1000,
		delay: 0,
		duration: 800,
		once: true
	});
	// AOS end

	$(function() {
		var headerWidth = $('.header').height();
		$('.main-banner').css('margin-top', headerWidth);
	});

	// START paricles init
	$(function() {

		particlesJS("particles-js", {
			particles: {
				number: { value: 34, density: { enable: true, value_area: 800 } },
				color: { value: "#298eb9" },
				shape: {
					type: "triangle",
					stroke: { width: 0, color: "#000000" },
					polygon: { nb_sides: 5 },
					image: { src: "img/github.svg", width: 100, height: 100 }
				},
				opacity: {
					value: 0.07891476416322726,
					random: true,
					anim: { enable: false, speed: 1, opacity_min: 0.05, sync: false }
				},
				size: {
					value: 50,
					random: true,
					anim: { enable: false, speed: 10, size_min: 0.1, sync: false }
				},
				line_linked: {
					enable: false,
					distance: 20,
					color: "#ffffff",
					opacity: 0.2762016745712954,
					width: 2.2
				},
				move: {
					enable: true,
					speed: 4,
					direction: "none",
					random: false,
					straight: false,
					out_mode: "out",
					bounce: false,
					attract: { enable: false, rotateX: 600, rotateY: 1200 }
				}
			},
			interactivity: {
				detect_on: "canvas",
				events: {
					onhover: { enable: true, mode: "grab" },
					onclick: { enable: true, mode: "repulse" },
					resize: true
				},
				modes: {
					grab: { distance: 400, line_linked: { opacity: 1 } },
					bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
					repulse: { distance: 200, duration: 0.4 },
					push: { particles_nb: 4 },
					remove: { particles_nb: 2 }
				}
			},
			retina_detect: true
		});
	});
	// END paricles init

	// START revelator options
	$(function() {

		Revealator.effects_padding = '-500';
		

	});
	// END revelator options


	// hamburger menu
	$('.hamburger').click(function(e) {

		e.preventDefault();

		var href = $(this).attr('href');

		$('body').toggleClass('body-overflow-hidden');
		$(this).toggleClass('is-active');
		$(this).toggleClass('hamburger__active');
		$(href).toggleClass('hamburger-menu__active');
		$('.hamburger-menu__overlay').toggleClass('hamburger-menu__overlay__active');

	})
	// hamburger menu end


	// mobile menu
	$(function() {

		$('.mobile-menu__btn').click(function (e) {
			e.preventDefault();
			$('.mobile-menu__item').addClass('mobile-menu__item__active');
			$('.hamburger-menu__overlay').addClass('hamburger-menu__overlay__active');
			$('.hamburger').css('z-index', '9');
		})

		$('.mobile-menu__close').click(function (e) {
			e.preventDefault();
			$('.mobile-menu__item').removeClass('mobile-menu__item__active');
			$('.hamburger-menu__overlay').removeClass('hamburger-menu__overlay__active');
			$('.hamburger').css('z-index', '99999');
		})

	});
	// mobile menu end

	// menu
	$(function() {
		$('#main-menu').superfish({
			animation:   {opacity:'show',height:'show'},
			animationOut:   {opacity:'hide',height:'hide'},
			delay: 200
		});
	});
	// menu end


	// open menu tabs
	$('.open-menu__link a').hover(function(e) {

		e.preventDefault();

		var href = $(this).attr('href');

		$('.open-menu__tab').removeClass('open-menu__tab__active');
		$(href).addClass('open-menu__tab__active');
		$(href).addClass('fadeIn');

	});
	// open menu tabs end


	// search click
	$('.search a').click(function(e) {

		e.preventDefault();
		var thsHref = $(this).attr('href');

		$(thsHref).toggleClass('search__item__active');
		$(thsHref).parent('.search__wrap').addClass('search__wrap__active');

		$(document).mouseup(function (e){
			var div = $(".search__item");
			if (!div.is(e.target) && div.has(e.target).length === 0) {
				div.removeClass('search__item__active');
				$(thsHref).parent('.search__wrap').removeClass('search__wrap__active');
			}
		});

	})
	// search click end


	// main banner slider
	$(function() {
		var owl = $('.main-banner__owl');

		owl.owlCarousel({
			dots: true,
			dotsContainer: '#custom-dots',
			items: 1,
			loop: true,
			smartSpeed: 800,
			autoplay: true,
			autoplayTimeout: 4000
		});

		// custom dots
		$('.owl-dot').click(function () {
			owl.trigger('to.owl.carousel', [$(this).index(), 300]);
		});
		// custom dots end


		// scroll slide
		// owl.on('mousewheel', '.owl-stage', function (e) {
		// 	if (e.deltaY>0) {
		// 		owl.trigger('next.owl');
		// 	} else {
		// 		owl.trigger('prev.owl');
		// 	}
		// 	e.preventDefault();
		// });
		// scroll slide end

		
		// arrows
		$('.banner-arrow__left').click(function(e) {
			e.preventDefault();
			owl.trigger('prev.owl.carousel', [300]);
		})

		$('.banner-arrow__right').click(function(e) {
			e.preventDefault();
			owl.trigger('next.owl.carousel');
		})
		// arrows end

	});
	// main banner slider end

	// START floor map tabs
	$('.floor-map-tabs__link a').click(function(e) {

		new WOW().init();

		e.preventDefault();

		var attrHref = $(this).attr('href');

		$('.floor-map-tabs__link a').removeClass('floor-map-tabs__link__active');
		$(this).addClass('floor-map-tabs__link__active');

		$('.floor-map-tabs__accordion').removeClass('floor-map-tabs__accordion__active');
		$(attrHref).addClass('floor-map-tabs__accordion__active');
		$(attrHref).addClass('fadeIn');

	})
	// END floor map tabs

	// START floor map zoom

	// zoom in
	$('.floor-plus').click(function(e) {

		e.preventDefault();

		$('.floor-map__right img').css('transform', 'scale(1.3)');

	});
	// zoom in end


	// zoom out
	$('.floor-minus').click(function(e) {

		e.preventDefault();

		$('.floor-map__right img').css('transform', 'scale(1)');

	});
	// zoom out end

	// END floor map zoom


	// accordion tabs
	$('.floor-map-tabs__accordion li').click(function(e) {

		e.preventDefault();

		$(this).find('.accordion__arrow').toggleClass('accordion__arrow__rotate');
		$(this).find('.floor-map__submenu').slideToggle(400);

		$('.floor-map__submenu li').click(function() {
			return false;
		})

	});
	// accordion tabs end

	// map open close
	$('.autopsy-floor-map a').click(function(e) {

		e.preventDefault();

		var attrhref = $(this).attr('href');
		$(attrhref).slideToggle(400);
		$(this).toggleClass('floor-map__toggle')

		if ($(this).hasClass('floor-map__toggle')) {
			$(this).html('<img src="images/location.png" alt="Открыть карту этажей"> Открыть карту этажей');
		}

		else {
			$(this).html('<img src="images/location.png" alt="Закрыть карту этажей"> Закрыть карту этажей');
		}

	});
	// map open close end


	// discounts owl
	$(function() {

		var owl = $('.discount-slide__owl');
		owl.owlCarousel({
			items: 3,
			loop: true,
			dots: false,
			autoplay: true,
			autoplayTimeout: 3500,

			responsive : {
				0 : {
					items: 1
				},

				600 : {
					items: 2
				},

				1024 : {
					items: 3
				}
			}
		});

	});
	// discounts owl end

	// development owl
	$(function() {

		var owl = $('.developments-slide');
		owl.owlCarousel({
			items: 4,
			loop: true,
			dots: false,
			nav: false,
			autoWidth: true,
			margin: 15,
		});

		// arrows
		$('.development-arrow__left').click(function(e) {
			e.preventDefault();
			owl.trigger('prev.owl.carousel', [300]);
		})

		$('.development-arrow__right').click(function(e) {
			e.preventDefault();
			owl.trigger('next.owl.carousel');
		})
		// arrows end

	});
	// development owl end


	// about baizar owl
	$(function() {

		var owl = $('.about-baizar__content');
		owl.owlCarousel({
			items: 1,
			loop: true,
			dots: false,
			smartSpeed: 1000,
		});

		// arrows
		$('.about-arrow__left').click(function(e) {
			e.preventDefault();
			owl.trigger('prev.owl.carousel', [300]);
		})

		$('.about-arrow__right').click(function(e) {
			e.preventDefault();
			owl.trigger('next.owl.carousel');
		})
		// arrows end

	});
	// about baizar owl end


	// partners owl
	$(function() {

		var owl = $('.partners__owl');
		owl.owlCarousel({
			loop: true,
			dots: false,

			responsive : {
				992 : {
					items: 6
				},

				600 : {
					items: 4
				},

				460 : {
					items: 3
				},

				400 : {
					items: 2
				},

				0 : {
					items: 1
				}
			}
		});

		// arrows
		$('.partners-arrow__left').click(function(e) {
			e.preventDefault();
			owl.trigger('prev.owl.carousel', [300]);
		})

		$('.partners-arrow__right').click(function(e) {
			e.preventDefault();
			owl.trigger('next.owl.carousel');
		})
		// arrows end

	});
	// partners owl end

});