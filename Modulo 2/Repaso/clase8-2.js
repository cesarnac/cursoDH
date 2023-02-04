
function promedio(number,html,css,javascript,node){

    let suma = 0;
    
    switch (number) {
        case 1:

        for (let i=0; i< html.length; i++){
            suma += html[i];
        }

        suma = suma / html.length;
        console.log(suma);
            
            break;

            case 2:

            for (let i=0; i< css.length; i++){
                suma += css[i];
            }
    
            suma = suma / css.length;
            console.log(suma);
                
                break;

            case 3:

            for (let i=0; i< javascript.length; i++){
                    suma += javascript[i];
            }
        
            suma = suma / javascript.length;
            console.log(suma);
                    
                break;
            
            case 4:

                for (let i=0; i< node.length; i++){
                    suma += node[i];
                }
        
                suma = suma / node.length;
                console.log(suma);
                    
                    break;

    
        default:
                console.log("Esta opción no existe");

            break;
    }


};


let html5 = "30 45 25 34 18 23 16 50 72 70";
let css3 = "50 45 71 34 23 45 65 75 63 43 74 70";
let javascript = "70 65 58 45 23 57 34 17 72";
let nodejs = "45 56 73 34 65 72 70 32";

let nuevoHtml = html5.split(" ");
let html2 = [];
for(i=0; i<nuevoHtml.length; i++){
    
    html2.push(parseInt(nuevoHtml[i]));
}

let nuevoCss3 = css3.split(" ");
let css22 = [];
for(i=0; i<nuevoCss3.length; i++){
    
    css22.push(parseInt(nuevoCss3[i]));
}

let nuevoJavascript = javascript.split(" ");
let javascript2 = [];
for(i=0; i<nuevoJavascript.length; i++){
    
    javascript2.push(parseInt(nuevoJavascript[i]));
}

let nuevoNodejs = nodejs.split(" ");
let node2 = [];
for(i=0; i<nuevoNodejs.length; i++){
    
    node2.push(parseInt(nuevoNodejs[i]));
}

let opcion = 5;

promedio(opcion,html2,css22,javascript2,node2);

