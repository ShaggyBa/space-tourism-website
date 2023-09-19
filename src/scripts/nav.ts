const nav: HTMLElement = document.querySelector(".nav");
	const navBurger: HTMLElement = document.querySelector(".nav__burger");
	navBurger.addEventListener("click", () => {
	nav.classList.toggle("menu-open");
});