

//-------------------------------------------------------------
// ROTA PARA RECLAMAÇÕES
//-------------------------------------------------------------

const roteador = require('express').Router()

roteador.get('/', (requisicao, resposta) => {
  resposta.send(
    // este exercicio serviu apenas para testar uma nova rota
    // por isso o get retorna uma string vazia
    JSON.stringify([])
)
})

module.exports = roteador