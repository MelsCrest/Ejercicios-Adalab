'use strict';
const board = document.querySelector('.js-box');
const colors = ['blanco', 'azul', 'rojo', 'verde', 'amarillo', 'rosa'];
let selectedColor = 'white';

for(let i = 0; i < 100; i++){
    const paragraph = document.createElement('p');
    const text = document.createTextNode('He aprendido bien cómo funcionan los bucles.');
    paragraph.appendChild(text);
    board.appendChild(paragraph);

    // crear select
    const select = document.createElement('select');

    for(let i = 0; i < colors.length; i++){
        const option = document.createElement('option');
        option.setAttribute('value', colors[i]);
        const nameColor = document.createTextNode(colors[i]);
        option.appendChild(nameColor);
        select.appendChild(option);
    };
    board.appendChild(select);
    // darle color
    select.addEventListener('change', handleChange);
    paragraph.style.color = selectedColor;
};

function handleChange(event){
    const selectValue = event.currentTarget.selectedIndex;
    selectedColor = colors[selectValue];
    console.log(selectedColor);
};

