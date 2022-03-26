const roteador = require('express').Router();
const TabelaFornecedor = require('./TabelaFornecedor');
const Fornecedor = require('./Fornecedor');
const SerializadorFornecedor = require('../../Serializador').SerializadorFornecedor;

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

// O parâmetro next serve para chamar o próximo middleware. 
// No caso abaixo, serve para chamar o middleware de tratamento de erros (error-handling middleware function)
// Para entender sobre middleware, veja a pasta "api-middleware" nesta semana 10.
roteador.post('/', async (requisicao, resposta, next) => {
    try {
        const dadosRecebidos = requisicao.body;
        const fornecedor = new Fornecedor(dadosRecebidos);
        await fornecedor.criar();
        resposta.status(201);
        const serializador = new SerializadorFornecedor(
            resposta.getHeader('Content-Type')
        )
        resposta.send(
            JSON.stringify(fornecedor)
            //serializador.serializar(fornecedor)
        );
    } catch (erro) {
        next(erro);
    }

})

// O parâmetro next serve para chamar o próximo middleware. 
// No caso abaixo, serve para chamar o middleware de tratamento de erros (error-handling middleware function)
// Para entender sobre middleware, veja a pasta "api-middleware" nesta semana 10.
roteador.get('/:idFornecedor', async (requisicao, resposta, next) => {
    try {
        const id = requisicao.params.idFornecedor;
        const fornecedor = new Fornecedor({ id: id });
        await fornecedor.carregar();
        resposta.status(200);
        const serializador = new SerializadorFornecedor(
            resposta.getHeader('Content-Type'),
            ['email', 'dataCriacao', 'dataAtualizacao', 'versao']
        )
        resposta.send(
            serializador.serializar(fornecedor)
        );
    } catch (erro) {
        next(erro);
    }
})

// O parâmetro next serve para chamar o próximo middleware. 
// No caso abaixo, serve para chamar o middleware de tratamento de erros (error-handling middleware function)
// Para entender sobre middleware, veja a pasta "api-middleware" nesta semana 10.
roteador.put('/:idFornecedor', async (requisicao, resposta, next) => {
    try {
        const id = requisicao.params.idFornecedor;
        const dadosRecebidos = requisicao.body;

        // The Object.assign() method copies all enumerable own properties from one or more source objects to a target object. It returns the modified target object.
        const dados = Object.assign({}, dadosRecebidos, { id: id });
        const fornecedor = new Fornecedor(dados);
        await fornecedor.atualizar();
        resposta.status(204);
        resposta.end();
    } catch (erro) {

        // a linha abaixo vai chamar o middleware que faz o tratamento de erros do Express: error-handling middleware function
        // Para entender sobre middleware, veja a pasta "api-middleware" nesta semana 10.
        next(erro);
    }



})

roteador.delete('/:idFornecedor', async (requisicao, resposta, next) => {
    try {
        const id = requisicao.params.idFornecedor;
        const fornecedor = new Fornecedor({ id: id });
        await fornecedor.carregar();
        await fornecedor.remover();
        resposta.status(204);
        resposta.end();
    } catch (erro) {
        next(erro);
    }

})

module.exports = roteador;

