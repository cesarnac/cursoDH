let num1 = 12;
let num2 = 3;
let tipoOperacion = "suma";

switch(tipoOperacion){
    case "suma": 
        console.log("El resultado de la " + tipoOperacion + " es " + (num1 + num2))
        break;
    
    case "resta": 
        console.log("El resultado de la " + tipoOperacion + " es " +(num1 - num2))
        break;

    case "multiplicacion": 
        console.log("El resultado de la " + tipoOperacion + " es " + (num1 * num2))
        break;

    case "division": 
        console.log("El resultado de la " + tipoOperacion + " es " +(num1 / num2))
        break;
}