
class Bingo{
    constructor(){
     
    }

    dibujarTablero(){
        let tablero = new TableroBingo();
        let cont = document.getElementById("cont");
        cont.innerHTML = tablero.estructuraTablero();
    }
    dibujarNumero(){
        let numero = new Numero(0, 100, 25);
        let cuadrados = document.querySelectorAll(".cuadrados-bingo");
        let num = numero.generarNumerosTablero();
        num = num.sort((a, b)=> a - b);
        console.log(num);
        
        for (let i = 0; i<num.length; i++) {
           cuadrados[i].innerHTML = num[i];   
        }
    }
    dibujarNumeroBot(){
        let i = 0;
        let cont = document.getElementById("cont-num");
        cont.classList.remove("cont_titulo");
        cont.classList.remove("cont_ganador");
        cont.classList.add("cont_num");

        
        cont.style.display = "flex";
        let numero_bot = new Numero(0, 100);
        let numeros = numero_bot.generarNumero();
        cont.innerHTML = numeros[0];
        inetrvalo = setInterval(()=>{
            i++;
            cont.innerHTML = numeros[i];
        }, 7000);
 

 
    
    }

    detectarNumero(){
       
        let cuadrados = document.querySelectorAll(".cuadrados-bingo");
        let cont = document.getElementById("cont-num");
        cuadrados.forEach(cuadrado => {
            cuadrado.addEventListener("click", ()=>{
                        console.log("click");
                if(cuadrado.textContent == cont.textContent){
                    cuadrado.innerHTML = '<img src="./Bingo-probando/perro.png" alt="">';
                    cuadrado.style.fontSize = "50px";
                    cuadrado.style.fontFamily = "'Montserrat', sans-serif";
                    
                       }
                    });
                });
         
    }
    confirmarGanador(){
        let cont = document.getElementById("cont-num");
        cont.classList.add("cont_num");
        let cuadrados = document.querySelectorAll(".cuadrados-bingo");
        const jsConfetti = new JSConfetti()
        let bandera = true;
        let ganador = new GanadorBingo();
    cuadrados.forEach(cuadrado => {
            cuadrado.addEventListener("click", ()=>{ 
                
                if(ganador.detectarGanador()===0){
                    console.log("bingoooo");
                    cont.innerHTML = "BINGO";
                    jsConfetti.addConfetti()
                    clearInterval(inetrvalo);
                  
                }

            if(ganador.detectarGanador() && bandera){
                console.log("linea");
                cont.innerHTML = "LINEA";
                jsConfetti.addConfetti()
                bandera = false;
                
               
            }

        
            
            });
        });
       
       
    }
    botonReiniciar(){

        let reiniciar = document.createElement("button");
        reiniciar.classList.add("reiniciar");
        cont.insertAdjacentElement("beforeend", reiniciar);
        reiniciar.innerHTML = "Reiniciar";
        
        }
}