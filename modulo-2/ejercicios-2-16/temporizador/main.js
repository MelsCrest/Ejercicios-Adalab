'use strict';

let counter = 0;

const icrementAndShowCounter = () => {
    counter++;
    const time = document.querySelector('.time');
    time.innerHTML = counter;
};

setInterval(icrementAndShowCounter, 2000);