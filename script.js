const hamburger = document.querySelector(".hamburger");
const ul = document.querySelector("ul");
const menuLink = document.querySelector(".menu-link");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    ul.classList.toggle("active");
}
