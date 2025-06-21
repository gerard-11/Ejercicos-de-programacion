const sectionSeleccionarAtaque= document.getElementById("seleccionar-ataque")
const sectionReiniciar= document.getElementById(" reiniciar")
const botonMascotaJugador= document.getElementById ("boton-mascota")
sectionReiniciar.style.display= "none"

const botonReiniciar= document.getElementById ("boton-reiniciar")

const sectionSeleccionarMascota= document.getElementById("seleccionar-mascota")
const spanMascotaJugador= document.getElementById("mascota-jugador")

const spanMascotaEnemigo= document.getElementById ("mascota-enemigo") 

const spanVidasJugador= document.getElementById("vidas-jugador")
const spanVidasEnemigo= document.getElementById("vidas-enemigo")

const sectionMensajes= document.getElementById("resultado")
const ataquesDelJugador= document.getElementById("ataques-del-jugador")
const ataquesDelEnemigo= document.getElementById("ataques-del-enemigo")
const contenedorTarjetas= document.getElementById("contenedorTarjetas")
const contenedorAtaque= document.getElementById("contenedorAtaques")

let Perripones=[]
let ataqueJugador=[]
let ataqueEnemigo=[]
let opcionDePerripones
let inputTalachas
let inputEnano
let inputChispon
let mascotaJugador
let ataquesPerripon
let ataquesPerriponEnemigo
let botonFuego
let botonAgua
let botonTierra
let botones=[]
let indexAtaqueJugador
let indexAtaqueEnemigo
let victoriasJugador=0
let victoriasEnemigo=0
let vidasJugador= 3
let vidasEnemigo= 3

class Perripon{
    constructor(nombre, foto, vida){
        this.nombre=nombre
        this.foto=foto
        this.vida=vida
        this.ataques=[]
    }
    
}

let Talachas= new Perripon("Talachas", ".js/imgmoke/Talachas.jpg", 5)

let Enano= new Perripon("Enano", ".js/imgmoke/enano.jpg", 5)

let Chispon= new Perripon("Chispon", ".js/imgmoke/chispon.jpg", 5)

Talachas.ataques.push(
    {nombre:"💧", id:"boton-agua" },
    {nombre:"💧", id:"boton-agua" },
    {nombre:"💧", id:"boton-agua" },
    {nombre:"🌱", id:"boton-tierra" },
    {nombre:"🔥", id:"boton-fuego" },

)

Enano.ataques.push(
    {nombre:"🌱", id:"boton-tierra" },
    {nombre:"🌱", id:"boton-tierra" },
    {nombre:"🌱", id:"boton-tierra" },
    {nombre:"💧", id:"boton-agua" },
    {nombre:"🔥", id:"boton-fuego" },
)

Chispon.ataques.push(
    {nombre:"🔥", id:"boton-fuego" },
    {nombre:"🔥", id:"boton-fuego" },
    {nombre:"🔥", id:"boton-fuego" },
    {nombre:"💧", id:"boton-agua" },
    {nombre:"🌱", id:"boton-tierra" },
)

Perripones.push(Talachas,Enano,Chispon)

function iniciarJuego(){
   
    sectionSeleccionarAtaque.style.display= "none"
    
    Perripones.forEach((perripon)=> {
        opcionDePerripones= `
        <input type = "radio" name=" mascota"  id= ${perripon.nombre} />
        <label class="tarjeta-de-mokepon" for=${perripon.nombre}>
                <p>${perripon.nombre}</p>
                <img src=${perripon.foto} alt=${perripon.nombre}>
        </label>`
    
        contenedorTarjetas.innerHTML+= opcionDePerripones

       inputTalachas= document.getElementById("Talachas")
       inputEnano= document.getElementById ("Enano")
       inputChispon= document.getElementById("Chispon")

    })

    botonMascotaJugador.addEventListener( "click", seleccionarMascotajugador)

   botonReiniciar.addEventListener("click", reiniciarJuego)

}

function seleccionarMascotajugador(){
   

    if(inputTalachas.checked ){
       spanMascotaJugador.innerHTML=inputTalachas.id
       mascotaJugador=inputTalachas.id
    }else if( inputEnano.checked){
      spanMascotaJugador.innerHTML=inputEnano.id
      mascotaJugador=inputEnano.id
    }else if(inputChispon.checked){
        spanMascotaJugador.innerHTML=inputChispon.id
        mascotaJugador=inputChispon.id
    } else{
         alert("Selecciona una mascota")
         return;
    } 
    sectionSeleccionarMascota.style.display= "none"

    
    sectionSeleccionarAtaque.style.display= "flex"
    
   extraerAtaques(mascotaJugador)

   seleccionarMascotaEnemigo()

}

function extraerAtaques(mascotaJugador){
    let ataques
    for(let i= 0; i < Perripones.length; i++){
        if(mascotaJugador === Perripones[i].nombre){
            ataques = Perripones[i].ataques
        }

    }
    mostrarAtaques(ataques)

}

function mostrarAtaques(ataques){
    ataques.forEach((ataque) => {
        ataquesPerripon= `
         <button id=${ataque.id} class="boton-de-ataque  BAtaque">${ataque.nombre}
         </button> `
         
    contenedorAtaque.innerHTML+= ataquesPerripon

    })
    
    botonFuego=document.getElementById("boton-fuego")
    botonAgua=document.getElementById("boton-agua")
    botonTierra=document.getElementById("boton-tierra")
    botones=document.querySelectorAll(".BAtaque")

    
}

function secuenciaAtaque(){
    botones.forEach((boton) =>{
        boton.addEventListener("click", (e) => {
            if (e.target.textContent.trim() ==="💧"){
                ataqueJugador.push("AGUA")
                console.log(ataqueJugador)
                boton.style.background= "#112f58"
                boton.disabled= true
            } else if(e.target.textContent.trim() ==="🔥"){
                ataqueJugador.push("FUEGO")
                console.log(ataqueJugador)
                boton.style.background= "#112f58"
                boton.disabled= true
            }else{ 
                 ataqueJugador.push("TIERRA")
                console.log(ataqueJugador)
                boton.style.background= "#112f58"
                boton.disabled= true

            }
            ataqueAleatorioEnemigo()
        })
    }) 
    
}

function seleccionarMascotaEnemigo(){
    let mascotaAleatorio= aleatorio(0,Perripones.length -1)
    

    spanMascotaEnemigo.innerHTML= Perripones[mascotaAleatorio].nombre
    ataquesPerriponEnemigo=Perripones[mascotaAleatorio].ataques
    secuenciaAtaque()
}


function ataqueAleatorioEnemigo(){
    let ataqueAleatorio= aleatorio(0,ataquesPerriponEnemigo.length -1)
    
    if(ataqueAleatorio == 0 || ataqueAleatorio == 1){
        ataqueEnemigo.push ("FUEGO")
    }else if (ataqueAleatorio== 3 || ataqueAleatorio== 4){
        ataqueEnemigo.push ("TIERRA")
    } else {
        ataqueEnemigo.push ("AGUA")
    }
    console.log(ataqueEnemigo)
    iniciarPelea()
        
}

function iniciarPelea(){
    if (ataqueJugador.length === 5){
        combate()
    }

}
 function indexAmbosJugadores(jugador,enemigo){
        indexAtaqueJugador= ataqueJugador[jugador]
        indexAtaqueEnemigo= ataqueEnemigo[enemigo]

 }

function combate() {

    for(let index = 0; index < ataqueJugador.length; index++){
        if (ataqueJugador[index] === ataqueEnemigo[index]){
            indexAmbosJugadores(index, index)
            crearMensaje("EMPATE")

        
    } else if (ataqueJugador[index]=== "FUEGO" && ataqueEnemigo[index]=== "TIERRA"){
            indexAmbosJugadores(index, index)
            crearMensaje ("GANASTE")
            victoriasJugador++
            spanVidasJugador.innerHTML= victoriasJugador
    } else if (ataqueJugador[index]=== "TIERRA" && ataqueEnemigo[index]=== "AGUA" ){
             indexAmbosJugadores(index, index)
            crearMensaje ("GANASTE")
            victoriasJugador++
            spanVidasJugador.innerHTML= victoriasJugador
    } else if (ataqueJugador[index]=== "AGUA" && ataqueEnemigo[index]=== "FUEGO") {
             indexAmbosJugadores(index,index)
            crearMensaje ("GANASTE")
            victoriasJugador++
            spanVidasJugador.innerHTML= victoriasJugador
    } else {
        indexAmbosJugadores(index, index)
            crearMensaje ("PERDISTE")
           victoriasEnemigo++
            spanVidasEnemigo.innerHTML= victoriasEnemigo
            
        }
    }
        revisarVictorias()
}


function revisarVictorias(){
    if( victoriasEnemigo=== victoriasJugador){
        crearMensajeFinal( " ESTO ES UN EMPATE")
    }else if ( victoriasJugador > victoriasEnemigo ){
        crearMensajeFinal(" FELICIDADES!!, GANASTE :)")
    } else{
        crearMensajeFinal(" LO SENTIMOS, PERDISTE")

    }
}

function crearMensaje(resultado){
  

    let nuevoAtaqueDelJugador=document.createElement("p")
    let nuevoAtaqueDelEnemigo=document.createElement("p")

    sectionMensajes.innerHTML= resultado
    nuevoAtaqueDelJugador.innerHTML= indexAtaqueJugador
    nuevoAtaqueDelEnemigo.innerHTML= indexAtaqueEnemigo
    

    ataquesDelJugador.appendChild(nuevoAtaqueDelJugador)
    ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
}

function crearMensajeFinal(resultadoFinal){
    

   sectionMensajes.innerHTML= resultadoFinal

   
    sectionReiniciar.style.display= "block"
}

function reiniciarJuego(){
    location.reload()
}



function aleatorio( min, max){
    return Math.floor(Math.random() * (max - min + 1) + min )
}

window.addEventListener("load", iniciarJuego)