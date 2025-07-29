// Consumo de API
// Mediante XMLHttpRequest

// Modularizar el consumo de la api
function buscarPersonaje() {
    //const nombre = prompt("Ingresa el nombre del personaje a buscar");

    const nombreUsar = prompt("Ingresa el nombre del personaje")
    const xhr = new XMLHttpRequest();
     
    const url = `https://rickandmortyapi.com/api/character?name=${nombreUsar}`; 

    console.log(url)

    xhr.open("GET",url,true);

    xhr.onreadystatechange = function(){
        if (xhr.readyState === 4 && xhr.status === 200) {
            try {
                const daticos = JSON.parse(xhr.responseText);
                console.log("The character is: "+daticos["results"][0]["name"]+" Status: "+daticos["results"][0]["status"]+ " Specie:"+daticos["results"][0]["species"]);
            }
            catch(err) {
                console.log(err.message);
            }
        }
    }

    xhr.send();

}

buscarPersonaje();
