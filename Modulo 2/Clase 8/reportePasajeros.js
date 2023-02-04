function reporteDePasajeros(num){

    let estaciones = [];
    pasajeros = 200;
    
    for (let i = 0; i<= num; i++  ){
        if (i == 5){
            pasajeros += 40;
        } else if (i != 0) {
            pasajeros += 20;
        }

        estaciones.push("En la estación " + i + " hay " + pasajeros + " pasajeros arriba del tren");      
    }
    console.log(estaciones);    
 }

     

    
reporteDePasajeros(6);  