let animateHeader = true;
let slider = document.getElementById("header__slider").className;

window.addEventListener("scroll", function() {
    if (this.scrollY > 100 && animateHeader) {
        document.getElementById("header__menu").classList.add("tiny");
        document.getElementById("header__logo").classList.add("tiny");
        document.querySelector(".header").classList.add("tiny");
        document.querySelector(".menu-link").classList.add("tiny");
        document.querySelector(".menu-link--current").classList.add("tiny");
        slider.classList.toggle("slideIn");
        animateHeader = false;
    } else {
        document.getElementById("header__menu").classList.remove("tiny");
        document.getElementById("header__logo").classList.remove("tiny");
        document.querySelector(".header").classList.remove("tiny");
        document.querySelector(".menu-link").classList.remove("tiny");
        document.querySelector(".menu-link--current").classList.remove("tiny");
        slider.classList.toggle("slideOut");
        animateHeader = true;
    }
});