const express = require('express');
const router = express.Router(); //devuelve un objeto de js al cual se le puede ir agregando rutas

const razaController = require('../controllers/razaController')

router.get('/raza', razaController.list);
router.post('/raza/add', razaController.save);

module.exports = router; // exporto la variable que contiene las rutas