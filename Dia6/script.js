// Creo una especie de "Mensajero" o "intermediario" entre mi app o página, que se comunique con la API o servidor que contiene la información"
const peticionAPI = new XMLHttpRequest();

peticionAPI.open('GET',' https://rickandmortyapi.com/api')

