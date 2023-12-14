class TableroBingo{
    constructor(){
        this.tabl = [
        [/*"","","","",""*/],
        [/*"","","","",""*/],
        [/*"","","","",""*/],
        [/*"","","","",""*/],
        [/*"","","","",""*/]
        ]
    }

    estructuraTablero(){
        let div = "<div id='tablero_bingo'>";
        for( let f = 0; f <5; f++){
            
        for(let c = 0; c <5; c++){
        let cuad = new CuadradoBingo();
        div += cuad.dibujar(f,c);
        this.tabl.push(cuad);
        
            }
        
        }
        div+="</div>"; 
        return div;
    }
}