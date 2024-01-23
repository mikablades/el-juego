let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);

    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento("p", `Acertaste el número en ${intentos} ${(intentos === 1) ? "intento" : "intentos"}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //el usuario no certo
        if (numeroDeUsuario < numeroSecreto) {
            asignarTextoElemento("p", "el numero secreto es mayor");
        } else {
            asignarTextoElemento("p", "el numero secreto es menor");
        }
        intentos++;
        limpiarCaja();
    }
    return;
}
function limpiarCaja() {
    document.querySelector("#valorUsuario").value = "";
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p', 'Ya se sortearon todos los numeros posibles');
    } else {
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales() {
    asignarTextoElemento("p", `Indica un numero del 1 al ${numeroMaximo}`);
    intentos = 1;
    numeroSecreto = generarNumeroSecreto();
    asignarTextoElemento("h1", "Juego del numero secreto");
}
function reiniciarJuego() {
    limpiarCaja();
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}
condicionesIniciales();
