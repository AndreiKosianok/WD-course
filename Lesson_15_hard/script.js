let btn1 = document.getElementById('btn1'),
	nameInput = document.getElementsByClassName('input-name')[0],
	ageInput = document.getElementsByClassName('input-age')[0],
	checkbox = document.querySelector('#checkbox'),
	popup = document.getElementsByClassName('popup')[0],
	message = document.getElementsByTagName('p')[0],
	close = document.querySelector('.close'),
	name = nameInput.value,
	//age = +ageInput.value,
	check = false;

	ageInput.onkeyup = numberDetect;
	nameInput.onkeyup = nameDetect;
	btn1.addEventListener('click', submit);
	//close.addEventListener('click', closePopup);
	popup.addEventListener('click', (event) => {
		if (event.target === message || event.target === close) {
			popup.style.display = 'none';
		}
	});

	function numberDetect () {
		this.value = this.value.replace(/[^\d]/g, '')
	};

	function nameDetect () {
		this.value = this.value.replace(/[^\а-яА-ЯёЁ]/ig,'')
	};

	function submit () {
		let age = +ageInput.value;
		if(age >= 18 & checkbox.checked) {
			popup.style.display = 'block';
			message.innerText = "Доступ разрешён";
			console.log('Доступ разрешён');
		} else {
			popup.style.display = 'block';
			message.innerText = "Доступ запрещён";
			console.log('Доступ запрещен');
		}
	}

	/*function closePopup() {
		popup.style.display = 'none';
	}*/