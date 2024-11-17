/*palabra-clave nombre (parámetros){
    cuerpo(return) o código
}

Llamado(argumentos)
-----------------------
function suma (a, b) {
    return a + b;
}

suma(3, 5);*/

function calculateDiscountPrice(price, discountPercent){
    const discount = (price*discountPercent) / 100;
    const priceWithDiscount = price - discount;

    return priceWithDiscount;
}

const originalPrice = 100;
const discountPercent = 20;
const finalPrice = calculateDiscountPrice(originalPrice, discountPercent);

console.log('Original Price: $' + originalPrice);
console.log('Discount: ' + discountPercent + '%');
console.log('Price with dicount: $' + finalPrice);