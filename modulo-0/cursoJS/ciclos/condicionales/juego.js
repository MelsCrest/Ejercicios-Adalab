const numeroSecreto = Math.floor(Math.random()*10+1);
const numeroJugador = parseInt(prompt("Adivina el número entre el 1 al 10"));

if(numeroJugador === numeroSecreto){
    console.log('¡¡Has ganado!!');
}else if(numeroJugador < numeroSecreto){
    console.log('El número es menor que el número secreto. Inténtalo otra vez. Aunque no tiene sentido, porque cada vez que lo intentes cambiará el número');
}else if((numeroJugador > numeroSecreto)){
    console.log('El número es mayor que el número secreto. Inténtalo otra vez. Aunque no tiene sentido, porque cada vez que lo intentes cambiará el número');
}else{
    console.log('Mala suerte. Inténtalo otra vez');
}