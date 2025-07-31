function buscarPokemon(pokemonValue) {

    const pokemon = String(pokemonValue).toLowerCase();

    // Guardo la URL dentro de una variable
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
    

    // Inicializo esto para poder iniciar una comunicación con la API
    const xhr = new XMLHttpRequest();

    xhr.open("GET", url, true);

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {

            const daticos = JSON.parse(xhr.responseText);

            // Obtengo los elementos que necesito de mi HTML
            const pokemonImagen = document.querySelector('.pokemon');
            const pokemonNombre = document.querySelector('.nombrePokemon span:first-child');
            const pokemonId = document.querySelector('.nombrePokemon span:last-child');


            // Creamos un elemento de tipo "img", para poder guardar la foto del pokemon
            const imgPokemon = document.createElement('img');
            imgPokemon.src = daticos.sprites.front_default;


            // Limpio el div para poder agregar una nueva imagen
            pokemonImagen.innerHTML = "";
            pokemonImagen.appendChild(imgPokemon);

            // Limpio el texto del nombre yu el id también
            pokemonNombre.innerText = daticos.name;
            pokemonId.innerText = `- ${daticos.id}`

            pokeID = daticos.id;
            
        }
    }

    xhr.send();


}




const input = document.getElementById('inputAtari');

input.addEventListener('keydown', function (evento) {

    // Verifico que la tecla presionada sea enter, para llamar a la función
    if (evento.key === 'Enter') {
        buscarPokemon(input.value);
    }
});

// obtengo el botón izquierdo de mi html
const prevBtn = document.querySelector('.bPrev');

let pokeID = 1;

prevBtn.addEventListener('click', function () {
    if (pokeID > 1) {
        // Le resto 1 al valor del pokeID
        pokeID--;
        buscarPokemon(pokeID);
    }
})


// obtengo el botón derecho de mi html
const nextBtn = document.querySelector('.bNext');

nextBtn.addEventListener('click', function () {
    // le sumo 1 al valor del pokeID
    pokeID++;
    buscarPokemon(pokeID);
})
