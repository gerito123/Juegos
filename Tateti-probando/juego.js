
class Tateti{

constructor(){
}
printearTablero(){
    
    let tablero = document.getElementById("cont");
    let tablero_juego = new TableroTateti();
    tablero.innerHTML = tablero_juego.printear();

    

}

comprobarGanador(){
    
    let cont = document.getElementById("cont-num");
    clearInterval(inetrvalo);
let ganadorx = ` <div id="ganadorx">Gano Usuario1!</div>`;
let ganadoro = ` <div id="ganadoro">Gano Usuario2!</div>`;
let ganador = new GanadorTateti();
    
    if(ganador.preguntarGanador() == 1 && bandera_ganador){ 
        cont.classList.remove("cont_num");
        cont.classList.remove("cont_titulo");
        cont.classList.add("cont_ganador");
  
        cont.style.display = "flex";
        cont.innerHTML = ganadorx;
        puntos_user1++;
        let cont_puntos1 = document.querySelector(".puntos1");
        cont_puntos1.innerHTML = puntos_user1;
        const jsConfetti = new JSConfetti()
        jsConfetti.addConfetti()
        bandera_ganador = false;
        return true;
       
        
        
   

    }

    if(ganador.preguntarGanador() == 0 && bandera_ganador) {
        cont.classList.remove("cont_num");
        cont.classList.remove("cont_titulo");
        cont.classList.add("cont_ganador");
        
        cont.style.display = "flex";  
        cont.innerHTML = ganadoro;
        puntos_user2++;
        let cont_puntos2 = document.querySelector(".puntos2");
        cont_puntos2.innerHTML = puntos_user2;
        const jsConfetti = new JSConfetti()
        jsConfetti.addConfetti()
        bandera_ganador = false;
        return true;
    }

};
clickJugador(){
    
    let jugador = new JugadorTateti();
    
 
    if(jugador.jugador1.turno){
        jugador.turnoJugador1();
        };
        if(jugador.jugador2.turno){
        jugador.turnoJugador2();
        };
}

botonReiniciar(){

let reiniciar = document.createElement("button");
reiniciar.classList.add("reiniciar");
cont.insertAdjacentElement("beforeend", reiniciar);
reiniciar.innerHTML = "Reiniciar";

}
};
