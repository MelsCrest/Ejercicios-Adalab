//Metodos que modifican el array original - Mutabilidad

// 1. Push -  añade uno o más elementos al final de un array y devuelve la nueva longitud del array
const countries = ['USA', 'Canada', 'UK'];
const newCountries = countries.push('Germany', 'Australia');
console.log(countries);
console.log(newCountries);


// 2. Pop - elimina el último elemento de un array y lo devuelve(se puede almacenar en una variable). Sin parámetros.
const removedCountry = countries.pop()
console.log(countries);
console.log(removedCountry);