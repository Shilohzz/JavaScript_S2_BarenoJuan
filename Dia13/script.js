document.getElementById('botonBuscar').addEventListener('click', function() {
    const superheroeName = document.getElementById('buscarSuper').value.trim();
    const result = document.getElementById('resultado');
    
    const miToken = 'e4deed2a223629016205bfec2fafb418';
    const urlApi = `https://superheroapi.com/api/${miToken}/search/${superheroeName}`;
    
    // Usamos un proxy diferente que no da problemas de activación
    const urlFinal = `https://api.allorigins.win/get?url=${encodeURIComponent(urlApi)}`;

    const xhr = new XMLHttpRequest();
    
    xhr.open('GET', urlFinal, true);

    xhr.onload = function() {
        const data = JSON.parse(xhr.responseText);
        
        // El nuevo proxy devuelve la respuesta real de la API dentro de 'contents'
        const apiResponse = JSON.parse(data.contents);

        if (apiResponse.response === 'success' && apiResponse.results.length > 0) {
            result.textContent = apiResponse.results[0].name;
        } else {
            result.textContent = 'No se encontró el superhéroe.';
        }
    };
    
    xhr.send();
});