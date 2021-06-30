$(document).ready(function() {

	$('.phone_custom').inputmask("8 (999) 999 99 99");
	
	var bannerTopSlider = $('.banner__top');
	bannerTopSlider.slick({
		infinite: true,
		nextArrow: '<img class="banner-top__arrow banner-top__arrow-next" src="images/arrow-right.png" alt="">',
		prevArrow: '<img class="banner-top__arrow banner-top__arrow-prev" src="images/arrow-left.png" alt="">',
		slidesToShow: 5,
		responsive: [
		{
			breakpoint: 1100,
			settings: {
				slidesToShow: 4,
			}
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 3,
			}
		},
		{
			breakpoint: 660,
			settings: {
				slidesToShow: 2,
			},
		},
		{
			breakpoint: 440,
			settings: {
				slidesToShow: 1,
			},
		}
		],
	});

	var worksSlider = $('.works-slider__wrap');
	worksSlider.slick({
		slidesToShow: 3,
		infinite: true,
		nextArrow: '<img class="works-slider__arrow works-slider__arrow-next" src="images/arrow-right.png" alt="">',
		prevArrow: '<img class="works-slider__arrow works-slider__arrow-prev" src="images/arrow-left.png" alt="">',
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 575,
				settings: {
					slidesToShow: 1
				}
			}
		]
	});

	lc_lightbox('.works-slider__img-item', {
		fullscreen: true,
		thumbs_nav: false
	});

	$('.scroll-up').on('click', function() {
		$('html').animate({
			scrollTop: 0
		}, 1000);
	});
});