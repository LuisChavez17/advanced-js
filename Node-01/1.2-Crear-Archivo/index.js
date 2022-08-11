const fs = require('fs');

const path = './';
// Regresar ../
// Ahi mismo ./
const nameFile = 'my-file.txt';
const contentForFile = 'Esto lo escribi desde node';
// Path Absolute : C:\Users\joe_m\Desktop\FrontEndDevf2\JavaScriptAdvanced\Clase01\advanced-js\Node-01\1.2-Crear-Archivo
// Path Relative: JavaScriptAdvanced\Clase01\advanced-js\Node-01\1.2-Crear-Archivo
// const filePath = path + '/' + nameFile;
const filePath = `${path}/${nameFile}`;
fs.writeFile(filePath, contentForFile, (err) => {
    if(err) {
        throw err;
    } else {
        console.log('archivo creado con exito...!!');
    }
});
