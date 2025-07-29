function buscarPlaneta() {

    const personaBuscar = parseInt(prompt("Ingresa el ID de la persona que deseas filtrar.")) - 1;

    const xhr = new XMLHttpRequest(); // Importamos el XML

    const url = `https://swapi.py4e.com/api/people/?:id=${personaBuscar}`

    xhr.open("GET",url,true) // Verbo, URL de la API y le asignamos true para que sea asincrónico


    // Siempre que el "state" cambie, se hará:
    xhr.onreadystatechange = function (){
        if (xhr.readyState === 4 && xhr.status === 200) {
            try {

                const daticos = JSON.parse(xhr.responseText); // Parseo el JSON obtenido, a texto y lo guardo en una variable (daticos)

                alert("El personaje es: "+ daticos["results"][personaBuscar]["name"]);
            
            }
            catch(err){
                alert(err.message)
            }
        }
    }

    xhr.send();
}

buscarPlaneta()