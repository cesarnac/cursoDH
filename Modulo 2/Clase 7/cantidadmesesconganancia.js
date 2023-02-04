function cantidadDeMesesConGanancia(unPeriodo) {

    let sumatoria = 0;
    for (let i = 0; i < unPeriodo.length; i++) {
        let mes = unPeriodo[i];

        if (mes <= 0){
            sumatoria = sumatoria + 1;
        }
        
    }
    return sumatoria;
}
    

  console.log(cantidadDeMesesConGanancia([0,3,-1,5]));
  console.log(cantidadDeMesesConGanancia([10, -10, 2, 100]));