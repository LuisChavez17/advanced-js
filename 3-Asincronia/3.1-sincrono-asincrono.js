/**
 * Código sincrono: Una linea se jecuta inmediatamente despues de la otra
 * no hay codigo dependiente o bloqueante.
 */

console.log('============== BLOQUE 1 ==============');
console.log('Primero'); 
console.log('Segundo');
console.log('Tercero');

const validatingPayment = () => {
    setTimeout(() => {
        console.log('2 Validar la terjeta de trabajo y mostrar');
    }, 0)
}

console.log('1 Presionar el boton comprar');
validatingPayment();
console.log('3 Ver el mensaje de gracias por su compra joven');



