
//--------------------------------------------------------------
// Aula sobre versionamento de API
// Aqui foi criada a versão 2 de roteador.get()
// Para versionar a nossa API, seguimos o padrão de versionamento semântico, que nos permite gerenciar e organizar números de versões de uma forma mais simples e intuitiva.
// Para saber mais: https://semver.org/
//--------------------------------------------------------------


const roteador = require('express').Router();
const TabelaFornecedor = require('./TabelaFornecedor');
const SerializadorFornecedor = require('../../Serializador').SerializadorFornecedor;


roteador.options('/', (requisicao, resposta) => {
    resposta.set('Access-Control-Allow-Methods', 'GET');
    resposta.set('Access-Control-Allow-Headers', 'Content-Type');

    resposta.status(204);
    resposta.end();
})

roteador.get('/', async (requisicao, resposta) => {
    const resultados = await TabelaFornecedor.listar();
    resposta.status(200);

    const serializador = new SerializadorFornecedor(
        resposta.getHeader('Content-Type')
    )
    resposta.send(
        serializador.serializar(resultados)
    );

})


module.exports = roteador;