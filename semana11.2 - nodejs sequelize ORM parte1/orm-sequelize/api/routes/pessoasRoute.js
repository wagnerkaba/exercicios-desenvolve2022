// const { Router } = require('express');
// const router = Router();
// OBS: as duas linhas acima são equivalentes à linha abaixo:
const router = require('express').Router();

const PessoaController = require('../controllers/PessoaController');


router.get('/pessoas', PessoaController.pegaTodasAsPessoas);

router.get('/pessoas/:idPessoa', PessoaController.pegaUmaPessoa);

router.post('/pessoas', PessoaController.criaPessoa);

router.put('/pessoas/:idPessoa', PessoaController.atualizaPessoa);

router.delete('/pessoas/:idPessoa', PessoaController.apagaPessoa);

//---------------------------------------------------------------
//      MATRICULAS
//---------------------------------------------------------------
router.get('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.pegaUmaMatricula);
router.post('/pessoas/:estudanteId/matricula', PessoaController.criaMatricula);
router.put('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.atualizaMatricula);
router.delete('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.apagaMatricula);







module.exports = router;