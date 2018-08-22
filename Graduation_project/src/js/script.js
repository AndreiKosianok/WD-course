$(document).ready(function() {

    $('.main-slider').slick({
        infinite: true,
        arrows: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        prevArrow: '<div class="slider-main slider-main-left"></div> ',
        nextArrow: '<div class="slider-main slider-main-right"></div> ',
        responsive: [
            {
            breakpoint: 768,
            settings: {
                slidesToShow: 5
            }
            },
            {
            breakpoint: 600,
            settings: {
                slidesToShow: 4
            }
            },
            {
            breakpoint: 500,
            settings: {
                slidesToShow: 3
            }
            },
            {
            breakpoint: 450,
            settings: {
                slidesToShow: 2
            }
            },
            {
            breakpoint: 376,
            settings: {
                slidesToShow: 1
            }
            }
        ]
    });

    $('.feedback-slider').slick({
        infinite: true,
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<div class="slider-feedback slider-feedback-left"></div> ',
        nextArrow: '<div class="slider-feedback slider-feedback-right"></div> ',
    });

    $('.more').on('click', function(){
        let input = $('.counter');
        let value = input.val() || 0;
        value++;
        input.val(value).change();
    });

    $('.less').on('click', function(){
        let input = $('.counter');
        let value = input.val() || 0;
        value--;
        if(value<=0){
            input.val(0).change();    
        }else{
            input.val(value).change();
        }        
    });

    $('img[alt="flower-1"]').on('click', function() {
        $('.popup-flower__title').text('Роза');
        $('.popup-flower__descr').text('Розы - это цветы не бывало популярны. На данный момент существует несколько тысяч сортов роз . Розы это цветы, которые обладают волшебной красотой и притягательностью. Сложено много легенд о сказочной розе . Ее любят все, ну и даже преклоняются пред ней. Все народы мира чествуют это прекрасное растение.');
        $('.popup-top__img').html('<img src="img/popup/popup-flower-1.png" alt="popup-flower-1.png">');
        $('.popup-bottom__img').html('<img src="img/popup/popup-flower-bottom.png" alt="popup-flower-bottom">');
        $('.flower-overlay').show();
    });
    
    $('img[alt="flower-2"]').on('click', function() {
        $('.popup-flower__title').text('Петуния');
        $('.popup-flower__descr').text('Петунии – непременные обитательницы цветников, клумб, рабаток, бордюров, ваз, балконов и окон. Они дарят яркие душистые каскады цветков всех оттенков радуги с начала лета до морозов; подчас цветки полностью закрывают листву и побеги.');
        $('.popup-top__img').html('<img src="img/popup/popup-flower-2.png" alt="popup-flower-2.png">');
        $('.popup-bottom__img').html('<img src="img/popup/popup-flower-bottom.png" alt="popup-flower-bottom">');
        $('.flower-overlay').show();
    });
    
    $('img[alt="flower-3"]').on('click', function() {
        $('.popup-flower__title').text('георгины');
        $('.popup-flower__descr').text('Повсеместно в садах выращиваются сорта одного из видов – георгины культурной или разнообразной (D. variabilis). Это многолетнее красивоцветущее растение с запасающими корнями (корнеклубнями). В условиях средней полосы в открытом грунте не зимует. Стебли прямые, ветвистые, высотой от 30 до 250 см, в междоузлиях полые внутри, у основания древеснеющие. ');
        $('.popup-top__img').html('<img src="img/popup/popup-flower-3.png" alt="popup-flower-3.png">');
        $('.popup-bottom__img').html('<img src="img/popup/popup-flower-bottom.png" alt="popup-flower-bottom">');
        $('.flower-overlay').show();
    });
    
    $('img[alt="flower-4"]').on('click', function() {
        $('.popup-flower__title').text('Сирень');
        $('.popup-flower__descr').text('Декоративный кустарник сирень – частый гость приусадебных участков. Её благоухающие соцветия наполняют сад густым, насыщенным ароматом, пушистые ветви часто используются флористами для составления композиций. Говорят, что случайно найденный цветок с пятью лепестками принесет удачу, а загаданное желание непременно сбудется.');
        $('.popup-top__img').html('<img src="img/popup/popup-flower-4.png" alt="popup-flower-4.png">');
        $('.popup-bottom__img').html('<img src="img/popup/popup-flower-bottom.png" alt="popup-flower-bottom">');
        $('.flower-overlay').show();
    });
    
    $('img[alt="flower-5"]').on('click', function() {
        $('.popup-flower__title').text('календула');
        $('.popup-flower__descr').text('Цветы календулы - довольно примечательны, так как они окрашены в яркий оранжевый цвет! Произрастают же они на одноименном лекарственном растении. Календула является представителем семейства Сложноцветных, она известна также под названием ноготки лекарственные. Родиной этого лекарственного цветка принято считать Центральную и Южную Европу.');
        $('.popup-top__img').html('<img src="img/popup/popup-flower-5.png" alt="popup-flower-5.png">');
        $('.popup-bottom__img').html('<img src="img/popup/popup-flower-bottom.png" alt="popup-flower-bottom">');
        $('.flower-overlay').show();
    });
    
    $('img[alt="flower-6"]').on('click', function() {
        $('.popup-flower__title').text('лилия');
        $('.popup-flower__descr').text('Лилия это один из самых известных цветов, распространенный по всей планете. В царские времена его часто изображали на гербах государств, кланов и прочих организаций. Такая популярность объясняется изысканным внешним видом этого растения.В древней Греции считали, что этот цветок символизирует молоко богини Герды. У христиан же лилия была олицетворением Богоматери.');
        $('.popup-top__img').html('<img src="img/popup/popup-flower-6.png" alt="popup-flower-6.png">');
        $('.popup-bottom__img').html('<img src="img/popup/popup-flower-bottom.png" alt="popup-flower-bottom">');
        $('.flower-overlay').show();
    });
    
    
    
    $('.popup-close').on('click', function() {
        $('.overlay').hide();
        $('.flower-overlay').hide();
        $('.overlay-flower').hide();
    });

    $('.overlay').on('click', function (e){
        let div = $('.popup');
        if (!div.is(e.target) && div.has(e.target).length === 0) {
            $('.overlay').hide();
        }
    });
    
    $('.flower-overlay').on('click', function (e){
        let div = $('.popup-flower');
        if (!div.is(e.target) && div.has(e.target).length === 0) {
            $('.flower-overlay').hide();
        }
    });

    $('.overlay-flower').on('click', function (e){
        let div = $('.flower-popup');
        if (!div.is(e.target) && div.has(e.target).length === 0) {
            $('.overlay-flower').hide();
        }
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
				$(this).find("input").val("");
                yaCounter49906030.reachGoal('formSend');
                swal({
                    title: "Сообщение отправленно!",
                    text: "Спасибо за заказ!",
                    icon: "success",
                    button: {
                        text: "Продолжить!",
                        action: $('.overlay').hide()
                    }
                });
                $('form').trigger("reset");
                return true;
			});
			return false;
            }
        });
	});
});