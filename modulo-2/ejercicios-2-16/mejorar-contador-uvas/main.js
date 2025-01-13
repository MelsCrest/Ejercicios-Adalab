'use strict';

let counter = 0;
let stop;

const counterGrapes = () => {
    counter++;
    const time = document.querySelector('.time');
    time.innerHTML = counter;
    if(counter === 12){
        clearInterval(stop);
    }
};

stop = setInterval(counterGrapes, 1000);