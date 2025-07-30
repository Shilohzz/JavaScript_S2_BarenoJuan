function buscarPokemon() {

    // Con esto consigo manipular el input que está en el HTML (obtengo lo que se ingrese ahí)
    const inputPokemon = document.getElementById("inputAtari")

    // Creo el mensajerito
    const xhr = new XMLHttpRequest;

    const url = `https://pokeapi.co/api/v2/pokemon/?:id=`

    xhr.open("GET", url, true)

    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            try {
                const daticos =  JSON.parse(xhr.responseText);

                console.log(daticos)
            }
            catch {
                console.log("Hubo un errorsini")
            }
        }
    }

    xhr.send();

}

buscarPokemon();