const express = require("express");
const app = express();
const path = require("path");
app.use(express.static(path.resolve(__dirname,"./public")));

app.listen(3000,()=> console.log("Levantando servidor"));

app.get("/", (req,res)=> {
    res.send("Bienvenidos al sitio")
});

app.get("/contacto", (req,res)=> {
    res.send("Dejanos tu contacto");
})