function siguientesValores(num){

    for( let i = 1; i< 10; i++){
        console.log(num + i);
    }
}

siguientesValores(3);

console.log("--------------------");
console.log("1");
for (let i = 1; i<=54; i++){
    console.log(i+3);
    i= i+2;

}
console.log("--------------------");
console.log("Sumatora de 0 a 100");
 let sumatoria = 0;
for (let i = 0;  i<=100; i++) {
     sumatoria+= i;
}

console.log(sumatoria);

console.log("--------------------");
console.log("Cambiar a mayúsculas");

function mayusculas(texto){
    
    let mayuscula = texto;
    console.log(mayuscula.toUpperCase());
    
}


mayusculas("hola a todos");

function pares(num){

    let par = [];
    for (let i = 0; i < num.length; i++)
    if(num[i]%2 == 0){
        par.push(num[i]);
    }    
    console.log(par);
}

let numeros = [1,2,5,8,10];
pares(numeros);