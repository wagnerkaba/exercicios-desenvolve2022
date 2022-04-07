const router = require('express').Router();

const MatriculasController = require('../controllers/MatriculasController');

router.get('/pessoas/:estudanteId/matricula', MatriculasController.pegaMatriculasPorEstudante);

router.get('/pessoas/matricula/:turmaId/confirmadas', MatriculasController.pegaMatriculasPorTurma);

router.get('/pessoas/matricula/lotada', MatriculasController.pegaTurmasLotadas);

router.get('/pessoas/:estudanteId/matricula/:matriculaId', MatriculasController.pegaUmaMatricula);

router.post('/pessoas/:estudanteId/matricula', MatriculasController.criaMatricula);

router.post('/pessoas/:estudanteId/matricula/:matriculaId/restaura', MatriculasController.restauraMatricula);

router.put('/pessoas/:estudanteId/matricula/:matriculaId', MatriculasController.atualizaMatricula);

router.delete('/pessoas/:estudanteId/matricula/:matriculaId', MatriculasController.apagaMatricula);

module.exports = router;