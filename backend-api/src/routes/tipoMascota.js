const express = require('express');
const router = express.Router(); //devuelve un objeto de js al cual se le puede ir agregando rutas

const tipoMascotaController = require('../controllers/tipoMascotaController')

router.get('/', tipoMascotaController.list); //Sólo para prueba
router.get('/tipomascota', tipoMascotaController.list);
router.get('/tipomascota/add', tipoMascotaController.save);

module.exports = router; // exporto la variable que contiene las rutas