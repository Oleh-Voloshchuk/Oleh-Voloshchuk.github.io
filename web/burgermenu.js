let button = document.querySelector(".burger_menu");
let links = document.querySelector(".burger_links");
let img = document.querySelector(".menu");
window.onload = function() {
	button.onclick = function() {
		button.classList.toggle('burger_menu')
		button.classList.toggle('burger_opened')
		links.classList.toggle('burger_links')
		links.classList.toggle('burger_links_shown')
		img.classList.toggle('menu_hide')
	}
}