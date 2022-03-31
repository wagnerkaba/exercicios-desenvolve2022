// const { Router } = require('express');
// const router = Router();
// OBS: as duas linhas acima são equivalentes à linha abaixo:
const router = require('express').Router();

const PessoaController = require('../controllers/PessoaController');


router.get('/pessoas', PessoaController.pegaTodasAsPessoas);

module.exports = router;