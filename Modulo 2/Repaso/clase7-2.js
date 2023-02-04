function multiplicar(){
    for (let i=1; i<=10; i++){
        tablas(i);
    }
}

function tablas(valor){

    for (let i= 1; i<=10;i++){
        console.log(valor + " * "+ i +" = " + valor*i);
    }
console.log("--------------------------")
}

console.log("Tablas de multiplicar");
console.log("--------------------------");
multiplicar();