function menciona(texto, palabra){
    let frase = texto.indexOf(palabra);
    if (frase != -1)
    return true;
    else 
    return false;
    
    
}

let texto = "Hoy es viernes";
console.log(menciona(texto,"viernes"));
