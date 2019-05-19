const express = require('express');
const router = express.Router(); //devuelve un objeto de js al cual se le puede ir agregando rutas

const usuarioController = require('../controllers/usuarioController')

router.get('/usuario', usuarioController.list);
router.post('/usuario/add', usuarioController.save);

module.exports = router; // exporto la variable que contiene las rutas