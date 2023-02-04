/* function compacto(dias, silla){
    return (dias * 14000) + (silla * dias * 1200)
}

function mediano(dias, silla){
    return (dias * 17000) + (silla * dias * 1200)
}

function camioneta(dias, silla){
    return (dias * 28000) + (silla * dias * 1)
}




function pagoAlquiler(tipoVehiculo, diasAlquiler, sillaBebe ){

    return tipoVehiculo(diasAlquiler, sillaBebe);
}

console.log(pagoAlquiler("compacto", 3, 1)) */


let Totalpagar = 0;

function pagoAlquiler(tipoVehiculo, dias, silla ){
   
    switch (tipoVehiculo){
        case "compacto":
        Totalpagar += dias * 14000
        break;

        case "mediano":
            Totalpagar += dias * 17000
            break;

            case "camioneta":
                Totalpagar += dias * 28000
                break;
        default:
        console.log("No se cuenta con ese tipo de vehiculo")
        Totalpagar = " "
        break;
    }

    if (silla == true ){
        Totalpagar += (1200 * dias);
        
    }

    return Totalpagar;

}

console.log(pagoAlquiler("compact",1,false));
