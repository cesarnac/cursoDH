function valorCursos(multiArray, cursosElegidos){
    let total = 0;
    let nuevoMultiArray = multiArray;

    for (j= 0; j< cursosElegidos.length; j++){

        for(let i=0; i<nuevoMultiArray.length; i++){

            if(cursosElegidos[j] == nuevoMultiArray[i][0].toUpperCase()){

                total = total + nuevoMultiArray[i][1];
            }

            
        
        }
    }

    return total;
}

function alumno(nombre, apellido, multiArray, cursosElegidos){
    console.log("Estimado " + nombre +" "+ apellido + " , en función de los cursos seleccionados: ");

    for(let i = 0; i< cursosElegidos.length; i++){
        console.log((i+1) +". " + cursosElegidos[i]);
    }

    console.log("El monto total a pagar es: " + valorCursos(multiArray,cursosElegidos));
    console.log("Bienvenido a Digital House");


}

let multiArray = [
    ["html",4000],
    ["csss3",500],
    ["javascript",10000],
    ["react",7000],
    ["nodejs",15000]
];

let cursosElegidos = ["CSSS3"];

alumno("Cesar", "Beltran",multiArray,cursosElegidos);
