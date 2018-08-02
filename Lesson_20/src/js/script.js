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
		responsive: [{
			breakpoint: 768,
				settings: {
					slidesToShow: 1,
					arrows: true,
					prevArrow: '<div class="slider-arrow slider-arrow_production slider-arrow_left"></div>',
					nextArrow: '<div class="slider-arrow slider-arrow_production slider-arrow_right"></div>'
				}
		}]
	});

	$('.production-slider_bottom').slick({
		arrows: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		prevArrow: '<div class="slider-arrow slider-arrow_production slider-arrow_left"></div>',
		nextArrow: '<div class="slider-arrow slider-arrow_production slider-arrow_right"></div>',
		asNavFor: '.production-slider_top'
	});

	$('.feedback-slider').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		prevArrow: '<div class="slider-arrow slider-arrow_feedback slider-arrow_feedback_left"></div>',
		nextArrow: '<div class="slider-arrow slider-arrow_feedback slider-arrow_feedback_right"></div>',
		responsive: [{
			breakpoint: 992,
				settings: {
					slidesToShow: 2
				}
			},
			{
			breakpoint: 768,
				settings: {
					slidesToShow: 1
				}
			}]
	});
});

