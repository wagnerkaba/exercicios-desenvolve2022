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



module.exports = router;