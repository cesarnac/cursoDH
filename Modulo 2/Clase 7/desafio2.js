function multiplicar(num){

   
    for(let i = 1; i<=10 ; i++){

        console.log(num + " * " + i + " = " + (num*i));
    }

    console.log("-----------------------");
}

function tablas(){

    console.log("Tabla de multiplicar ")
    console.log("-------------------------")

    for (let i=1; i<=10; i++ ){

        multiplicar(i);
    }

}

tablas();