# ProjectoAPIconJSON-Server

## Contenido

1. [Descripción](#descripción)
2. [Get](#get)
3. [Post](#post)
4. [Put](#put)
5. Patch
6. [Del](#del)ete

### Descripción

Esta api te obtiene, agrega, edita y eliminar datos e información de un archivo JSON que simula una base de datos real de un Restaurante.
[Api ](https://infinite-sierra-56428.herokuapp.com/)Restaurante

### GET

Para obtener datos disponibles usamos:

- **GET** http://localhost:3000/api-restfull/Restaurant/

Si desea encontrar la información un Alimento en especifico solo agregue el **ID** en la petición:

- **GET** http://localhost:3000/api-restfull/Restaurant/meals/ "id del Alimento"

### POST

Podemos agregar un Alimento con la petición de **POST**, solo asegurese de llenar todos los datos solicitados correctamente:

1. id: número unico e irrepetible.
2. name: nombre del alimento.
3. price: precio del alimento.
4. content:  contenido del alimento".
5. categoryID: categoria a la que el alimento pertenece.

- **POST** http://localhost:3000/api-restfull/Restaurant/meals

### PUT

Si desea editar la información de algun alimento ya publicado utilice la petición **PUT**. Debera incluir el **ID** unico del alimento y la información a editar.

- **PUT** http://localhost:3000/api-restfull/Restaurant/meals/ "id del Alimento"

### PATCH

Si desea editar información especifica y unica de algun alimento ya publicado utilice la petición **PATCH**. Debera incluir el **ID** unico del alimento y la información a editar.

- **PUT** http://localhost:3000/api-restfull/Restaurant/meals/ "id del Alimento"

### DELETE

Para eliminar por completo un alimento basta con utilizar la petición DELETE, especificando la **ID** del alimento a eliminar.

- DELETE http://localhost:3000/api-restfull/Restaurant/meals/ "id del Alimento"
