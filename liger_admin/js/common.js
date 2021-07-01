$(window).on('load', function() {
	$('.preloader').fadeOut('fast');
})

$(document).ready(function () {
	$('.click-def').on('click', function (e) {
		e.preventDefault();
	});


	/*------------- Menu initialize START ------------- */
	$('#my-menu a').each(function() {
		var location = window.location.href;
		var path = this.href;
		if (path == location) {
			$(this).closest('.has-sub').addClass('menu-link-active');
		}
	});
	/*------------- Menu initialize END ------------- */

	var menu = $('#my-menu');
	menu.mmenu({
		navbar: {
			classes: 'my-custom-width',
			title: '<div class="logo">\n'
								+'<img class="logo-full" src="images/logo.svg" alt="Liger network">\n'
							+'</div>',
		},
		"slidingSubmenus": true,

		extensions: [
		'border-none',
		'pagedim-black',
		'multiline'
		],

		sidebar: {
			use: false,
			collapsed: {
				use: 992,
				hideNavbar: true,
				hideDivider: true,
			},
			expanded: {
				use: false,
			},
			blockMenu: true,
			hideDivider: true,
			slideMenu: true
		},
	});

	var menuApi = menu.data('mmenu');

	menuApi.bind('open:start', function() {
		menu.addClass('mm-menu_opened-custom');
	});

	menuApi.bind('open:finish', function() {
		var hButton = $('.hamburger-button');
		hButton.addClass('hamburger-button__active');
	});

	menuApi.bind('close:start', function() {
		menu.removeClass('mm-menu_opened-custom');
	});

	menuApi.bind('close:finish', function() {
		menuApi.closeAllPanels();
		var hButton = $('.hamburger-button');
		hButton.removeClass('hamburger-button__active');
	});

	$('.colorselector').colorselector();
	$('.select-custom-bootstrap').selectpicker();

	$('.input-date').inputmask("99.99.9999");
	$('.mask-activate-code').inputmask("999-999");

	/*--------------- Text formatter START ---------------*/
	var textFormatBody = $('.text-format__wrap .text-format__body textarea');
	var textFormatFontFace = $('.text-format__wrap .font-face select');
	var textFormatFontSize = $('.text-format__wrap .font-size select');
	var textFormatColor = $('.text-format__wrap .color select');

	// Change font-family
	textFormatFontFace.on('change', function () {
		dataFont = $(this).find('option:selected').data('font');
		textFormatBody.css('font-family', '' + dataFont + '');
	});

	// Change font-size
	textFormatFontSize.on('change', function () {
		dataSize = $(this).val();
		textFormatBody.css('font-size', '' + dataSize + 'px');
	});

	// Change font-weight
	$('[data-font-bold]').on('click', function () {
		$(this).toggleClass('font-weight__active');
		var val = $(this).data('font-bold');
		if ($(this).hasClass('font-weight__active')) {
			textFormatBody.css('font-weight', val);
		}
		else {
			textFormatBody.css('font-weight', '400');
		}
	});

	// Change font-style
	$('[data-font-italic]').on('click', function () {
		$(this).toggleClass('font-style__active');
		var val = $(this).data('font-italic');
		if ($(this).hasClass('font-style__active')) {
			textFormatBody.css('font-style', val);
		}
		else {
			textFormatBody.css('font-style', 'normal');
		}
	});

	// Change text-decoration
	$('[data-font-decoration]').on('click', function () {
		$(this).toggleClass('font-decoration__active');
		var val = $(this).data('font-decoration');
		if ($(this).hasClass('font-decoration__active')) {
			textFormatBody.css('text-decoration', val);
		}
		else {
			textFormatBody.css('text-decoration', 'none');
		}
	});

	// Change text-align
	$('[data-font-align]').on('click', function () {
		$('[data-font-align]').removeClass('font-align__active');
		$(this).toggleClass('font-align__active');
		val = $(this).data('font-align');
		textFormatBody.css('text-align', val);
	});

	// Change color
	textFormatColor.on('change', function () {
		dataColor = $(this).find('option:selected').data('color');
		console.log(dataColor);
		textFormatBody.css('color', dataColor);
	});
	/*--------------- Text formatter END ---------------*/

	$('.mfp-custom-effect').magnificPopup({
		type: 'inline',
		removalDelay: 500,
		callbacks: {
			beforeOpen: function () {
				// just a hack that adds mfp-anim class to markup 
				this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
				this.st.mainClass = this.st.el.attr('data-effect');
			}
		},
	});

	$('.tab-button__wrap .tab-button__item').on('click', function(e) {
		e.preventDefault();
		var th = $(this);
		var all = $('.tab-button__wrap .tab-button__item');
		var tabWrap = $('.custom-tab__wrap');
		var attrHref = th.attr('href');

		all.removeClass('active');
		th.addClass('active');

		tabWrap.hide();
		$(attrHref).fadeIn('fast');
	});


	// Custom ScrollBar
	$('.custom-scrollbar').customScrollbar({
		skin: "default-skin", 
		hScroll: false,
		updateOnWindowResize: true,
		preventDefaultScroll: true,
		animationSpeed: 500,
	});

	/* ############## Clients inner tab START ############## */
	$('.clients-tab__wrap .clients-tab__button li').on('click', function(e) {
		$(".custom-scrollbar").customScrollbar()
		e.preventDefault();
		var th = $(this);
		var element = $('.clients-tab__wrap .clients-tab__button li');
		element.removeClass('tab-button__active');
		th.addClass('tab-button__active');
	});

	$('.clients-tab__wrap .clients-tab__button a').on('click', function() {
		var attrHref = $(this).attr('href');
		var allContent = $('.clients-tab__content');
		allContent.hide();
		$(attrHref).fadeIn('fast');
	});

	$('.dropdown-custom-script .dropdown-menu .dropdown-item').on('click', function(e) {
		e.preventDefault();
		var optionVal = $(this).text();
		$('.dropdown-custom-script .dropdown-menu .dropdown-item').removeClass('bg-blue');
		$(this).addClass('bg-blue');
		$(this).parents('.dropdown-custom-script').find('#dropdownMenuLink').text(optionVal);
	});
	/* ############## Clients inner tab END ############## */


	/* ############## Verificaton slider START ############## */
	$('.fotorama').fotorama({
		width: 800,
		height: 500,
	});

	$('.slider__item .download__image').each(function() {
		var th = $(this);
		var imagePath = th.parent().find('img').attr('src').toString();
		th.attr('download', imagePath);
		th.attr('href', imagePath);

		console.log(imagePath);
	});
	/* ############## Verificaton slider END ############## */

	/* ############## Marketing plan packages edit START ############## */
	$('.increment__custom').TouchSpin({
		verticalbuttons: true,
		verticalupclass: 'mdi mdi-menu-up increment-button__wrap',
    verticaldownclass: 'mdi mdi-menu-down increment-button__wrap',
	});

	$('.discount-button__wrap .discount-button__item').on('click', function(e) {
		e.preventDefault();
		$('.discount-button__wrap .discount-button__item').removeClass('active');
		$(this).addClass('active');
	});
	/* ############## Marketing plan packages edit END ############## */

	/* ############## Finance withdrawal START ############## */
	$('.withdraw-tab-button__wrap .radio__item input').on('change', function() {
		var tabDataContent = $('[data-withdraw-content]');
		var tabButton = $('.withdraw-tab-button__wrap .radio__item');
		var tabDataButton = $(this).data('withdraw-button');

		tabButton.removeClass('active');
		$(this).parent('.radio__item').addClass('active');

		tabDataContent.each(function() {
			var thisDataContent = $(this).data('withdraw-content');
			if (thisDataContent == tabDataButton) {
				$(this).fadeIn('fast');
			}
			else {
				$(this).hide();
			}
		});
	});
	/* ############## Finance withdrawal END ############## */

	// ----------------- Copy link START ----------------- //
	new ClipboardJS('.clipboard-btn');
	// ----------------- Copy link END ----------------- //



	/* ############## Settings menu editing START ############## */

	// ----------------- Menu sortable START ----------------- //
	$(".menu-editing-list__ol").sortable({
		group: 'no-drop',
		handle: '.menu-editing-sortable-button',
		onDragStart: function ($item, container, _super) {
    // Duplicate items of the no drop area
    if(!container.options.drop)
    	$item.clone().insertAfter($item);
    _super($item, container);
  	}
  });
	// ----------------- Menu sortable END ----------------- //

	var menuEditingPencil = $('.menu-editing-list__item .menu-editing-pencil');

	/*----------- Редактирование input-custom -----------*/
		$('body').on('click', '.menu-editing-list__item .menu-editing-pencil', function() {
		var thsVal = $(this).parents('.menu-editing-list__item').text().trim(),
				thListDataId = $(this).parents('.menu-editing-list__item').data('id'),
				menuEditingRight = $('.menu-editing__right .input___wrap'),
				menuEditingInput = $('.menu-editing__right .input___wrap .input-custom');


		menuEditingInput.remove();
		menuEditingRight.append(
			'<div class="input-custom" data-custom-id="'+thListDataId+'">\n'
			+'<input type="text" class="pd-10" value="'+thsVal+'">\n'
				+'<div class="save-delete">\n'
					+'<span class="mdi mdi-content-save menu-save"></span>\n'
					+'<span class="mdi mdi-delete menu-delete"></span>\n'
				+'</div>\n'
			+'</div>'
			)

		/*----------- Удаление input-custom -----------*/
		$('body').on('click', '.menu-editing__right .menu-delete', function() {
			var thParent = $(this).parents('.input-custom');

			$('.menu-editing-list__item').each(function() {
				var thisDataId = $(this).data('id');
				var inputDataId = $('.input-custom').data('custom-id');
				var inputVal = $('.input-custom').find('input').val();

				if (thisDataId == inputDataId) {
					$(this).slideUp(200);
					var th = $(this);

					setTimeout(function() {
						th.remove();
					}, 200);
					
				}
			});
			thParent.remove();
		});	

		/*----------- Сохранение input-custom START -----------*/
		$('body').on('click', '.menu-editing__right .menu-save', function() {
			$('.menu-editing-list__item').each(function() {
				var thisDataId = $(this).data('id');
				var inputDataId = $('.input-custom').data('custom-id');
				var inputVal = $('.input-custom').find('input').val();

				if (thisDataId == inputDataId) {
					$(this).find('.left p').text(inputVal);
				}
			});

			/*----------- Checkmark animation START -----------*/
			var checkMark = $('.checkmark__wrap');
			checkMark.addClass('checkmark__wrap_active');

			setTimeout(function() {
				checkMark.find('.checkmark__item').addClass('checkmark__item_active');
			}, 100);

			setTimeout(function() {
				checkMark.removeClass('checkmark__wrap_active');
				checkMark.find('.checkmark__item').removeClass('checkmark__item_active');
			}, 1000);

			var thParent = $(this).parents('.input-custom');
			thParent.remove();
			/*----------- Checkmark animation END -----------*/
		});
		/*----------- Сохранение input-custom END -----------*/
	});


	/*----------- Добавление нового меню -----------*/
	$('body').on('click', '#add-new-menu', function(e) {
		e.preventDefault();
		var menuListName = $('#menu-paragraph-name').val();
		var menuOl = $('.menu-editing-list__ol');
		var menuListLength = menuOl.find('.menu-editing-list__item').length;
		var menuListPlus = menuListLength + 1;

		$(menuOl).prepend(
			'<li class="menu-editing-list__item" data-id="'+menuListPlus+'">\n'
					+'<div class="left">\n'
						+'<p>'+menuListName+'</p>\n'
					+'</div>\n'

					+'<div class="right">\n'
						+'<span class="mdi mdi-menu menu-editing-sortable-button"></span>\n'
						+'<span class="mdi mdi-pencil menu-editing-pencil"></span>\n'
					+'</div>\n'
				+'</li>'
		);
	});
	/* ############## Settings menu editing END ############## */


	/* ############## FAQ START ############## */

	/*----------- Switch START -----------*/
	$('body').on('click', '.switch__wrap', function() {
			$(this).toggleClass('switch__wrap_active');
			$(this).find('.switch__overlay').toggleClass('switch__overlay_active');
	});
	/*----------- Switch END -----------*/

	
	$("#faq__wrap").sortable({
		group: 'no-drop',
		handle: '.faq-sortable-button',
		onDragStart: function ($item, container, _super) {
    // Duplicate items of the no drop area
    if(!container.options.drop)
    	$item.clone().insertAfter($item);
    _super($item, container);
  	}
  });

	/*----------- FAQ edit START -----------*/
  $('body').on('click', '.faq-pencil', function() {
  	var faqList = $(this).parents('.faq__item'),
  			faqBody = $(this).parents('.faq__item').find('.faq__body'),
  			faqBodyText = $(this).parents('.faq__item').find('.faq__body_text').text().trim(),
  			faqHeaderText = $(this).parents('.faq__item').find('.faq__header .left').text().trim();

  	$('.faq__body').removeClass("show");

  	faqBody.addClass('show');
  	$('.faq__edit').remove();

  	faqList.append(
  		'<div class="faq__edit">\n'
			+'<div class="input-custom faq__edit_header">\n'
				+'<input type="text" class="pd-10" value="'+faqHeaderText+'">\n'
				+'<div class="faq__edit-top__button">\n'
					+'<a href="#" class="accent-button faq-edit-save">Сохранить</a>\n'
					+'<a href="#" class="cancel">Отмена</a>\n'
				+'</div>\n'
			+'</div>\n'

			+'<div class="input-custom faq__edit_body">\n'
				+'<textarea class="pd-10">"'+faqBodyText+'"</textarea>\n'
			+'</div>\n'
		+'</div>'
  	);

  	var faqEditSave = $('.faq-edit-save'),
  			faqEditCancel = $(this).parents('.faq__item').find('.faq__edit .cancel'),
  			faqEdit = $(this).parents('.faq__item').find('.faq__edit'),
  			faqHeaderTextChange = $(this).parents('.faq__item').find('.faq__header .left'),
  			faqBodyTextChange = $(this).parents('.faq__item').find('.faq__body_text');

  	faqEditCancel.on('click', function(e) {
  		e.preventDefault();
  		faqEdit.remove();
  	})

  	/*----------- FAQ save START -----------*/
  	faqEditSave.on('click', function (e) {
  		var faqEditHeaderText = $(this).parents('.input-custom').find('input').val();
  		var faqEditBodyText = $(this).parents('.faq__edit').find('textarea').val();

  		e.preventDefault();
  		faqEdit.remove();
  		faqHeaderTextChange.text(faqEditHeaderText);
  		faqBodyTextChange.text(faqEditBodyText);

  		/*----------- Checkmark animation START -----------*/
			var checkMark = $('.checkmark__wrap');
			checkMark.addClass('checkmark__wrap_active');

			setTimeout(function() {
				checkMark.find('.checkmark__item').addClass('checkmark__item_active');
			}, 100);

			setTimeout(function() {
				checkMark.removeClass('checkmark__wrap_active');
				checkMark.find('.checkmark__item').removeClass('checkmark__item_active');
			}, 1000);

			var thParent = $(this).parents('.input-custom');
			thParent.remove();
			/*----------- Checkmark animation END -----------*/
  	});
  	/*----------- FAQ save END -----------*/
  });
  /*----------- FAQ edit END -----------*/

  /*----------- FAQ delete START -----------*/
  $('body').on('click', '.faq-delete', function() {
  	var faqItem = $(this).parents('.faq__item');
  	faqItem.slideUp('fast');

  	setTimeout(function() {
  		faqItem.remove();
  	}, 300);
  })
  /*----------- FAQ delete END -----------*/

  /*----------- FAQ add START -----------*/
  $('body').on('click', '.s-settings-faq .add-faq-button', function(e) {
  	e.preventDefault();
  	
  	var question = $(this).parent('.faq-form__wrap').find('#faq-title').val(),
		  	answer = $(this).parent('.faq-form__wrap').find('#answer-title').val(),
		  	faqListWrap = $('#faq__wrap'),
		  	faqListItemLength = $('#faq__wrap').find('.faq__item').length;
		  	faqListItemLength++;

  	faqListWrap.prepend(
  		'<li class="faq__item">\n'
			+'<div class="faq__header">\n'
				+'<div class="left">'+question+'</div>\n'

				+'<div class="right">\n'
					+'<div class="switch__wrap">\n'
						+'<div class="switch__item"></div>\n'
						+'<div class="switch__overlay"></div>\n'
					+'</div>\n'
					+'<span class="mdi mdi-menu faq-sortable-button"></span>\n'
					+'<span class="mdi mdi-pencil faq-pencil"></span>\n'
					+'<span class="mdi mdi-delete faq-delete"></span>\n'
					+'<span class="show-content-button" data-toggle="collapse" data-target="#collapse-'+faqListItemLength+'" aria-expanded="true">\n'
						+'<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n'
						+'viewBox="0 0 185.344 185.344" style="enable-background:new 0 0 185.344 185.344;" xml:space="preserve">\n'
						+'<g><g><path style="fill:#010002;" d="M92.672,144.373c-2.752,0-5.493-1.044-7.593-3.138L3.145,59.301c-4.194-4.199-4.194-10.992,0-15.18\n'
								+'c4.194-4.199,10.987-4.199,15.18,0l74.347,74.341l74.347-74.341c4.194-4.199,10.987-4.199,15.18,0\n'
								+'c4.194,4.194,4.194,10.981,0,15.18l-81.939,81.934C98.166,143.329,95.419,144.373,92.672,144.373z"/>\n'
							+'</g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>\n'
						+'</span>\n'
					+'</div>\n'
				+'</div>\n'

				+'<div class="faq__body collapse" id="collapse-'+faqListItemLength+'" data-parent="#faq__wrap">\n'
					+'<div class="faq__body_content">\n'
						+'<p class="faq__body_text">'+answer+'</p>\n'
					+'</div>\n'
				+'</div>\n'
			+'</li>'
  	);
  });
  /*----------- FAQ add END -----------*/

	/* ############## FAQ END ############## */

	$('body').on('click', '.partner-tree__delete', function() {
		var thParent = $(this).parents('.partner-tree');
		thParent.slideUp('fast');
		setTimeout(function() {
			thParent.remove();
		}, 200);
	});

	$('body').on('click', '.shopping__delete', function(e) {
		e.preventDefault();
		var thParent = $(this).parents('.shopping__tr');
		thParent.remove();
	});


	/* ############## Profile START ############## */

	/*----------- Profile tab START -----------*/
	$('body').on('click', '.profile__tab-btn li', function(e) {
		var attrHref = $(this).find('a').attr('href');
		var tabContent = $('.profile__tab');

		e.preventDefault();
		$('.profile__tab-btn li').removeClass('active');
		$(this).addClass('active');

		tabContent.hide();
		$(attrHref).fadeIn('fast');
	});
	/*----------- Profile tab END -----------*/

	/*----------- Profile password visible START -----------*/
	$('body').on('click', '.profile-password .pass-visible', function() {
		var inputPassword = $(this).parent('.profile-password').find('input');

		if (inputPassword.attr('type') === 'password') {
			inputPassword.attr('type', 'text');
		}
		else {
			inputPassword.attr('type', 'password');
		}
	});
	/*----------- Profile password visible END -----------*/
	var lb = true;
	var rb = true;

	/*----------- Left START -----------*/
	$('body').on('click', '.profile-left-change-password', function(e) {
		e.preventDefault();
		var thParent = $(this).parent('.input-custom');
		
		if (lb == true) {
			thParent.append(
			'<div class="input-wrap input-wrap__change-password change-password-left">\n'
				+'<div class="input-custom">\n'
					+'<label for="left-new-password">Новый пароль</label>\n'
					+'<div class="input-flex profile-password">\n'
						+'<input type="password" class="pd-10" id="left-new-password">\n'
						+'<span class="mdi mdi-eye pass-visible"></span>\n'
					+'</div>\n'
				+'</div>'

				+'<div class="input-custom">\n'
					+'<label for="left-cover-password">Повторите пароль</label>\n'
					+'<div class="input-flex profile-password">\n'
						+'<input type="password" class="pd-10" id="left-cover-password">\n'
						+'<span class="mdi mdi-eye pass-visible"></span>\n'
					+'</div>\n'
				+'</div>'
			+'</div>'
		);
		lb = false;
	}
	else {
		var leftChangePassword = $('.change-password-left');
		leftChangePassword.remove();
		lb = true;
	}
	});
	/*----------- Left END -----------*/


	/*----------- Right START -----------*/
	$('body').on('click', '.profile-right-change-password', function (e) {
		e.preventDefault();
		var thParent = $(this).parent('.input-custom');

		if (rb == true) {
			thParent.append(
			'<div class="input-wrap input-wrap__change-password change-password-right">\n'
				+'<div class="input-custom">\n'
					+'<label for="right-new-password">Новый пароль</label>\n'
					+'<div class="input-flex profile-password">\n'
						+'<input type="password" class="pd-10" id="right-new-password">\n'
						+'<span class="mdi mdi-eye pass-visible"></span>\n'
					+'</div>\n'
				+'</div>'

				+'<div class="input-custom">\n'
					+'<label for="right-cover-password">Повторите пароль</label>\n'
					+'<div class="input-flex profile-password">\n'
						+'<input type="password" class="pd-10" id="right-cover-password">\n'
						+'<span class="mdi mdi-eye pass-visible"></span>\n'
					+'</div>\n'
				+'</div>'
			+'</div>'
		);
		rb = false;
	}
	else {
		var leftChangePassword = $('.change-password-right');
		leftChangePassword.remove();
		rb = true;
	}
	})
	/*----------- Right END -----------*/

	/* ############## Profile END ############## */


	/* ############## Verification START ############## */
	$('[data-verification-btn]').on('click', function(e) {
		e.preventDefault();

		var dataBtn = $('[data-verification-btn]');
		var dataCat = $('[data-verification-tr]');

		var thDataBtn = $(this).data('verification-btn');

		dataBtn.removeClass('active');
		$(this).addClass('active');

		if (thDataBtn == 'all') {
			dataCat.show();
		}
		else {
			dataCat.each(function() {
			var thDataCat = $(this).data('verification-tr');

			if (thDataCat != thDataBtn) {
				$(this).hide();
			}
			else {
				$(this).show();
			}
		});
		}

		
	});
	/* ############## Verification END ############## */

})