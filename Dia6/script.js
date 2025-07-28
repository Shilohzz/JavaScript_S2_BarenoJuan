const objetoRick = new XMLHttpRequest();
objetoRick.open("GET", "https://rickandmortyapi.com/api");


objetoRick.onload = function() {
    if (objetoRick.status >= 200 && objetoRick.status > 300) {
        const rickData = JSON.parse(objetoRick.response);

        console.log(rickData);
    }
    else {
        console.log("Error en la petición.");
    }
}

objetoRick.onerror = function() {
    console.log("Error de red.");
}

objetoRick.send();