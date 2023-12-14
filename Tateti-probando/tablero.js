
class TableroTateti{
    constructor(){
        this.tabl = [
            ["","",""],
            ["","",""],
            ["","",""]
        ];
    }
    printear(){
        let div = "<div id='tablero'>";
        for( let i = 0; i <3; i++){
            
            for(let j = 0; j <3; j++){
                
        let cuad = new CuadradoTateti();
        div += cuad.dibujar(i,j);
        this.tabl.push(cuad);
        
            }
        
        }
        div+="</div>"; 
        return div;
    }
    
};
/*let prin = new Tablero();
prin.printear();*/

