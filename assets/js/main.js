$(document).ready(function () {

   
   let case_slider = new Swiper(".cases", {
      spaceBetween: 30,
      grabCursor: true,
      loop: false,
      navigation: {
         prevEl: ".s-cases .slider-btn--prev",
         nextEl: ".s-cases .slider-btn--next",
      },

      pagination: {
         el: ".s-cases .swiper-count",
         type: "fraction",
       },

      breakpoints: {
         320: {
           slidesPerView: 1,
           spaceBetween: 15
         },
         768: {
           slidesPerView: 2,
           spaceBetween: 30
         }
       }
   });

   //Табы 
   $('.ecosystem-head__item').click(function () {
      $('.ecosystem-head__item').removeClass('active');
      $(this).addClass('active');
      var index = $(this).index();

      $('.ecosystem-body__item').removeClass('active')
      $('.ecosystem-body__item').eq(index).addClass('active');
   });


   let step_slider = new Swiper(".steps", {
      spaceBetween: 20,
      slidesPerView: 3,
      grabCursor: true,
      loop: false,
      navigation: {
         prevEl: ".steps-btns .slider-btn--prev",
         nextEl: ".steps-btns .slider-btn--next",
      },

      pagination: {
         el: ".steps-btns .swiper-count",
         type: "fraction",
       },

      breakpoints: {
         320: {
           slidesPerView: 1,
           spaceBetween: 15
         },
         580: {
            slidesPerView: 2,
            spaceBetween: 20
         },
         993: {
           slidesPerView: 3,
           spaceBetween: 20
         }
       }
   });

   $('.faq__item').click(function () {
      $(this).toggleClass('active');
      $(this).find('.faq-body').slideToggle();
   });

   //header 
   var menuBtn = $('.mobile-menu-btn');
   var mobileMenu = $('.mobile-menu');
   var closeMenu = $('.mobile-menu__close');

   menuBtn.on('click', showMenu);
   closeMenu.on('click', hideMenu);
   $(document).on('click', '.overlay', function() {
      hideMenu();
   });

   function showMenu() {
      mobileMenu.addClass('show');
      showOverlay();
   };

   function hideMenu() {
      mobileMenu.removeClass('show');
      hideOverlay();
   };

   function showOverlay() {
      $('body').prepend('<div class="overlay"></div>');
      $('.overlay').fadeIn();
      $('body').css('overflow', 'hidden');
   };

   function hideOverlay() {
      $('.overlay').fadeOut(500, function (){
         $('.overlay').remove();
         $('body').css('overflow', 'auto');
      });
   };













    //формы
   $(".validate").each(function () {
      $(this).validate({
         rules: {
            name: "required",
            tel: "required",
            email: {
               required: true,
               email: true
            },
            message: "required",
         },
         errorPlacement: function (error, element) {
            error.insertAfter(element);
         },
         messages: {
            name: "Ваше имя?",
            tel: "Ваш телефон?",
            email: {
               required: "Ваш email?",
               email: "Пожалуйста, введите привильный адрес электронной почты"
            },
            message: "Ваше сообщение?",
         },
         highlight: function (element) {
            $(element).text('').addClass('error')
         },

         success: function (element) {
            element.text('').addClass('valid')
         }
      });
   });

   // Маска телефона
   $(function ($) {
      $("input[type='tel']").mask("+7 (999) 999-99-99");
   });

   $('.checkbox-privat__input').change(function () {
      var button = $(this).closest('form').find('button');
    
      if ($(this).prop('checked')) {
        button.attr('disabled', false);
      } else {
        button.attr('disabled', true);
      }
   });

   //Отправка формы
   $("form").each(function () {
      $(this).submit(function () {
         if ($(this).valid()) {
            var form_data = new FormData(this);
            $.ajax({
               url: "scripts/phpmailer/send_mail.php",
               type: 'POST',
               data: form_data,
               cache: false,
               contentType: false,
               processData: false,
               success: function () {
                  sendForm();
                  $('form').trigger("reset");
                  $('form input').removeClass("valid");
               },
               error: function () {
                  console.log('error');
                  
               }
            });
         } else {}
         return false;
      });
   });

   // sendForm();
   function sendForm() {
      $.magnificPopup.open({
         items: {
            src: '#cookie-popup'
         },
         mainClass: 'my-mfp-zoom-in',
         removalDelay: 300,
      }, 0);
   };

   //Popup   
   $('.btn-popup').magnificPopup({
      type: 'inline',
      fixedContentPos: true,
      fixedBgPos: true,
      overflowY: 'auto',
      closeBtnInside: true,
      preloader: false,
      midClick: true,
      removalDelay: 300,
      mainClass: 'my-mfp-zoom-in',

      callbacks: {
         beforeOpen: function() {
            var pl = scrollbarWidth();
            $('.header').css('padding-right', pl);
         },
         close: function() {
            $('.header').css('padding-right', 0);
         }
      }
   });

   function scrollbarWidth() {
      var documentWidth = parseInt(document.documentElement.clientWidth);
      var windowsWidth = parseInt(window.innerWidth);
      var scrollbarWidth = windowsWidth - documentWidth;
      return scrollbarWidth;
   };

   //Скролл по клику
   $(".scroll-link").click(function () {
      event.preventDefault();
      hideMenu();
      var minus = 60;
      var id = $(this).attr('href'),
         top = $(id).offset().top - minus;
      $('body,html').animate({ scrollTop: top }, 1500);
   });


   
});