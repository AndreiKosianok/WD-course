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
});

