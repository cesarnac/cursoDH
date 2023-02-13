const express = require("express");
const app = express();
const path = require("path");
app.use(express.static(path.resolve(__dirname,"./public")))
//app.use(express.static("public"));

app.listen(3000,()=> console.log("servidor arriba"));
app.get("/",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"./views/home.html"))
})