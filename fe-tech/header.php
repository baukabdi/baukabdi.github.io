<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <title>Fe tech</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no, target-densityDpi=device-dpi" />
  <link rel="stylesheet" href="css/bootstrap.css">
  <link rel="stylesheet" href="css/owl.carousel.min.css">
  <link rel="stylesheet" href="css/owl.theme.default.min.css">
  <link rel="stylesheet" href="css/animate.css">
  <link rel="stylesheet" href="css/style.css">
  <script src="js/jquery-3.2.1.min.js"></script>
</head>

<body>
  
  <!-- HEADER -->
  <header class="header" id="header">

    <div class="header__wrap">

      <!-- HEADER TOP -->
      <div class="header-top">

        <div class="container">

          <div class="row aic">

            <div class="col-lg-2 col-md-12 col-sm-12">
              <div class="header-top__soc-icons">
                <a href="#"><img src="images/twitter.png" alt="twitter"></a>
                <a href="#"><img src="images/instagram.png" alt="instagram"></a>
                <a href="#"><img src="images/facebook.png" alt="facebook"></a>
                <a href="#"><img src="images/youtube.png" alt="youtube"></a>
                <a href="#"><img src="images/whatsapp.png" alt="whatsapp"></a>
              </div>
            </div>

            <div class="col-lg-2 col-md-12">
              <div class="header-top__loc">
               <select name="" id="">
                 <option value="">Алматы</option>
               </select>
             </div>
           </div>

           <div class="col-lg-2 col-md-12">
             <div class="header-top__phone">
               <img src="images/phone.png" alt="phone">
               <a href="#">8 (800) 250-55-00</a>
             </div>
           </div>

           <div class="col-lg-4 col-md-12">
             <div class="header-top__menu">
               <ul>
                 <li><a href="#">О нас</a></li>
                 <li><a href="#">Каталог</a></li>
                 <li><a href="#">Контакты</a></li>
                 <li><a href="#">Оплата и Доставка</a></li>
               </ul>
             </div>
           </div>

           <div class="col-lg-2 col-md-12">
             <div class="header-top__sign">
               <a href="#login__popup__block" class="open__popup">Вход</a>
               <span>/</span>
               <a href="#registration__popup__block" class="open__popup">Регистрация</a>
             </div>

             <!-- LOGIN POPUP -->
             <div class="all__popup__bg login__popup__bg" id="login__popup__block">              

               <form action="">

                 <div class="login__popup all__popup">

                   <a href="#" class="close__popup"><img src="images/close-popup.png" alt="close popup"></a>
                   <h1 class="all__popup__title">Авторизация</h1>

                   <div class="row">
                     <div class="col-12">
                       <input type="text" class="login__popup__item" placeholder="Логин*">
                       <input type="text" class="login__popup__item" placeholder="Пароль*">

                       <div class="login__bottom">
                        <div class="login__bottom__left">
                          <input type="checkbox" class="remember__me" id="remember__me">
                          <label for="remember__me" class="remember__me__label">Запомнить меня</label>
                        </div>

                        <div class="login__bottom__right">
                          <a href="#">Зарегистрироваться</a>
                        </div>
                        
                      </div>

                    </div>
                  </div>

                  <div class="row">
                    <div class="col-12">
                      <a href="#" class="popup__btn mt-4">Войти</a>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-12">
                      <a href="#" class="forgot__password">Забыли пароль?</a>
                    </div>
                  </div>
                </div>

              </form>

            </div>
            <!-- LOGIN POPUP END -->

            <!-- REGISTER POPUP -->
            <div class="all__popup__bg reg-dn register__popup__bg" id="registration__popup__block">

             <div class="registration__popup all__popup">

              <a href="#" class="close__popup"><img src="images/close-popup.png" alt="close popup"></a>
              <h1 class="all__popup__title">Регистрация</h1>

              <ul class="registration__tabs">
               <li class="registration__tabs__item register__active"><a href="#individual">Для физических лиц</a></li>
               <li class="registration__tabs__item"><a href="#legal">Для юридических лиц</a></li>
             </ul>

             <!-- Для физических лиц -->
             <form action="" class="for__individuals register-tab__form" id="individual">

              <div class="row">
                <div class="col-lg-6 col-md-6">
                  <input type="text" class="registration__input__item" placeholder="ФИО">
                </div>

                <div class="col-lg-6 col-md-6">
                  <input type="text" class="registration__input__item" placeholder="Электронная почта">
                </div>
              </div>

              <div class="row">
                <div class="col-lg-6 col-md-6">
                  <input type="text" class="registration__input__item" placeholder="Номер телефона">
                </div>

                <div class="col-lg-6 col-md-6">
                  <input type="text" class="registration__input__item" placeholder="Пароль">
                </div>
              </div>

              <div class="row">
                <div class="col-12">
                  <a href="#" class="popup__btn">Зарегистрироваться</a>
                </div>
              </div>

            </form>
            <!-- Для физических лиц end -->


            <!-- Для юридических лиц -->
            <form class="for__legal register-tab__form reg-dn" action="" id="legal">

             <div class="row">
              <div class="col-lg-6 col-md-6">
                <input type="text" class="registration__input__item" placeholder="Название организации">
              </div>

              <div class="col-lg-6 col-md-6">
                <input type="text" class="registration__input__item" placeholder="Электронная почта">
              </div>
            </div>

            <div class="row">
              <div class="col-lg-6 col-md-6">
                <input type="text" class="registration__input__item" placeholder="Номер телефона">
              </div>

              <div class="col-lg-6 col-md-6">
                <input type="text" class="registration__input__item" placeholder="Пароль">
              </div>
            </div>

            <h3 class="registration__requisites">Реквизиты</h3>

            <div class="row">
              <div class="col-lg-6 col-md-6">
                <input type="text" class="registration__input__item" placeholder="Название организации">
              </div>

              <div class="col-lg-6 col-md-6">
                <input type="text" class="registration__input__item" placeholder="БИН">
              </div>

              <div class="col-lg-6 col-md-6">
                <input type="text" class="registration__input__item" placeholder="Расчетный счет">
              </div>

              <div class="col-lg-6 col-md-6">
                <input type="text" class="registration__input__item" placeholder="БИК">
              </div>

              <div class="col-lg-6 col-md-6">
                <input type="text" class="registration__input__item" placeholder="Наименование банка">
              </div>

              <div class="col-lg-6 col-md-6">
                <input type="text" class="registration__input__item" placeholder="Юридический адрес">
              </div>
            </div>

            <div class="row">
              <div class="col-12">
                <a href="#" class="popup__btn">Зарегистрироваться</a>
              </div>
            </div>

          </form>
          <!-- Для юридических лиц end -->

        </div>


      </div>
      <!-- REGISTER POPUP END -->

    </div>
  </div>

  <div class="heart">
    <a href="#">
      <img src="images/heart.png" alt="Желания">
    </a>
  </div>

  <div class="product-cart">
    <img src="images/shopping-cart.png" alt="Корзина">
    <a href="#">Корзина пуста</a>
  </div>

</div>

<a href="#" class="close"><img src="images/close.png" alt="close"></a>

</div>

</div>
<!-- HEADER TOP END -->


<!-- HEADER BOTTOM -->
<div class="header-bottom">

  <div class="container">

    <div class="header-bottom">

      <div class="logo">
        <a href="#"><img src="images/logo.png" alt="FE-TECH"></a>
      </div>

      <div class="catalog__btn"> 
        <a href="#catalog__menu">
          <img src="images/burger.png" alt="Каталог">
          Каталог
        </a>
      </div>

      <div class="search">
        <input type="text" class="search__item">
        <a href="#" class="search__btn"><img src="images/loupe.png" alt="Поиск"></a>
      </div>

      <div class="heart">
        <a href="#">
          <img src="images/heart.png" alt="Желания">
        </a>
      </div>

      <div class="product-cart">
        <img src="images/shopping-cart.png" alt="Корзина">
        <a href="#">Корзина пуста</a>
      </div>

    </div>

    <a class="hamburger" href="#mobile-top__menu"><img src="images/burger.png" alt="">Меню</a>

  </div>

</div>

</div>
<!-- HEADER BOTTOM END -->

<div class="catalog__menu" id="catalog__menu">

  <div class="container">

    <div class="row">

      <div class="col-lg-3 col-md-3 col-sm-3">
        <ul class="catalog__menu__left">
          <li><a href="#">Звуковое оборудование</a></li>
          <li><a href="#">Сетевое оборудование</a></li>
          <li><a href="#">Led экраны</a></li>
          <li><a href="#">Madrix control</a></li>
          <li><a href="#">Караоке evolution</a></li>
        </ul>
      </div>

      <div class="col-lg-9 col-md-9 col-sm-9">
        <div class="catalog__menu__right">

          <div class="row">

            <div class="col-lg-4 col-md-4 col-sm-4">
              <div class="right__link">
                <h6 class="right__title">Акустические системы</h6>
                <a href="#">Amate Audio</a>
                <a href="#">LD Systems</a>
              </div>

              <div class="right__link">
                <h6 class="right__title">Сигнальные процессоры</h6>
                <a href="#">DSP</a>
              </div>

              <div class="right__link">
                <h6 class="right__title">Усилители</h6>
                <a href="#">Серия HD</a>
                <a href="#">Xamp3K</a>
                <a href="#">TPD</a>
              </div>
            </div>

            <div class="col-lg-4 col-md-4 col-sm-4">
              <div class="right__link">
                <h6 class="right__title">Микшерные пульты</h6>
                <a href="#">Серия D-LIVE</a>
                <a href="#">Серия SQ</a>
                <a href="#">Серия QU</a>
                <a href="#">Серия GLD</a>
                <a href="#">Серия ME</a>
                <a href="#">Серия XONE</a>
                <a href="#">Серия ZED</a>
                <a href="#">Серия GR</a>
                <a href="#">Серия MixWizard</a>
              </div>
            </div>

            <div class="col-lg-4 col-md-4 col-sm-4">
              <div class="right__link">
                <h6 class="right__title">Аксессуары</h6>
                <a href="#">Xcellence</a>
                <a href="#">Xcellence Disco</a>
                <a href="#">Joker</a>
                <a href="#">Key</a>
                <a href="#">Серия SQ</a>
                <a href="#">Серия QU</a>
                <a href="#">Серия STINGER G3</a>
                <a href="#">Серия DAVE 8</a>
                <a href="#">Серия GT</a>
                <a href="#">Серия STINGER G2</a>
              </div>
            </div>

            <div class="col-12">
              <div class="gray__block">
                <div class="red__block"></div>
              </div>
            </div>

          </div>

        </div>

      </div>

    </div>

  </div>

</div>

</header>
<!-- HEADER END -->