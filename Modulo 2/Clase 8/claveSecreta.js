function claveSecreta(clave){
    let descifrada = [];
    let num = clave.length;
    

    for (let i = (clave.length - 1); i >= 0;  i --){

        if (clave[i] != "*"){
            descifrada.push(clave[i]);
        }

    }
    
    
    return descifrada.join("");
}
let clave = (["a", "*", "d", "a", "r", "f", "*", "i", "c", "*", "s", "e", "d", " ", "e", "*", "v", "a", "l", "C"]); 

console.log(claveSecreta(clave));