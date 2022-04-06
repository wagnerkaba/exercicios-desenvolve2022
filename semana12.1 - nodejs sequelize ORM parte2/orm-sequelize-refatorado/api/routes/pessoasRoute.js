// const { Router } = require('express');
// const router = Router();
// OBS: as duas linhas acima são equivalentes à linha abaixo:
const router = require('express').Router();

const PessoaController = require('../controllers/PessoaController');


router.get('/pessoas', PessoaController.pegaTodasAsPessoas);

router.get('/pessoas/ativas', PessoaController.pegaPessoasAtivas);

router.get('/pessoas/:idPessoa', PessoaController.pegaUmaPessoa);

router.put('/pessoas/:idPessoa', PessoaController.atualizaPessoa);

router.delete('/pessoas/:idPessoa', PessoaController.apagaPessoa);

router.post('/pessoas', PessoaController.criaPessoa);

router.post('/pessoas/:id/restaura', PessoaController.restauraPessoa);

router.post('/pessoas/:estudanteId/cancela', PessoaController.cancelaPessoa);

router.post('/pessoas/:estudanteId/descancela', PessoaController.reverteCancelaPessoa);






//---------------------------------------------------------------
//      MATRICULAS
//---------------------------------------------------------------

router.get('/pessoas/:estudanteId/matricula', PessoaController.pegaMatriculas);

router.get('/pessoas/matricula/:turmaId/confirmadas', PessoaController.pegaMatriculasPorTurma);

router.get('/pessoas/matricula/lotada', PessoaController.pegaTurmasLotadas);

router.get('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.pegaUmaMatricula);

router.post('/pessoas/:estudanteId/matricula', PessoaController.criaMatricula);

router.post('/pessoas/:estudanteId/matricula/:matriculaId/restaura', PessoaController.restauraMatricula);

router.put('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.atualizaMatricula);

router.delete('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.apagaMatricula);







module.exports = router;