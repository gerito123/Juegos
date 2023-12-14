

window.addEventListener("load", ()=>{

boton.addEventListener("click", (e)=>{
//e.preventDefault();

console.log("TOCASTE DALE");

usuario1 = usuario1.value;
usuario2 = usuario2.value;


/*let cont_user1 = `<div class='users' id='user1'>${usuario1} ${puntos_user1}</div>`
let cont_user2 = `<div class='users' id='user2'>${usuario2} ${puntos_user2}</div>`

cont.insertAdjacentHTML("afterbegin", cont_user1);
cont.insertAdjacentHTML("afterbegin", cont_user2);

*/

let cont_jug1 = document.querySelector(".jugador1");
let cont_jug2 = document.querySelector(".jugador2");
let cont_puntos1 = document.querySelector(".puntos1");
let cont_puntos2 = document.querySelector(".puntos2");

cont_jug1.innerHTML = usuario1;
cont_jug2.innerHTML = usuario2;
cont_puntos1.innerHTML = puntos_user1;
cont_puntos2.innerHTML = puntos_user2

cont_usuarios.style.display = "none";


});

inicio_menu.addEventListener("click", (e)=>{

  

  let cont_jug1 = document.querySelector(".jugador1");
  let cont_jug2 = document.querySelector(".jugador2");
  let cont_puntos1 = document.querySelector(".puntos1");
  let cont_puntos2 = document.querySelector(".puntos2");
  let cont = document.getElementById("cont"); 
  let login = '<div id="cont-usuarios">\
  <p>Ingresar Jugadores</p>\
  <input type="text" placeholder="Jugador1" id="usuario1" class="jugador-login">\
  <input type="text" placeholder="jugador2" id="usuario2" class="jugador-login">\
  <input type="button"  id="boton" value=""></div>';

  document.getElementById("cont-num").style.display = "none";
  document.querySelector(".reiniciar").style.display = "none";
   
  cont.innerHTML = login;

  usuario1 = "";
  usuario2 = "";

  cont_jug1.innerHTML = "";
  cont_jug2.innerHTML = "";
  cont_puntos1.innerHTML = "";
  cont_puntos2.innerHTML = "";

  let boton = document.getElementById("boton");

  boton.addEventListener("click", (e)=>{
    //e.preventDefault();
    console.log("TOCASTE DALE");
  
    let usuario1 = document.getElementById("usuario1"); 
    let usuario2 = document.getElementById("usuario2");

    usuario1 = usuario1.value;
    usuario2 = usuario2.value;
    
    
    /*let cont_user1 = `<div class='users' id='user1'>${usuario1} ${puntos_user1}</div>`
    let cont_user2 = `<div class='users' id='user2'>${usuario2} ${puntos_user2}</div>`
    
    cont.insertAdjacentHTML("afterbegin", cont_user1);
    cont.insertAdjacentHTML("afterbegin", cont_user2);
    
    */
    
    let cont_jug1 = document.querySelector(".jugador1");
    let cont_jug2 = document.querySelector(".jugador2");
    let cont_puntos1 = document.querySelector(".puntos1");
    let cont_puntos2 = document.querySelector(".puntos2");
    
    cont_jug1.innerHTML = usuario1;
    cont_jug2.innerHTML = usuario2;
    cont_puntos1.innerHTML = puntos_user1;
    cont_puntos2.innerHTML = puntos_user2
    
    cont_usuarios.style.display = "none";
    
    
    });
      
    
});
let bandera_puntos = false;
puntuacion.addEventListener("click", ()=>{
  console.log(bandera_puntos);
  bandera_puntos = !bandera_puntos;
  if(bandera_puntos){
  cont_puntos.style.display = "grid";

}
if(!bandera_puntos){
 

  cont_puntos.style.display = "none"

}


});
buscar.addEventListener("keyup", (e)=>{
  console.log(e.key);
  if(e.key == 'Enter'){
    console.log(buscar.value);
    let texto = buscar.value;
    texto = texto.trim();
    texto = texto.toLowerCase();

    if(texto == "bingo"){
      e.preventDefault();
      document.getElementById("cont-num").style.display = "none";
    
     LlamarBingo();
    }
    if(texto == "tateti" || texto == "ta te ti"){
      e.preventDefault();
      document.getElementById("cont-num").style.display = "none";
      clearInterval();
      LlamarTateti();
    }
  }
});

juegos.addEventListener("click", ()=>{
    let height = 0;
    if(menus_juegos.clientHeight == "0"){
    height = menus_juegos.scrollHeight;
  }
  menus_juegos.style.height = `${height}px`;
  menus_juegos.style.transition = "0.5s";
});





tateti.addEventListener("click", (e)=>{
    e.preventDefault();
    let cont = document.getElementById("cont");
    cont.classList.remove(".cont_bingo")
    cont.classList.add(".cont_tateti");
    LlamarTateti();
    let reiniciar = document.querySelector(".reiniciar");
    reiniciar.addEventListener("click", ()=>{
      LlamarTateti();
    });
    
});

bingo.addEventListener("click", (e)=>{
  e.preventDefault();
  LlamarBingo();     
  let reiniciar = document.querySelector(".reiniciar");
  reiniciar.addEventListener("click", ()=>{
    LlamarBingo();
  });                             
})
let bandera = false;
boton_responsive.addEventListener("click", ()=>{
  /*let height = 0;
  if(cont_submenu.clientHeight == "0"){
  height = cont_submenu.scrollHeight;

}
cont_submenu.style.height = `${height}px`;
*/

if(bandera){
cont_submenu.style.display = "flex";
bandera = !bandera;
}
else{
  cont_submenu.style.display = "none";
  bandera = !bandera;
}


})

});
let bandera = 0;

function LlamarTateti() {

      document.getElementById("cont-num").style.display = "none";
    clearInterval();
    let juego = new Tateti();
    juego.printearTablero();
    juego.clickJugador();
    juego.comprobarGanador();
    if(bandera == 0){
    juego.botonReiniciar();
    bandera++;
  }

}

function LlamarBingo(){
  document.getElementById("cont-num").style.display = "none";
  let juego = new Bingo();

  juego.dibujarTablero();
  juego.dibujarNumero();
  juego.dibujarNumeroBot();
  juego.detectarNumero();
  juego.confirmarGanador();
  if(bandera == 0){
    juego.botonReiniciar();
    bandera++;
  }
}