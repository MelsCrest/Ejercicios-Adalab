'use strict';

const time = document.querySelector('.time');
const btnStop = document.querySelector('.stop');
const btnReset = document.querySelector('.reset');

let counter = 0;
let pause;

const cronometro = () => {
    counter++;
    time.innerHTML = counter;
};

pause = setInterval(cronometro, 1000);

function handleStop(){
    clearInterval(pause);
};

function handleReset(){
    setInterval(pause);
};

btnStop.addEventListener('click', handleStop);
btnReset.addEventListener('click', handleReset);