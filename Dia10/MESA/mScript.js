// Creamos un
let deckID = null;


// Creo los arrays que guardarán las cartas de cada  jugador
let cartas1 = [];
let cartas2 = [];


function iniciarJuego() {
    
    const xhr = new XMLHttpRequest();

    // Le agregué el "?jokers...." para que me diera cartas de jokers
    // Para poder cumplir con la regla de 56 cartas del juego
    const url = 'https://deckofcardsapi.com/api/deck/new/shuffle/?jokers_enabled=true';

    xhr.open("GET", url);


    // Especifico que la respuesta debe ser en formato json para poder usarlo después (buenas prácticas Pedrito)
    xhr.responseType = 'json'

    xhr.onload = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {

            // Guardo la respuesta de la API en mi variable "daticos"
            const daticos = xhr.response;
            console.log("mazo de 56 cartas creado")


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

function barajeo(deckID) {
    const xhr = new XMLHttpRequest();

    const url = `https://deckofcardsapi.com/api/deck/${deckID}/draw/?count=56`

    xhr.open("GET", url);

    xhr.responseType = 'json';
    
    xhr.onload = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            // Con esto consigo las cartas de la API
            const datos = xhr.response;
            
            cartas1 = datos.cards.slice(0, 27);
            console.log(`Cartas del jugador 1: `, cartas1)
            cartas2 = datos.cards.slice(27, 54);
            console.log(`Cartas del jugador 2: `, cartas2);

            console.log("El reparto ha sido completado, listos para empezar!");
        }
        else {
            console.error('Error al repartir las cartas.');
        }
    }
    xhr.send();
}


iniciarJuego();