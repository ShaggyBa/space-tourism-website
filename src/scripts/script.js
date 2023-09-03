const nav = document.querySelector(".nav");
const navBurger = document.querySelector(".nav__burger");
navBurger.addEventListener("click", (e) => {
  nav.classList.toggle("menu-open");
});
