const autosImportados = require("./autos");

const concesionaria =  {

    autos: autosImportados,

    buscarAuto: function(paten){
        
        let nuevo = [];
        for(let i = 0; i < this.autos.length; i++){
                if(paten == this.autos[i].patente){

                    nuevo.push(this.autos[i]);
                }  
                
            
        }
        if (nuevo.length > 0){
            return nuevo
        }
        else{
            return null
        }
    }

    

}

/* console.log(concesionaria.buscarAuto("JJK116")); */

console.table(concesionaria.buscarAuto("APL123"));