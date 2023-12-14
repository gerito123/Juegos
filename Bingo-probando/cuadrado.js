class CuadradoBingo{
    constructor(numero){
    this.numero = numero;
    

    }
    dibujar(i, j){
        return `<div id="${i}${j}" class="cuadrados-bingo"></div>`
    }
}