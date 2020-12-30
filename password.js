let password = document.querySelectorAll('.psw');
let submit = document.querySelectorAll('.registerbtn');
let name = document.querySelectorAll('.name');
var a = 1


password[1].oninput = function () {
	let passLength = password[0].value.length;
	if (passLength > 6 && password[0].value == password[1].value) {
	}
	
	else {
		a = 1;
	}
}



name[0].oninput = function () {
	if (/^[a-zA-Z]+$/.test(name[0].value)) {
	}
	else {
		a = 2;
	}
} 

submit[0].onmouseover = function () {
	if (a == 1) {
		submit[0].style. backgroundColor = '#fed42aff';
	}
	else if (a == 2) {
		submit[0].style. backgroundColor = '#fed42aff';
	}
	else {
		submit[0].style. backgroundColor = '#4CAF50';
	}
}

submit[0].onclick = function () {
	let passLength = password[0].value.length;
	if (passLength > 6 && password[0].value == password[1].value && /^[a-zA-Z]+$/.test(name[0].value) ) {
		return true;
	}
	if (a == 1) {
		alert('Паролі мають співпадати та містити не менше 7 символів');
		return false;
	}
	if (a == 2) {
		alert('Name має містити тільки Великі та малі латинські літери');
		return false;
	}
}