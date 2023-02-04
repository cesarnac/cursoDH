function asientosDisponibles(asientos, eleccion){
    for (let i = 0; i < asientos.length; i++ ){
        if(asientos[i] == eleccion){
            let mensaje = "Felicitaciones, el asiento número " +                eleccion + " está disponible";
            return mensaje;
            i = asientos.length;
        }
        
    }
    return "Lo sentimos, el asiento número " + eleccion + " está ocupado, pero aún quedan " + asientos.length + " asientos disponibles";
}

let asientos = [15, 44, 45, 70];
console.log(asientosDisponibles(asientos,50));