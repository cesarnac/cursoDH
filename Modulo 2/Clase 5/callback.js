let sumar = (num1, num2) => num1 + num2;
let restar = (num1, num2) => num1 - num2;
let multiplicar = (num1, num2) => num1 * num2;
let dividir = (num1, num2) => num1 / num2;

let calculadora = (num1, num2, operacion) => operacion(num1,num2);

console.log(calculadora(5,3,sumar));