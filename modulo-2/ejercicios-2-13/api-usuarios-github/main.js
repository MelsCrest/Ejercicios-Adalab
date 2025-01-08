"use strict";

function getProgrammer() {
    const username = input.value;
    console.log(username);
    fetch(`https://api.github.com/users/${username}`)
        .then((response) => response.json())
        .then((data) => {
            const name = document.querySelector('.js-name');
            const repos = document.querySelector('.js-repos');
            const img = document.querySelector("img");

            name.innerHTML = data.login;
            repos.innerHTML = data.public_repos;
            img.src = data.avatar_url;
            img.alt = "Un programador";            
        });
}
const input = document.querySelector(".js-input");
const btn = document.querySelector(".js-search");
btn.addEventListener("click", getProgrammer);
