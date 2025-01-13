'use strict';

let counter = 0;

const counterGrapes = () => {
    counter++;
    const time = document.querySelector('.time');
    
    if(counter <= 12){
        time.innerHTML = counter;
    }
};

setInterval(counterGrapes, 1000);