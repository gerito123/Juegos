class Numero{
    constructor(min, max, cantidad){
        this.min = min;
        this.max = max;
       this.cantidad = cantidad;
    }
    
    generarNumerosTablero(){
   
        const guardar = new Array();

    while(guardar.length < this.cantidad){
        const numero = parseInt(Math.random() * (this.min+this.max) + this.min);
    
       if(!guardar.includes(numero)){
        guardar.push(numero); 
        
        }
       
        
}
return guardar;
}

generarNumero(){
   
    let num = new Array();
    for(let i=0; i< 500; i++){
     num[i] = parseInt(Math.random()* (this.min+this.max) + this.min);
}
  return num;
    }

}
