function banco(movimientos){

    let total = 0;
    let consignado = 0;
    let retirado = 0;
    

    for( let i = 0; i < movimientos.length; i ++){

            if (movimientos[i] > 0) {
            
            consignado +=  movimientos[i];
        }

        else {
            
            retirado -= movimientos[i];
        }

        
    }

    total = consignado - retirado;
    return[consignado, retirado, total]
   
}


function cliente(nombre, apellido, movimientos){

    let arrayDatos = banco(movimientos);
    
    console.log("Señor" +  "(a): "+ nombre + apellido)
    console.log("Su saldo total es: " + arrayDatos[2]);
    console.log("El total de consignaciones fue : " + arrayDatos[0]);
    console.log("El total de retiros fue : " + arrayDatos[1]);
}

let movimientos = [1,10,-5,8];
cliente("Cesar", "Beltrán", movimientos);





