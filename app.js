let numeroSecreto = 0;
let intentos = 0;
let intentosUsuario = [];
let numeroMaximo = 10;

console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function verificarIntento() {
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);

    console.log(intentos);
    if (numeroUsuario === numeroSecreto) {
        asignarTextoElemento("h1", `¡Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}!`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        // El usuario no acertó
        if (numeroUsuario > numeroSecreto) {
            asignarTextoElemento("p", "El número secreto es menor.");
        } else {
            asignarTextoElemento("p", "El número secreto es mayor.");
        }
        intentos++;
        intentosUsuario.push(numeroUsuario);
        limpiarCaja();
        mostrarIntentos();
    }
}

function limpiarCaja() {
    document.getElementById('valorUsuario').value = '';
}
if(intentosUsuario.length == numeroMaximo){
    asignarTextoElemento("p","ya se sortearon los numeros posibles");
}

function mostrarIntentos() {
    console.log("Intentos del usuario: ", intentosUsuario);
}

function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del número secreto');
    asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    intentosUsuario = [];
    mostrarIntentos();
}

function reiniciarJuego() {
    // Limpiar caja
    limpiarCaja();
    // Indicar mensaje de intervalo de números
    // Inicializar el número de intentos y generar un nuevo número secreto
    condicionesIniciales();
    // Deshabilitar el botón de nuevo juego después de reiniciar
    document.getElementById('reiniciar').setAttribute('disabled', 'true');
}

function generarNumeroSecreto() {
    return Math.floor(Math.random() * numeroMaximo) + 1;
}

// Llamada inicial a las condiciones iniciales
condicionesIniciales();
