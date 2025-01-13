'use strict';

let counter = 0;

const postTimeCounter = () => {
    counter++;
    const time = document.querySelector('.time');
    time.innerHTML = '';
    if(counter < 60){
        time.innerHTML = `Publicado hace ${counter} segundos`;
    }else{
        let minutes = Math.floor(counter / 60);
        if(minutes === 1){
            time.innerHTML = `Publicado hace más de 1 minuto`;
        }else{
            time.innerHTML = `Publicado hace más de ${minutes} minutos`;
        }
    };
};

setInterval(postTimeCounter, 1000);