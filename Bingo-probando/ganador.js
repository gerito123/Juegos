class GanadorBingo{
    constructor(){};

    detectarGanador(){
        let cuadrados = document.querySelectorAll(".cuadrados-bingo");
        let tablero = new TableroBingo();
        cuadrados.forEach(cuadrado => {
            let fila = parseInt(cuadrado.id.charAt(0));      
            let columna = parseInt(cuadrado.id.charAt(1));
            tablero.tabl[fila][columna] = cuadrado.textContent;
            
        });

        if(tablero.tabl[0][0] == tablero.tabl[0][1] && tablero.tabl[0][0] == tablero.tabl[0][2] && tablero.tabl[0][0] == tablero.tabl[0][3] && tablero.tabl[0][0] == tablero.tabl[0][4] && tablero.tabl[1][0] == tablero.tabl[1][1] && tablero.tabl[1][0] == tablero.tabl[1][2] && tablero.tabl[1][0] == tablero.tabl[1][3] && tablero.tabl[1][0] == tablero.tabl[1][4] && tablero.tabl[2][0] == tablero.tabl[2][1] && tablero.tabl[2][0] == tablero.tabl[2][2] && tablero.tabl[2][0] == tablero.tabl[2][3] && tablero.tabl[2][0] == tablero.tabl[2][4] && tablero.tabl[3][0] == tablero.tabl[3][1] && tablero.tabl[3][0] == tablero.tabl[3][2] && tablero.tabl[3][0] == tablero.tabl[3][3] && tablero.tabl[3][0] == tablero.tabl[3][4] && tablero.tabl[4][0] == tablero.tabl[4][1] && tablero.tabl[4][0] == tablero.tabl[4][2] && tablero.tabl[4][0] == tablero.tabl[4][3] && tablero.tabl[4][0] == tablero.tabl[4][4]){
            
            return 0;
        };

        if(tablero.tabl[0][0] == tablero.tabl[0][1] && tablero.tabl[0][0] == tablero.tabl[0][2] && tablero.tabl[0][0] == tablero.tabl[0][3] && tablero.tabl[0][0] == tablero.tabl[0][4] ){
            return 1;
        };

        if(tablero.tabl[1][0] == tablero.tabl[1][1] && tablero.tabl[1][0] == tablero.tabl[1][2] && tablero.tabl[1][0] == tablero.tabl[1][3] && tablero.tabl[1][0] == tablero.tabl[1][4] ){
            
            return 1;
        };

        if(tablero.tabl[2][0] == tablero.tabl[2][1] && tablero.tabl[2][0] == tablero.tabl[2][2] && tablero.tabl[2][0] == tablero.tabl[2][3] && tablero.tabl[2][0] == tablero.tabl[2][4] ){
            
            return 1;
        };

        if(tablero.tabl[3][0] == tablero.tabl[3][1] && tablero.tabl[3][0] == tablero.tabl[3][2] && tablero.tabl[3][0] == tablero.tabl[3][3] && tablero.tabl[3][0] == tablero.tabl[3][4] ){
            
            return 1;};

        if(tablero.tabl[4][0] == tablero.tabl[4][1] && tablero.tabl[4][0] == tablero.tabl[4][2] && tablero.tabl[4][0] == tablero.tabl[4][3] && tablero.tabl[4][0] == tablero.tabl[4][4] ){
            
            return 1;
        };




        if(tablero.tabl[0][0] == tablero.tabl[1][0] && tablero.tabl[1][0] == tablero.tabl[2][0] && tablero.tabl[1][0] == tablero.tabl[3][0] && tablero.tabl[1][0] == tablero.tabl[4][0] ){

            
            return 1;
        };

        if(tablero.tabl[0][1] == tablero.tabl[1][1] && tablero.tabl[1][1] == tablero.tabl[2][1] && tablero.tabl[1][1] == tablero.tabl[3][1] && tablero.tabl[1][1] == tablero.tabl[4][1] ){
            
            return 1;
        };

        if(tablero.tabl[0][2] == tablero.tabl[1][2] && tablero.tabl[1][2] == tablero.tabl[2][2] && tablero.tabl[1][2] == tablero.tabl[3][2] && tablero.tabl[1][2] == tablero.tabl[4][2] ){
            
            return 1;
        };

        if(tablero.tabl[0][3] == tablero.tabl[1][3] && tablero.tabl[1][3] == tablero.tabl[2][3] && tablero.tabl[1][3] == tablero.tabl[3][3] && tablero.tabl[1][3] == tablero.tabl[4][3] ){
            
            return 1;
        };

        if(tablero.tabl[0][4] == tablero.tabl[1][4] && tablero.tabl[1][4] == tablero.tabl[2][4] && tablero.tabl[1][4] == tablero.tabl[3][4] && tablero.tabl[1][4] == tablero.tabl[4][4] ){
            
            return 1;
        };
        

    };
};