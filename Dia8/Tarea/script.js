function buscarPlaneta() {

    const planetaBuscar = parseInt(prompt("Ingresa el ID de la persona que deseas filtrar.")) - 1;

    const xhr = new XMLHttpRequest(); // Importamos el XML (Creamos el mensajerito)

    const url = `https://swapi.py4e.com/api/planets/?:id=${planetaBuscar}` // Creamos una variable que contenga el link de la API

    xhr.open("GET", url, true) // Verbo, URL de la API y le asignamos true para que sea asincrónico


    // Siempre que el "state" cambie, se hará:
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            try {

                const daticos = JSON.parse(xhr.responseText); // Parseo el JSON obtenido, a texto y lo guardo en una variable (daticos)

                alert("El personaje es: " + daticos["results"][planetaBuscar]["name"] + "\n" 
                     + "Periodo de rotación: " + daticos["results"][planetaBuscar]["rotation_period"] + "\n"
                     + "Periodo orbital: " + daticos["results"][planetaBuscar]["orbital_period"] + "\n"
                     + "Diámetro: " + daticos["results"][planetaBuscar]["diameter"] + "\n"
                     + "Clima: " + daticos["results"][planetaBuscar]["climate"] + "\n"
                     + "Gravedad: " + daticos["results"][planetaBuscar]["gravity"] + "\n"
                     + "Terreno: " + daticos["results"][planetaBuscar]["terrain"] + "\n"
                     + "Aguas Superficiales: " + daticos["results"][planetaBuscar]["surface_water"] + "\n"
                     + "Población: " + daticos["results"][planetaBuscar]["population"] + "\n"
                     + "Creado: " + daticos["results"][planetaBuscar]["created"] + "\n"
                     + "Editado: " + daticos["results"][planetaBuscar]["edited"] + "\n"   
                );

            }
            catch (err) {
                alert(err.message)
            }
        }
    }

    xhr.send();
}

buscarPlaneta()