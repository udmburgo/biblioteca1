const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');

router.get('/', usuarioController.listarUsuarios);
router.post('/criar', usuarioController.criarUsuario);

module.exports = router;
