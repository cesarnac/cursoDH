function numeros(numeros){
    for(let i=1; i<=10;i++){
        console.log("El siguiente numero es: " + (numeros + i));
    }

    console.log("--------------------");

    for (let i=1;i<=57;i+=3){
        console.log(i);
    
    }

    console.log("--------------------");

    let suma = 0;
    for(let i=0;i<=100;i++){
        suma += i;
    }
    console.log(suma);
}

function mayuscula(texto){
    
    
    console.log(texto.toUpperCase());

}

function positivos(array){
    let nuevoArray = [];

    for (let i=0; i<array.length; i++){
        if (array[i]%2 == 0){
            nuevoArray.push(array[i]);
        }
    }

    console.log(nuevoArray);

}


let numero = 7;
let mensaje =  "hola como estas";
let todoArray = [2,5,7,18,22];
numeros(numero);
mayuscula(mensaje);
positivos(todoArray);