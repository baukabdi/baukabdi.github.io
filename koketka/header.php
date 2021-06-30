<!DOCTYPE html>
<html lang="ru">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">

	<title>Koketka</title>

	<!--- Сжатые и объединенные библиотеки CSS / Включить после сборки
 	<link rel="stylesheet" href="assets/css/libs.min.css"> -->

	<!--- Библиотеки CSS / Удалить после сборки -->
 	<link rel="stylesheet" type="text/css" href="assets/css/bootstrap.min.css">
 	<link rel="stylesheet" type="text/css" href="assets/css/normalize.css">
 	<link rel="stylesheet" type="text/css" href="assets/css/bootstrap-select.min.css">
 	<link rel="stylesheet" type="text/css" href="assets/css/font-awesome.min.css">
 	<link rel="stylesheet" type="text/css" href="assets/css/slick.css">
 	<link rel="stylesheet" type="text/css" href="assets/css/jquery.fancybox.min.css">
 	<link rel="stylesheet" type="text/css" href="assets/css/fotorama.css">
 	<link rel="stylesheet" type="text/css" href="assets/css/bootstrap-multiselect.css">
 	<link rel="stylesheet" type="text/css" href="assets/css/asRange.min.css">
	<link rel="stylesheet" type="text/css" href="assets/css/jquery.range.css">

	<!--- Кастомные стили / Оставить -->
 	<link rel="stylesheet" type="text/css" href="assets/css/main.css">
 </head>

 <body>

 		<!-- Callback -->
 		<form id="callback_form" class="form_custom" style="display: none;">
 			<div class="form_item">
 				<h4>Свържете се с нас</h4>

 				<label for="your-name">Вашето име</label>
 				<input type="text" id="your-name">

 				<label for="message">Сообщение</label>
 				<textarea name="message" id="message" cols="30" rows="8"></textarea>

 				<button>Отправить</button>
 			</div>


 			<div class="popup_close">
 				<svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
 					<line x1="18" y1="3.53553" x2="4.53553" y2="17" stroke="white" stroke-width="5" stroke-linecap="round"/>
 					<line x1="17.4645" y1="17" x2="4" y2="3.53554" stroke="white" stroke-width="5" stroke-linecap="round"/>
 				</svg>
 			</div>
 		</form>

		<!-- Sign In -->
 		<form id="sign_in" class="form_custom form_sign_in" style="display: none;">
 			<div class="form_item">
 				<h4>Войти</h4>

 				<label class="required" for="login">Логин</label>
 				<input type="text" id="login">

 				<label class="required" for="password">Пароль</label>
 				<input type="text" id="password">

				<div class="checkbox_wrap">
					<div class="checkbox_custom">
						<input type="checkbox" id="remember_me">
						<label for="remember_me">Запомнить меня</label>
					</div>
					<div class="forgot_password">
						<a href="#0">Забыли пароль?</a>
					</div>
				</div>

 				<button>Войти</button>
 			</div>

 			<div class="popup_close">
 				<svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
 					<line x1="18" y1="3.53553" x2="4.53553" y2="17" stroke="white" stroke-width="5" stroke-linecap="round"/>
 					<line x1="17.4645" y1="17" x2="4" y2="3.53554" stroke="white" stroke-width="5" stroke-linecap="round"/>
 				</svg>
 			</div>
 		</form>


		<!-- Sign Up -->
 		<form id="sign_up" class="form_custom form_sign_up" style="display: none;">
 			<div class="form_item">
 				<h4>Регистрация</h4>

 				<label class="required" for="email">Ваш e-майл</label>
 				<input type="text" id="email">

 				<div class="checkbox_custom">
 					<input type="checkbox" id="privacy_politic">
 					<label for="privacy_politic">Вие прочетохте <a href="#">нашата политика</a> за лични данни.</label>
 				</div>

 				<button>Зарегистрироваться</button>
 			</div>


 			<div class="popup_close">
 				<svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
 					<line x1="18" y1="3.53553" x2="4.53553" y2="17" stroke="white" stroke-width="5" stroke-linecap="round"/>
 					<line x1="17.4645" y1="17" x2="4" y2="3.53554" stroke="white" stroke-width="5" stroke-linecap="round"/>
 				</svg>
 			</div>
 		</form>
	<!-- Popup END -->


	<!-- Header BEGIN -->
		<header class="header" id="header">
			<div class="container-fluid">

				<div class="chat">
					<a href="#" data-fancybox data-src="#callback_form">
						<img src="assets/images/chat.svg" alt="Koketka">
					</a>
				</div>


				<div class="header_row">
					<div class="header_logo">
						<a href="index.php"><img src="assets/images/logo.svg" alt="Koketka"></a>
					</div>

					<div class="header_search_wrap">
						<form>
							<div class="header_search">
								<input type="text" placeholder="Поиск">
								<button>
									<img src="assets/images/magnify.svg" alt="Koketka">
								</button>
							</div>
						</form>
					</div>


					<div class="header_right">
						<div class="header_contacts">
							<ul class="header_social">
								<li><a href="#0"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
								<li><a href="#0"><i class="fa fa-facebook-official" aria-hidden="true"></i></a></li>
							</ul>


							<div class="header_phone">
								<p class="p_title">Телефони</p>
								<div class="p_item">
									<a href="#0"><p>+359 889 315 972</p></a>
									<a href="#0"><p>+359 899 44 2363</p></a>
								</div>
							</div>
						</div>


						<div class="cart_button">
							<a href="shopping_cart.php">
								<img src="assets/images/shopping-cart.svg" alt="Koketka">
								<span>Корзина</span>
								<span class="cart_quantity">1</span>
							</a>
						</div>


						<div class="sign-up_in">
							<a href="#" data-fancybox data-src="#sign_up" class="sign_up">
								Зарегистрироваться
							</a>
							<a href="#0" data-src="#sign_in" data-fancybox class="sign_in button_custom">
								Войти
							</a>
						</div>


						<div class="times_button">
							<i class="fa fa-times" aria-hidden="true"></i>
						</div>
					</div>


					<div class="search_button">
						<i class="fa fa-search" aria-hidden="true"></i>
					</div>


					<div class="hamburger_button">
						<i class="fa fa-bars" aria-hidden="true"></i>
					</div>
				</div>


			</div>
		</header>
 	<!-- Header END -->
