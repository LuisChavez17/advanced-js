const fetch = require('cross-fetch')
/**En esta linea de codigo donde fetch contiene el ENDPOINT de la API
 * que estamos solicitando, nostros podemos manipular este ENDPOINT para mandar a 
 * llamar difernetes tipos de atributos de la API podemos cambiar el status de Alive 
 * to dead para que arroje los elementos con status:dead y podemos
 * añadir otro ENDPOINT con &species=human para ver solo los de especie humana XD
 */
fetch('https://rickandmortyapi.com/api/character/?name=rick&status=dead&species=human')
    .then((response)=>{
        return response.json()
    }).then((resp)=>{
        console.log(resp)
    })






    /**
     * para que el fetch sea un script valido y ejecutable en el package.json
     * es necesario instalar el modulo fetch con el comando 
     * npm i cross-fetch
     */