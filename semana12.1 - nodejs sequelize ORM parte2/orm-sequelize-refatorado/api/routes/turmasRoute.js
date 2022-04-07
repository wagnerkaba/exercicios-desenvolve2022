
const { Router } = require('express')
const TurmaController = require('../controllers/TurmaController')

const router = Router()
router
 .get('/turmas', TurmaController.pegaTodasAsTurmas) //esta rota aceita query Strings. Veja o método pegaTodasAsTurmas() para mais detalhes.
 .get('/turmas/:id', TurmaController.pegaUmaTurma)
 .post('/turmas', TurmaController.criaTurma)
 .put('/turmas/:id', TurmaController.atualizaTurma)
 .delete('/turmas/:id', TurmaController.apagaTurma)
 .post('/turmas/:id/restaura', TurmaController.restauraTurma)
module.exports = router