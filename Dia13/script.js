let nombreHero = "";




// Función para obtener el dato del input
const botonBusqueda = document.querySelector('.botonBuscar');

botonBusqueda.addEventListener('click', function(event){

    event.preventDefault();

    const datosInput = document.querySelector('.buscarHero').value;

    nombreHero = datosInput; 

    getSH();
})


async function getSH() {
    try {

        let apiUrl = `https://www.superheroapi.com/api.php/e4deed2a223629016205bfec2fafb418/search/${nombreHero}`;

        const respuestaApi = await fetch(apiUrl, {
            method:'GET'
        })

        const {results} = await respuestaApi.json();

        for (let i = 0; i < results.length; i++) {
            makeSH(results[i])
        }

    } catch(error) {
        console.error(error.message);   
    }
}



function makeSH(superHero){

    const containerHero = document.querySelector('.containerHero');
    const {name} = superHero;
    const {gender} = superHero.appearance;
    const {url} = superHero.image;
    
    
    const titleHero = document.createElement('h4');
    titleHero.textContent = name;

    const genderHero = document.createElement('p');
    genderHero.textContent = gender;

    const imgHero = document.createElement('img');
    imgHero.src = url;


    const cardHero = document.createElement('div');
    cardHero.appendChild(titleHero);
    cardHero.appendChild(genderHero);
    cardHero.appendChild(imgHero); 
    cardHero.style.backgroundColor = 'gray';
    
    containerHero.appendChild(cardHero);
}










