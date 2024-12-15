const btn = document.querySelector('.js-btn');
const msg = document.querySelector('.js-msg');



function calculateWidth(typeBox, widthBox, padding, borderSize){
    let contentSize = 0;
    let totalSize = 0;
    
    if(typeBox === 'border-box'){
        contentSize = widthBox - (padding*2) - (borderSize*2);
        totalSize = widthBox;
    }else{
        contentSize = widthBox + (padding*2);
        totalSize = contentSize + (borderSize*2);
    }
    msg.innerHTML = `El ancho del contenido es: ${contentSize}px y el ancho total de la caja es: ${totalSize}px`;    
}

function handleClick(event){
    event.preventDefault();
    const typeBox = document.querySelector('input[name="radio-option"]:checked').value;
    const widthBox = parseInt(document.querySelector('.js-width').value);
    const padding = parseInt(document.querySelector('.js-padding').value);
    const borderSize = parseInt(document.querySelector('.js-border').value);
    calculateWidth(typeBox, widthBox, padding, borderSize);    
}

btn.addEventListener('click', handleClick);