const autosImportados = require("./autos");

const concesionaria =  {

    autos: autosImportados,

    buscarAuto: function(patent){
        let autoBuscado = this.autos.find(function(auto)
        {
            auto.patente == patent
        });
        if (autoBuscado == undefined){
            return "null"
        }  
        else{
            return autoBuscado
        }  
    }
        


    
}

  

console.log(concesionaria.buscarAuto("JJK116"));