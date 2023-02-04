let color = "roj";

let colorFavorito = color == "rojo" ? "Es mi color favorito" : "No me gusta ese color";
console.log(colorFavorito);

let semaforo = "Verde"

switch(semaforo){
    case "Verde":
        console.log("Puedes cruzar");
        break;
    case "Amarillo":
        console.log("Alistate");
        break;
    case "Rojo":
        console.log("Para");
        break;
    default:
        console.log("No hay semaforo");
        break;
}


let lloviendo = false

if(!lloviendo){
    console.log("Hola")
}

