'use strict';
const inception = 'Inception';
const theButterFlyEffect = 'The butterfly effect';
const eternalSunshineOfTheSM = 'Eternal sunshine of the spotless mind';
const blueVelvet = 'Blue velvet';
const split = 'Split';

const btn = document.querySelector('.js-btn');
const choosenFilm = document.querySelector('.js-selected');
const moviesList = document.querySelector('.js-list');

btn.addEventListener('click', ()=>{
    moviesList.innerHTML = `<li>${inception}</li>
                            <li>${theButterFlyEffect}</li>
                            <li>${eternalSunshineOfTheSM}</li>
                            <li>${blueVelvet}</li>
                            <li>${split}</li>` 
});

moviesList.addEventListener('click', (event)=>{
    choosenFilm.innerHTML = 'La peli seleccionada es ' + event.target.innerHTML;
});
