


function transacciones(movimientos){
    let total = 0;
    let consignacion = 0;
    let retiro = 0;

    for (let i=0; i< movimientos.length; i++){
        if(movimientos[i]>0){
            consignacion+= movimientos[i];
        }else{
            retiro-=movimientos[i];
        }
    }
    total = consignacion - retiro;
    return [total, consignacion, retiro];
}

function informacion(nombre, apellido, movimientos){

    let nuevoArray = transacciones(movimientos);

    console.log("Estimado señor(a): " + nombre + " " + apellido);
    console.log("Su cuenta tiene en total: " + nuevoArray[0]);
    console.log("Fue consignado: " + nuevoArray[1]);
    console.log("Fue retirado: " + nuevoArray[2]);

}

let movimientos = [10,-5,50,30,-40];
 informacion("Cesar","Beltran", movimientos)
