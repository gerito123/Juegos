
class CuadradoTateti {
    constructor(fila, columna){
        this.fila = fila
        this.columna = columna
        this.letra  = '';
    }

     dibujar(i,j){ 
        return `<div id="${i}${j}" class="cuadrados" >${this.letra}</div>`;
    }
    
}