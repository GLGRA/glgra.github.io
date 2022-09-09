let ataqueJugador 
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3

function iniciarJuego() {
//Con este comando estamos escondiendo al usuario la sección de seleccionar ataque.
    let sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque")
    sectionSeleccionarAtaque.style.display = "none"

//Con este comando estamos escondiendo al usuario el boton de reiniciar.
    let sectionReiniciar = document.getElementById("reiniciar")
    sectionReiniciar.style.display = "none"
    
    let botonMascotaJugador = document.getElementById("boton-monsters")
    botonMascotaJugador.addEventListener("click", seleccionarMonstruoJugador)

    let botonFuego = document.getElementById("boton-fuego")
    botonFuego.addEventListener("click", ataqueFuego)
    let botonAgua = document.getElementById("boton-agua")
    botonAgua.addEventListener("click", ataqueAgua)
    let botonTierra = document.getElementById("boton-tierra")
    botonTierra.addEventListener("click", ataqueTierra)

    let botonReiniciar = document.getElementById("boton-reiniciar")
    botonReiniciar.addEventListener("click", reiniciarJuego)
}

function seleccionarMonstruoJugador(){
//Con este comando estamos escondiendo al usuario la sección de seleccionar monstruo.
    let sectionSeleccionarMonstruo = document.getElementById("seeccionar-monstruo")
    sectionSeleccionarMonstruo.style.display = "none"

//Con este comando estamos mostrando al usuario la sección de seleccionar ataque.
    let sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque")
    sectionSeleccionarAtaque.style.display = "block"

    let inputVulcano = document.getElementById("vulcano")
    let inputSharknado = document.getElementById("sharknado")
    let inputMoledor = document.getElementById("moledor")
    let spanMonstruoJugador = document.getElementById ("monstruo-jugador")
    let botonMascotaJugador = document.getElementById("boton-monsters")

    if (inputVulcano.checked) {
        spanMonstruoJugador.innerHTML = "Vulcano"
    }
    else if (inputSharknado.checked) {
        spanMonstruoJugador.innerHTML = "Sharknado"
    }
    else if (inputMoledor.checked) {
        spanMonstruoJugador.innerHTML = "Moledor"
    }
    else {
        alert("¡Selecciona tu monstruo!")
    }

    inputVulcano.disabled = true
    inputSharknado.disabled = true
    inputMoledor.disabled = true
    botonMascotaJugador.disabled = true
    

    seleccionarMonstruoEnemigo()
}

function seleccionarMonstruoEnemigo() {
    let monstruoAleatorio = aleatorio (1,3)
    let spanMonstruoEnemigo = document.getElementById ("monstruo-enemigo")

    if (monstruoAleatorio == 1) {
        spanMonstruoEnemigo.innerHTML = "Vulcano"
    } else if (monstruoAleatorio == 2) {
        spanMonstruoEnemigo.innerHTML = "Sharknado"
    } else {
        spanMonstruoEnemigo.innerHTML = "Moledor"
    }

}

function ataqueFuego(){
    ataqueJugador = "FUEGO🔥"
    ataqueAleatorioEnemigo()
}

function ataqueAgua(){
    ataqueJugador = "AGUA💧"
    ataqueAleatorioEnemigo()
}

function ataqueTierra(){
    ataqueJugador = "TIERRA🌿"
    ataqueAleatorioEnemigo()
}

function ataqueAleatorioEnemigo() {

    let ataqueAleatorio = aleatorio (1,3) 

    if (ataqueAleatorio == 1) {
        ataqueEnemigo = "FUEGO🔥"
    } else if (ataqueAleatorio == 2) {
        ataqueEnemigo = "AGUA💧"
    } else {
        ataqueEnemigo = "TIERRA🌿"
    }

    combate ()
}

function combate () {
    let spanVidasJugador = document.getElementById("vidasJugador")
    let spanVidasEnemigo = document.getElementById("vidasEnemigo")
    
    if (ataqueEnemigo == ataqueJugador) {
        crearMensaje("EMPATE 😑")
    } else if ((ataqueJugador == "FUEGO🔥" && ataqueEnemigo == "TIERRA🌿") || (ataqueJugador == "AGUA💧" && ataqueEnemigo == "FUEGO🔥") || (ataqueJugador == "TIERRA🌿" && ataqueEnemigo == "AGUA💧")) {
        crearMensaje("GANASTE!! 🎉😎")
        vidasEnemigo --
        spanVidasEnemigo.innerHTML = vidasEnemigo
    }  else {
        crearMensaje("PERDISTE! 😵")
        vidasJugador --
        spanVidasJugador.innerHTML = vidasJugador
    }   
    conteoVidas()
}

function conteoVidas() {

    if (vidasEnemigo == 0) {
        crearMensajeFinal("Ganaste el juego!! 🎉🥳🍾")
    } else if (vidasJugador == 0) {
        crearMensajeFinal("Perdiste el juego 😵😭")
    }

}

function crearMensajeFinal(resultadoFinal) {
    let sectionMensajes = document.getElementById("mensajes")

    let parrafo = document.createElement("p")
    parrafo.innerHTML = resultadoFinal
    
    sectionMensajes.appendChild(parrafo)
    
    let botonFuego = document.getElementById("boton-fuego")
    botonFuego.disabled = true
    let botonAgua = document.getElementById("boton-agua")
    botonAgua.disabled = true
    let botonTierra = document.getElementById("boton-tierra")
    botonTierra.disabled = true


//Con este comando estamos mostrando al usuario el boton de reiniciar.
    let sectionReiniciar = document.getElementById("reiniciar")
    sectionReiniciar.style.display = "block"
}

function crearMensaje(resultado) {
    let sectionMensajes = document.getElementById("mensajes")

    let parrafo = document.createElement("p")
    parrafo.innerHTML = "Tu monstruo atacó con " + ataqueJugador + ", el monstruo del enemigo atacó con " + ataqueEnemigo + " - " + resultado

    sectionMensajes.appendChild(parrafo)

}

function reiniciarJuego() {
    location.reload()
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min +1) + min)
}

window.addEventListener("load", iniciarJuego)