// server.js es el encargado de ejecutar el código del servidor

const express = require('express'); // requerimos express
const path = require('path');
const morgan = require('morgan');
const mysql = require('mysql');
const myConnection = require('express-myconnection');

const app = express(); // inicializamos express a través de una constante app

// settings
//app.set('port', process.env.PORT || 3001); //busca un puerto libre en el SO sino, utiliza el 3001
app.set('port', 3001);

// middlewares
// todos los middlewares son funciones que se ejecutan antes de recibir las peticiones de los usuarios
app.use(morgan('dev')); // con el parametro dev muestra mensajes por consola de las peticiones
// parámetros de la conección con la base de datos
app.use(myConnection(mysql, {
    host: 'localhost',
    user: 'root',
    password: '',
    port: 3306,
    database: 'petship'
}, 'single'));


// routes
// son las peticiones de los usuarios


// inicializa el servidor
app.listen(app.get('port'), () => {
    console.log('server on port 3001');
})