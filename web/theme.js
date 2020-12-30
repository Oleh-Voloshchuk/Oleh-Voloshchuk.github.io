let page = document.querySelector('.page');
let lightTheme = document.querySelector('.lightTheme');
let themeButton = document.querySelector('.themeButton');
let checkTheme = document.querySelector('.checkTheme');
themeButton.onclick = function () {		
	page.classList.toggle('lightTheme');

		if (page.classList.contains('lightTheme')) {
			page.style.background = '#A9A9A9';
			checkTheme.style.backgroundColor = 'black';
			themeButton.classList.toggle('dark');
			document.getElementById('logo').src='apple.svg';
		}
		
		else {
			page.style.background = '#4E536F';
			checkTheme.style.backgroundColor = '#FFFFE0';
			themeButton.classList.toggle('dark');
			document.getElementById('logo').src='apple1.svg';
		}
}
