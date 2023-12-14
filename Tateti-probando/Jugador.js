
class JugadorTateti{
        jugador1 = {
        signo: "X",
        turno: true
    };
        jugador2 = {
            signo: "O",
            turno: true
        };
    constructor(){
    };

    turnoJugador1(){
        let jugador = new Tateti();
        let cuadrados = document.querySelectorAll(".cuadrados");
       for (let cuadrado of cuadrados) {
            cuadrado.addEventListener("click", ()=>{     
                if(!cuadrado.textContent && this.jugador1.turno){
                if(!bandera_ganador)return;
                cuadrado.innerHTML = this.jugador1.signo;
                jugador.comprobarGanador();
             
                this.jugador1.turno = false;
                this.jugador2.turno = true;


                };
            });
        };
    };

    turnoJugador2(){
        let jugador = new Tateti();
        let cuadrados = document.querySelectorAll(".cuadrados");
        for (let cuadrado of cuadrados) {
            cuadrado.addEventListener("click", ()=>{
                
                if(!cuadrado.textContent  && this.jugador2.turno){
                    if(!bandera_ganador)return;   
                cuadrado.innerHTML = this.jugador2.signo;
                jugador.comprobarGanador();
                this.jugador2.turno = false;
                this.jugador1.turno = true;
            
                };  
            });   
        };  
    };   
};


/*
let jugador = new Jugador();            

if(jugador.jugador1.turno){
jugador.turnoJugador1();
};
if(jugador.jugador2.turno){
jug.turnoJugador2();
};*/