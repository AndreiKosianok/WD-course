$(document).ready(function(){

	let media991 = window.matchMedia('(min-width: 320px) and (max-width: 991px)'),
		menu = $(".menu"),
		header = $('.header'),
		menuButton = $('.header-start__menu');

	$(window).scroll(function () {
		if ($(this).scrollTop() > 10) {
			menu.addClass("f-nav");
		} else {
			menu.removeClass("f-nav");
		}
	});

	$(window).scroll(function () {
		if ($(this).scrollTop() > 10 && media991.matches) {
			header.addClass("f-nav");
		} else {
			header.removeClass("f-nav");
		}
	});

	$(window).scroll(function () {
		if ($(this).scrollTop() > 10 && media991.matches) {
			header.addClass("f-nav");
		} else {
			header.removeClass("f-nav");
		}
	});

	menuButton.on('click', function(){
		if ($(".menu:visible")[0] && media991.matches) {
			menu.fadeOut()
			} else {
				menu.fadeIn()
			}
	});

	$(document).mouseup(function (e){
			if (!menu.is(e.target) || menuButton.is(e.target) && media991.matches) {
				menu.fadeOut()
				//.css({'display':'none'});
			}
	});

	$('.header-contacts__button').on('click', function(){
		$('.overlay').show()
	});

	$('.contacts-btn').on('click', function(){
		$('.overlay').show()
	});

	$('.products-btn').on('click', function(){
		$('.overlay').show()
	});

	$('.popup-close').on('click', function(){
		$('.overlay').hide();
	})

	$('.done-form-close').on('click', function(){
		$('.done').hide();
	})

	jQuery(function($){
			   $(".popup-form__input").mask("+7(999) 999-9999");
			   $(".form__input").mask("+7(999) 999-9999");
			});

	new WOW().init();

	$('.production-slider_top').slick({
		arrows: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		asNavFor: '.production-slider_bottom',
		responsive: [
			{
			breakpoint: 768,
				settings: {
					slidesToShow: 1,
					arrows: true,
					asNavFor: null,
					adaptiveHeight: true,
					prevArrow: '<div class="slider-arrow slider-arrow_left"></div> ',
					nextArrow: '<div class="slider-arrow slider-arrow_right"></div> ',
					focusOnSelect: true
				}
			}]
	});

	$('.production-slider_bottom').slick({
		arrows: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		prevArrow: '<div class="slider-arrow slider-arrow_production slider-arrow_left"></div>',
		nextArrow: '<div class="slider-arrow slider-arrow_production slider-arrow_right"></div>',
		asNavFor: '.production-slider_top',
		focusOnSelect: true,
		responsive: [
			{
			breakpoint: 768,
				settings: {
					arrows: true,
					slidesToShow: 1,
					asNavFor: null,
				}
			}]
	});

	$('.comments-slider').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		prevArrow: '<div class="slider-arrow slider-arrow_comments slider-arrow_comments_left"></div>',
		nextArrow: '<div class="slider-arrow slider-arrow_comments slider-arrow_comments_right"></div>',
		responsive: [
			{
			breakpoint: 992,
				settings: {
					arrows: true,
					slidesToShow: 2
				}
			},
			{
			breakpoint: 576,
				settings: {
					arrows: true,
					slidesToShow: 1,
			 		prevArrow: '<div class="slider-arrow slider-arrow_left"></div> ',
					nextArrow: '<div class="slider-arrow slider-arrow_right"></div> ',
				}
			}]
	});

	ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [54.752683, 55.998784],
            zoom: 16
        }, {
            searchControlProvider: 'yandex#search'
        }),

        // Создаём макет содержимого.
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),

        myPlacemark = new ymaps.Placemark([54.752656, 56.002053], {
            hintContent: 'Тут находится офис',
            balloonContent: 'Это красивая метка'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'img/contacts/map.png',
            // Размеры метки.
            iconImageSize: [40, 42],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-20, -42]
        });
    myMap.behaviors.disable('scrollZoom');
    myMap.geoObjects
        .add(myPlacemark);
	});

	$('form').submit(function(event) {
		event.preventDefault();
		let form = $(this),
			error = false;
		form.find('input, textarea').each( function(){
			if ($(this).val() == '') {
				alert('Заполните поле "'+$(this).attr('placeholder')+'"!');
				error = true;
			}
		if (!error) {
			$.ajax({
				type: "POST",
				url: "mailer/smart.php",
				data: $(this).serialize()
			}).done(function() {
				$(this).css({"display":"none"});
				$('.done').css({"display":"block"})
			});
			return false;
		}
	});

	/*$('form').submit(function(event) {
		event.preventDefault();
		$.ajax({
			type: "POST",
			url: "mailer/smart.php",
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");
			alert("Сообщение успешно отправлено");
			$("form").trigger("reset");
		});
		return false;*/
	});
});


