"use strict";

function getRandomNumber() {
    fetch("https://api.rand.fun/number/integer?max=10"
    )
        .then((response) => response.json())
        .then((data) => {
            document.querySelector(".js-result").innerHTML = data.result;
        });
}
document.querySelector(".js-random").addEventListener("click", getRandomNumber);
