const autosImportados = require("./autos");
const clienteConcesionario = require("./persona");

const concesionaria =  {

    clientes: clienteConcesionario,
    autos: autosImportados,

    buscarAuto: function(patent){
            let autoBuscado = this.autos.find(auto => auto.patente == patent);
            
            if (autoBuscado == undefined){
                return null
            }  
            else{
                return autoBuscado
            }  
        },

    venderAuto: function(patent){
            if (this.buscarAuto(patent) != null){
                this.buscarAuto(patent).vendido = true
                
            }
            
        },

    autosParaLaVenta: function(){

            let autosDisponibles = this.autos.filter(venta => venta.vendido != true) 
            return autosDisponibles
        },

    autosNuevos: function(){
        let nuevos = this.autosParaLaVenta();
        
        let nuevokm = nuevos.filter(auto => auto.km <=100)

        return nuevokm
    },

    listaDeVentas: function(){
        let ventas = this.autos.filter(venta => venta.vendido == true)
        let listaPrecio = ventas.map (venta => venta.precio)
        return listaPrecio
    },

    totalDeVentas: function(){
      let valorXAuto = this.listaDeVentas();
      let total = valorXAuto.reduce(function(acum, num){
        return acum + num
      },0)
      return total
    },

    puedeComprar: function(auto, persona){
      let valorCuota = auto.precio / auto.cuotas;
      if ((auto.precio <= persona.capacidadDePagoTotal) && (valorCuota < persona.capacidadDePagoEnCuotas)){
        return true;
      } else{
        return false
      }
    }

    
}




  
concesionaria.venderAuto("JJK116");
concesionaria.autosParaLaVenta();
console.table(concesionaria.autosNuevos());
console.log(concesionaria.listaDeVentas());
console.log(concesionaria.totalDeVentas());
console.log(concesionaria.puedeComprar());
