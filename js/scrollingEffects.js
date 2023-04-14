import LocomotiveScroll from 'locomotive-scroll';
import "locomotive-scroll/dist/locomotive-scroll.css";

let animateHeader = true;
let menuItems = document.querySelectorAll(".header__menu__item, .header__menu__item--current");
let slider = document.getElementById("header__slider");
let footerBorder = document.getElementById("footer__border");
let footerHeight = parseInt(document.getElementById("footer").style.height, 10);
let body = document.body,
    html = document.documentElement;
let documentHeight = Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight );

const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
    tablet: {smooth: true},
    smartphone: {smooth: true},
});

document.addEventListener('DOMContentLoaded', function() {
    function ScrollUpdateDelay() {
        setTimeout(function(){ scroll.update(); }, 500);
    }
    ScrollUpdateDelay();
});

scroll.on('scroll', (obj) => {
    // footer border expansion
    if (obj.scroll.y >= (documentHeight - window.innerHeight - footerHeight)) {
        footerBorder.style.height = (obj.scroll.y - body.scrollHeight + window.innerHeight) * 0.5 + "px";
    }
    // header animation
    if (obj.scroll.y > 100 && animateHeader) {
        document.getElementById("header__menu").classList.add("tiny");
        document.getElementById("header__logo").classList.add("tiny");
        document.querySelector(".header").classList.add("tiny");
        for (let item of menuItems){
            item.classList.add("tiny");
        }
        slider.classList.add("move");
        animateHeader = false; 
        setTimeout(() => { slider.classList.add("slide"); }, 150);
    } else if (obj.scroll.y <= 100 && !animateHeader) {
        slider.classList.remove("slide");
        setTimeout(() => {  document.getElementById("header__menu").classList.remove("tiny");
        document.getElementById("header__logo").classList.remove("tiny");
        document.querySelector(".header").classList.remove("tiny");
        for (let item of menuItems){
            item.classList.remove("tiny");
        }
        animateHeader = true;
        slider.classList.remove("move"); }, 750);
    }
});
