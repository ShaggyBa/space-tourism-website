const nav = document.querySelector(".nav");
const navBurger = document.querySelector(".nav__burger");
navBurger.addEventListener("click", (e) => {
	nav.classList.toggle("menu-open");
});


const tabs = document.querySelectorAll(".tab--btn");

const tabsContent = document.querySelectorAll(".tab__content");

tabs.forEach((tab, index) => {
	tab.addEventListener("click", (e) => {
		tabs.forEach((tab, index) => {
			tab.classList.remove("active");
			tabsContent[index].classList.remove("active");
		})
		tab.classList.add('active')
		tabsContent[index].classList.add('active')
	})
})