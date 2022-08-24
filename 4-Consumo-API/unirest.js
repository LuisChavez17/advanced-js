var unirest = require('unirest');

var response = unirest('GET','https://rickandmortyapi.com/api/character/1')
    .end(function (response){
        if (response.error) throw new Error(response.error);
        console.log(response.body)
        /**
         *   console.log(response.raw_body)
         * en esta impresion cambia la forma del cuerpo
         * de la api que estamos solicitando
         * podemos cambiar el cuerpo con response.data
         * .body .raw_body .json etc
         * el objetivo es siempre encontrar el cuerpo en
         * forma de json dependera de el metodo dentro de log
         */
    })