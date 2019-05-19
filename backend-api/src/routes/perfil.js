const express = require('express');
const router = express.Router(); //devuelve un objeto de js al cual se le puede ir agregando rutas

const perfilController = require('../controllers/perfilController')

router.get('/perfil', perfilController.list);
router.post('/perfil/add', perfilController.save);

module.exports = router; // exporto la variable que contiene las rutas