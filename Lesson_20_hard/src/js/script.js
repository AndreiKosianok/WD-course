$(document).ready(function(){

	$('.header-contacts__button').on('click', function(){
		$('.overlay').show()
	});

	$('.popup-close').on('click', function(){
		$('.overlay').hide();
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
					slidesToShow: 1
				}
			},
			{
			breakpoint: 576,
				settings: {
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
			breakpoint: 576,
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
/*
	$('.main-img-slider-item').slick({
		autoplay: true,
		arrows: false,
		slidesToShow: 1,
		slidesToScroll: 1
	})*/
	theRotator(3000);
	theBgRotator(3000, [
		"./img/main/main_background_1.jpg",
		"./img/main/main_background_2.jpg"
	]);
});
	function theRotator(interval) {
		$('.main img').css({'display':'none'});
		$('.main img:first').css({'display':'block'});
		setInterval('rotate()', interval);
	};

	function rotate() {
		var current = $('.main-img img.show') ? $('.main-img img.show'):$('.main-img img:first');
		var next = ((current.next().length) ? ((current.next().hasClass('show')) ? $('.main-img img:first') :current.next()) : $('.main-img img:first'));

		next.css({'display':'none'})
		.addClass('show')
		.fadeIn();

		current.css({'display':'none'})
		.removeClass('show');
	};

	function theBgRotator(interval, slides) {
	    var i = 0;
	    var handle = setInterval(function () {

	        $('.main').css("background-image", "url('" + slides[i] + "')");

	        i++;

	        if (i >= slides.length) {
	            i = 0;
	        }
	    }, interval);

	}