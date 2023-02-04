function saldosDeMesesConGanancia(unPeriodo) {

    let saldo = [];
    
    for (let i = 0; i < unPeriodo.length; i++) {
        let mes = unPeriodo[i];
        
        if (mes > 0){
            saldo.push(mes);
        }
        
    }
    return saldo;
}
    

  console.log(saldosDeMesesConGanancia([0,3,-1,5]));
  console.log(saldosDeMesesConGanancia([10, -10, 2, 100]));



  for (let i = 0; i < movimientos.lenght; i++){
    let mes = movimientos[i];
    if (mes > 0){
    total = total + mes;
    consignado = consignado + mes; 
    }
    /*else if (mes < 0){
        total = total + mes;
        retirado = retirado - mes;
    }*/
    
    return total;
}