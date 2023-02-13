const express = require ("express");
const app = express();
const path = require("path");


app.listen(3000, ()=> console.log("Servidor arriba"));

/*app.get("/", function(req, res){
    
    let htmlPath =  path.resolve(__dirname,"./index.html")
    res.sendFile(htmlPath);
    }); */

    
    app.get("/", function(req, res){
    
     
    res.sendFile(path.resolve(__dirname,"./index.html"));
    });

    
    

app.get("/contacto", function(req, res){
    res.send ("Entre a contacto");
});

app.get("/un-array", function(req, res){
    res.send ([1,2,3,4,5]);
});

app.get("/un-objeto", function(req, res){
    res.send ({nombre: "Dario"});
});

let producto = {
    tipoProducto: null,
    precio: null,
    cantidad: null
}

app.get("/producto/agregar", (req, res) => res.send(producto));

