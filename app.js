let nummeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto) {
    let etiquetHTML = document.querySelector(elemento);
    etiquetHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log(nummeroSecreto);
    if (numeroUsuario === nummeroSecreto) {
        asignarTextoElemento('p', `Acertaste el número en ${intentos} ${(intentos ===1) ? 'intento' : 'intentos'}!`);
        document.getElementById('reiniciar').removeAttribute( "disabled" ); 
    } else {
        if (numeroUsuario > nummeroSecreto) {
            asignarTextoElemento('p','El número es menor')
        } else {
            asignarTextoElemento('p', 'El número es mayor')
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function generarNumeroSecreto() {
    let numeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1;
    if (listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p', 'Ya se sortearon todos  los números posibles');
    } else {
        if (listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto()
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
    }
    
}
}

function condicionesIniciales(){
    asignarTextoElemento('h1', 'Juego del numero secreto')
    asignarTextoElemento('p', `Selecciona un número del 1 al ${numeroMaximo}`);
    nummeroSecreto   = generarNumeroSecreto()
    intentos=1;
}
function limpiarCaja(){
    document.querySelector('#valorUsuario').value=''
}
function reiniciarJuego(){
    limpiarCaja();
    condicionesIniciales()
    document.querySelector('#reiniciar').setAttribute( "disabled", "true");  
}

condicionesIniciales();