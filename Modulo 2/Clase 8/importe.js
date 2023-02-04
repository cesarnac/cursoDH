function sumatoriaBajoImporte(importe){
    
    let sumatoria = 0;
    for(let i=0; i < importe.length; i++){
        if(importe[i]>0 && importe[i]<=1000){
            sumatoria += importe[i];
        }
        
    }
    
    return sumatoria;
}

let movimientos = [300,0,-250,-100,0,400,600,1200,5000,0,1000,1000];
console.log(sumatoriaBajoImporte(movimientos));
