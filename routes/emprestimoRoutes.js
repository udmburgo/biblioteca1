const express = require('express');
const router = express.Router();
const emprestimoController = require('../controllers/emprestimoController');

router.get('/', emprestimoController.listarEmprestimos);
router.post('/emprestar', emprestimoController.emprestarLivro);
router.post('/devolver/:id', emprestimoController.devolverLivro);

module.exports = router;
