// Microdesafio 1

/* 

Saldo Bancario

El Tech Leader nos informa que debemos efectuar un código que permita calcular el saldo
de la cuenta de un cliente de la Institución Financiera. Tu responsabilidad será ir
ejecutando cada una de las siguientes consignas para lograr el objetivo:

1. Crear un array que contenga las operaciones bancarias realizadas por el cliente,
tomando en cuenta que los depósitos serán representados por valores positivos y
los retiros por valores negativos.

2. Crear una función (Callback) que reciba como parámetro el array creado. La función
tendrá la responsabilidad de calcular y devolver el saldo total de depósitos, el saldo
actual de retiros y el saldo actual del cliente.

3. Crear otra función que reciba como parámetros el nombre y el apellido del cliente así
como el array que contiene las operaciones bancarias. Esta función tendrá la
responsabilidad de retornar el nombre y apellido del cliente y el saldo total de
depósitos, el saldo actual de retiros y el saldo actual.
Una vez creado el programa, ejecutalo y para verificar los resultados solicitados, invoca a la
segunda función, asigna diferentes valores o argumentos. No olvides utilizar el console.log()
para mostrar los resultados al usuario, de acuerdo al siguiente mensaje:

    Estimada Gloria Medina:
    El monto total de los depósitos es de: $5500.
    El monto total de los retiros es de: $15000.
    Por lo tanto, su saldo actual en la cuenta es de: $40000.

*/

/* 1. Crear un array que contenga las operaciones bancarias realizadas por el cliente,
tomando en cuenta que los depósitos serán representados por valores positivos y
los retiros por valores negativos. */

let operacionesBancarias = [20, 30, 35, -10, 40, -100];
let operacionesBancarias2 = [10, 300, -35, -150];

/* 2. Crear una función (Callback) que reciba como parámetro el array creado. La función
tendrá la responsabilidad de calcular y devolver el saldo total de depósitos, el saldo
actual de retiros y el saldo actual del cliente. */

function calcularMovimientos (movimientos) {
    let saldoDepositos = 0; // check
    let saldoRetiros = 0; // check
    let saldoFinal = 0; // check

    for (let i = 0; i < movimientos.length; i++) {
        if (movimientos[i] > 0) {
            saldoDepositos += movimientos[i]
        } else {
            saldoRetiros -= movimientos[i]
        }

        /* saldoFinal += movimientos[i] */
    }

    saldoFinal = saldoDepositos + saldoRetiros;

    return [saldoDepositos, saldoRetiros, saldoFinal]
}

/* Crear otra función que reciba como parámetros el nombre y el apellido del cliente así
como el array que contiene las operaciones bancarias. Esta función tendrá la
responsabilidad de retornar el nombre y apellido del cliente y el saldo total de
depósitos, el saldo actual de retiros y el saldo actual.
Una vez creado el programa, ejecutalo y para verificar los resultados solicitados, invoca a la
segunda función, asigna diferentes valores o argumentos. No olvides utilizar el console.log()
para mostrar los resultados al usuario, de acuerdo al siguiente mensaje:

    Estimada Gloria Medina:
    El monto total de los depósitos es de: $5500.
    El monto total de los retiros es de: $15000.
    Por lo tanto, su saldo actual en la cuenta es de: $40000.

*/
function mostrarAClientes (nombre, apellido, movimientos) {

    let arrayDatos = calcularMovimientos(movimientos);

    console.log("Estimado " + nombre + " " + apellido + ":");
    console.log("El monto total de los depósitos es de: " + arrayDatos[0]);
    console.log("El monto total de los retiros es de: " + arrayDatos[1]);
    console.log("Por lo tanto, su saldo actual en la cuenta es de: " + arrayDatos[2]);
}

mostrarAClientes("Gloria", "Medina", operacionesBancarias2);