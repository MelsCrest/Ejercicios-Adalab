'use strict';

let counter = 0;

const counterGrapes = () => {
    counter++;
    if(counter === 15){
        window.alert('su sesión ha expirado');
    }
};

setInterval(counterGrapes, 1000);
