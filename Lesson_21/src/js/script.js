$(document).ready(function(){
	var nav = $('.menu');

	$(window).scroll(function () {
		if ($(this).scrollTop() > 10) {
			nav.addClass("f-nav");
		} else {
			nav.removeClass("f-nav");
		}
	});

	$('.header-contacts__button').on('click', function(){
		$('.overlay').show()
	});

	$('.popup-close').on('click', function(){
		$('.overlay').hide();
	})

	let media991 = window.matchMedia('all and (max-width: 991px)'),
		menu = $(".menu"),
		menuButton = $('.header-start__menu');

	menuButton.on('click', function(){
		if(media991.matches && $(".menu:visible")[0]){
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
});

