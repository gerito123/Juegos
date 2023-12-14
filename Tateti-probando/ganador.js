class GanadorTateti{
  constructor(){}

    preguntarGanador(){
      let cuadrados = document.querySelectorAll(".cuadrados");
      let tablero = new TableroTateti();
      for (let cuadrado of cuadrados) {
        let fila = parseInt(cuadrado.id.charAt(0));      
        let columna = parseInt(cuadrado.id.charAt(1));
        tablero.tabl[fila][columna] = cuadrado.textContent;
        
            }
if(tablero.tabl['0']['0']  == 'X' || tablero.tabl['0']['0']  == 'O' ) {                               //------CUBRE EL PUNTO 0 0 EN SU EJE VERTICAL Y HORIZONTAL-------------------------------
    if(tablero.tabl['0']['0']  == tablero.tabl['0']['1'] && tablero.tabl['0']['0']  == tablero.tabl['0']['2']){   //  eje horizontal
      if(tablero.tabl[0][0] == 'X'){
        return 1;
      }else{
        return 0;
      }
    }                                                                                              
                           
   if(tablero.tabl['0']['0']  == 'X' || tablero.tabl['0']['0']  == 'O' ) {
    if(tablero.tabl['0']['0']  == tablero.tabl['1']['0'] && tablero.tabl['0']['0']  == tablero.tabl['2']['0']){   // eje vertical
      if(tablero.tabl[0][0] == 'X'){
        return 1;
      }else{
        return 0;
      }
    }
   }                                                                                               //--------------------------------------------------------------------------------
  }

   if(tablero.tabl['1']['1']  == 'X' || tablero.tabl['1']['1']  == 'O' ) {                               //--------CUBRE LOS EJES DEL PUNTO 1.1-----------------------------
    if(tablero.tabl['1']['1']  == tablero.tabl['0']['0'] && tablero.tabl['1']['1']  == tablero.tabl['2']['2']){    // eje diagonal empezando de 00 (de izquierda a derecha)
      if(tablero.tabl[1][1] == 'X'){
        return 1;
      }else{
        return 0;
      }
    }                                                                                               
                           

    if(tablero.tabl['1']['1']  == tablero.tabl['0']['1'] && tablero.tabl['1']['1']  == tablero.tabl['2']['1']){ //eje vertical
      if(tablero.tabl[1][1] == 'X'){
        return 1;
      }else{
        return 0;
      }
    }


    if(tablero.tabl['1']['1']  == tablero.tabl['1']['0'] && tablero.tabl['1']['1']  == tablero.tabl['1']['2']){ // eje horizontal
      if(tablero.tabl[1][1] == 'X'){
        return 1;
      }else{
        return 0;
      }
    }

    if(tablero.tabl['1']['1']  == tablero.tabl['0']['2'] && tablero.tabl['1']['1']  == tablero.tabl['2']['0']){ // eje diagonal empezando de 02 (de derecha a izquierda)
      if(tablero.tabl[1][1] == 'X'){
        return 1;
      }else{
        return 0;
      }
    }
   }                                                                                               //--------------------------------------------------------------------------------

   if(tablero.tabl['2']['2']  == 'X' || tablero.tabl['2']['2']  == 'O' ) {                               //------CUBRE EL PUNTO 2.2 EN SU EJE VERTICAL Y HORIZONTAL-------------------------------
    if(tablero.tabl['2']['2']  == tablero.tabl['2']['0'] && tablero.tabl['2']['2']  == tablero.tabl['2']['1']){   // eje vertical
      if(tablero.tabl[2][2] == 'X'){
        return 1;
      }else{
        return 0;
      }
    }
   }      
   if(tablero.tabl['2']['2']  == 'X' || tablero.tabl['2']['2']  == 'O' ) {
    if(tablero.tabl['2']['2']  == tablero.tabl['2']['1'] && tablero.tabl['2']['2']  == tablero.tabl['0']['2']){   //  eje horizontal
      if(tablero.tabl[2][2] == 'X'){
        return 1;
      }else{
        return 0;
      }
    }                                                                                         //--------------------------------------------------------------------------------

}

if(tablero.tabl['0']['2']  == 'X' || tablero.tabl['0']['2']  == 'O' ) {
  if(tablero.tabl['0']['2']  == tablero.tabl['1']['2'] && tablero.tabl['0']['2']  == tablero.tabl['2']['2']){   //  eje horizontal
    if(tablero.tabl[2][2] == 'X'){
      return 1;
    }else{
      return 0;
    }
  }                                                                                         //--------------------------------------------------------------------------------

}
console.log(tablero.tabl);
}
     

};


/*
let tablero = new Tablero([
    ["a","b","c"],
    ["d","e","f"],
    ["g","h","i"]
]);
let juga = new Ganador();*/



