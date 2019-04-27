// server.js es el encargado de ejecutar el código del servidor

const express = require('express'); // requerimos express
const app = express(); // inicializamos express a través de una constante app

// configuracion
app.set('port', process.env.PORT || 3000); //busca un puerto libre en el SO sino, utiliza el 3000


// inicializa el servidor
app.listen(app.get('port'), () => {
    console.log('server on port 3000');
})