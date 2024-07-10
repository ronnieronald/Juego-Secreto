//codigo R
let Nombre = prompt('Indicame tu Nombre')
alert(`¡Hola ${Nombre}!, Empecemos a jugar  `)
let numeroSecreto = 0;
let intentos = 0;
let numerosSorteados = [];
let numeroMaximo = 10;


function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function  verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    if (numeroDeUsuario == numeroSecreto) {
        asignarTextoElemento('p' , `¡Genial ${Nombre}!, Acertaste el numero en ${intentos}  ${(intentos === 1) ? 'vez' : 'veces' }`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        // Si el usuario no acerto
        if (numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p','El numero secreto es menor');
        } else {
            asignarTextoElemento('p','El numero secreto es mayor')
        }
        intentos++;
        limpiarCaja();
    }
    return;
}
function limpiarCaja() {
     document.querySelector('#valorUsuario').value = '';
     
}
function generarNumeroSecreto() {
     let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
     //si ya sorteamos todos los numeros.

     if (numerosSorteados.length == numeroMaximo){
     asignarTextoElemento('p',`Ya se sortearon todos los numeros`)
     }else {
     //Si el numero generado esta en la lista.
     if (numerosSorteados.includes(numeroGenerado)) {
        return generarNumeroSecreto();

     } else {
        numerosSorteados.push(numeroGenerado);
        return numeroGenerado;
     }
   }
}

function condicionesIniciales() { 
    asignarTextoElemento('h1', 'Juego del numero secreto');
    asignarTextoElemento('p', `Escoge un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;

}


function reiniciarJuego() {
    // Limpiar caja
     limpiarCaja();
    // indicar mensaje de intervalo
    // generar el numero alertorio   
    // inicialiozar eñ numero de intentos
    condicionesIniciales();
    // desabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');

}

condicionesIniciales();