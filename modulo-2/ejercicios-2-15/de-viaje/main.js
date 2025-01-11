"use strict";
const boxImg = document.querySelector(".js-box");
const select = document.getElementById("select");
const img1 = document.querySelector('.js-img1');
const img2 = document.querySelector('.js-img2');
const img3 = document.querySelector('.js-img3');

function handleChange() {
    const valueSelect = select.value;

    if (valueSelect === "madrid") {
        img1.setAttribute('src','./img/madrid1.jpg');
        img2.setAttribute('src','./img/madrid2.jpg');
        img3.setAttribute('src','./img/madrid3.jpg');
    } else if (valueSelect === "paris") {
        img1.setAttribute('src','./img/paris1.jpg');
        img2.setAttribute('src','./img/paris2.jpg');
        img3.setAttribute('src','./img/paris3.jpg');
    }else if (valueSelect === "new york") {
        img1.setAttribute('src','./img/newyork1.jpg');
        img2.setAttribute('src','./img/newyork2.jpg');
        img3.setAttribute('src','./img/newyork3.jpg');
    }
}

select.addEventListener("change", handleChange);
