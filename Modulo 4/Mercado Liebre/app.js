const express = require("express"); //importar el modulo express
const app = express();              //inicializar el módulo
const path = require("path");       
app.use(express.static(path.resolve(__dirname,"./public")))
//app.use(express.static("public"));


app.get("/",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"./views/home.html"))
})

app.listen(3000,()=> console.log("servidor arriba"));  //abrir el servidor web