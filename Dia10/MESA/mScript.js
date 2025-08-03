// Creamos un
let deckID = null;

let nUser1 = prompt("P1. NickName here: ");
let nUser2 = prompt("P2. NickName here: ");

// Creo los arrays que guardarán las cartas de cada  jugador
let cartas1 = [];
let cartas2 = [];


function iniciarJuego() {

    const xhr = new XMLHttpRequest();

    // Le agregué el "?jokers...." para que me diera cartas de jokers
    // Para poder cumplir con la regla de 54 cartas del juego
    const url = 'https://deckofcardsapi.com/api/deck/new/shuffle/?jokers_enabled=true';

    xhr.open("GET", url);


    // Especifico que la respuesta debe ser en formato json para poder usarlo después (buenas prácticas Pedrito)
    xhr.responseType = 'json'

    xhr.onload = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {

            // Guardo la respuesta de la API en mi variable "daticos"
            const daticos = xhr.response;


            // Guardo el id de la baraja en esta variable
            deckID = daticos.deck_id;
            console.log(`ID del mazo: ${deckID}`);

            barajeo(deckID);

        }
        else {
            alert("Vaya... Parece que hubo un error.")
        }
    }
    xhr.send();
}

function mostrarMazo(contenedorID, jugador) {

    // Creo una variable para obtener el div donde pondré la imagen de las cartas.
    const contenedor = document.getElementById(contenedorID);

    // Acá estoy vaciando esa variable por si llegara a tener algún tipo de dato adentro
    contenedor.innerHTML = '';

    const imgMazo = document.createElement('img');

    imgMazo.src = "https://deckofcardsapi.com/static/img/back.png";

    imgMazo.classList.add('mazo-visual');

    imgMazo.id = `mazo-${jugador}`;

    contenedor.appendChild(imgMazo);

    // Tengo que poner un escuchador de eventos para cuando el jugador quiera lanzar una carta.
    imgMazo.addEventListener('click', () => jugarCarta(jugador))
}


function barajeo(deckID) {
    const xhr = new XMLHttpRequest();

    const url = `https://deckofcardsapi.com/api/deck/${deckID}/draw/?count=54`

    xhr.open("GET", url);

    xhr.responseType = 'json';

    xhr.onload = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            // Con esto consigo las cartas de la API
            const datos = xhr.response;

            cartas1 = datos.cards.slice(0, 27);
            console.log(`Cartas del jugador 1: `, cartas1)
            cartas2 = datos.cards.slice(27, 54);
            console.log(`Cartas del jugador 2: `, cartas2);

            console.log("El reparto ha sido completado, listos para empezar!");

            mostrarMazo('mazoUno', 1);
            mostrarMazo('mazoDos', 2);
        }
        else {
            console.error('Error al repartir las cartas.');
        }
    }
    xhr.send();
}


// En estas variables voy a guardar la carta que lancen los jugadores
let cartaMesa1 = null;
let cartaMesa2 = null;


function jugarCarta(jugador) {
    let cartaJugada;
    let contenedorMesa;
    let arrayCartas;


    // acá le asigno el array que debe utilizar para las cartas, y le digo en qué elemento o div poner la imagen de la carta.
    if (jugador === 1) {
        arrayCartas = cartas1;
        contenedorMesa = document.getElementById('tiroUno');
    }
    else {
        arrayCartas = cartas2;
        contenedorMesa = document.getElementById('tiroDos');
    }


    // GUERRA
    if (estoEsGuerraaa === true) {
        // Acá lo que hago es decir que si no tienen por lo menos 2 cartas, no pueden participar en la guerra
        if (arrayCartas.length < 2) {
            alert(`El jugador ${jugador} no tiene cartas para la Guerra.`);
            return;
        }
        // acá saco la primera carta boca abajo y la añado a las cartas que están en guerra
        guerraCartas.push(arrayCartas.shift());

        // Tomo la segunda carta que es la que necesito para hacer la comparación
        cartaJugada = arrayCartas.shift();
    }
    else {
        // miro que no esté el mazo vacio
        if (arrayCartas.length > 0) {
            cartaJugada = arrayCartas.shift();
        }
        else {
            alert(`El jugador ${jugador} se ha quedado sin cartas, Game Over baby.`);
            gameOver()
            return;
        }
    }

    // después de cada guerra o ronda normal
    contenedorMesa.innerHTML = '';
    const imgCarta = document.createElement('img');
    imgCarta.src = cartaJugada.image;
    imgCarta.classList.add('carta-en-mesa');
    contenedorMesa.appendChild(imgCarta);

    
    const contenedorMazo = document.getElementById(`mazo-${jugador}`);

    // si no quedan cartas en el mazo elimino la imagen que haya
    if (arrayCartas.length === 0) {
        contenedorMazo.innerHTML = '';
        gameOver();
    }


    if (jugador === 1) {
        cartaMesa1 = cartaJugada;
    }
    else {
        cartaMesa2 = cartaJugada;
    }

    // Si cada jugador ya puso una carta en la mesa, hacer =>
    if (cartaMesa1 && cartaMesa2) {
        compararCartas()
    }
}


// Coloco una bandera para saber si hay un empate (guerra)
let estoEsGuerraaa = false;
// En este array voy fuardando las cartas que hayan en la mesa
let guerraCartas = [];

function compararCartas() {
    // Primero creo una función para poder devolver el valor de la carta en un Nmro

    function obtenerValor(carta) {
        const valor = carta.value;
        if (valor === "ACE") {
            return 14;
        }
        else if (valor === "KING") {
            return 13;
        }
        else if (valor === "QUEEN") {
            return 12;
        }
        else if (valor === "JACK") {
            return 11;
        }
        else if (valor === "JOKER") {
            return 10;
        }
        return parseInt(valor);
    }

    const valor1 = obtenerValor(cartaMesa1);
    const valor2 = obtenerValor(cartaMesa2);
    const mensajeElemento = document.getElementById('mensaje-ronda');

    if (valor1 > valor2) {
        mensajeElemento.textContent = `Ronda ganada por: ${nUser1}`;

        // Ahora tengo que añadir las cartas que se estaban jugando, al monto de cartas ganadas del jugador 1
        cartas1.push(cartaMesa1, cartaMesa2, ...guerraCartas)
        guerraCartas = [];
        estoEsGuerraaa = false;  
        setTimeout(limpiarMesa, 2000); 
    }
    else if (valor2 > valor1) {
        mensajeElemento.textContent = `Ronda ganada por: ${nUser2}`;

        cartas2.push(cartaMesa1, cartaMesa2, ...guerraCartas);
        guerraCartas = [];
        estoEsGuerraaa = false;
        setTimeout(limpiarMesa, 2000);
    }
    else {
        mensajeElemento.textContent = "¡Guerra!";

        guerraCartas.push(cartaMesa1, cartaMesa2);
        estoEsGuerraaa = true
    }

    console.log(`${nUser1} tiene ${cartas1.length} cartas en su mazo.`)
    console.log(`${nUser2} tiene ${cartas2.length} cartas en su mazo.`)

}

// Creo esta función para limpiar la mesa
function limpiarMesa() {
    // Acá limpio los divs 
    document.getElementById('tiroUno').innerHTML = '';
    document.getElementById('tiroDos').innerHTML = '';
    // Aquíu limpio el mensaje que contenga (mensaje-ronda)
    document.getElementById('mensaje-ronda').textContent = '';

    // Reiniciamos las variables de las cartas que lanzaron a la mesa
    cartaMesa1 = null;
    cartaMesa2 = null;

}

function gameOver() {
    if (cartas1.length === 0) {
        alert(`¡GAME OVER! Felicidades ${nUser2}, has ganado.`);
    } else if (cartas2.length === 0) {
        alert(`¡GAME OVER! Felicidades ${nUser1}, has ganado.`);
    }
}


iniciarJuego();