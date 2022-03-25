const roteador = require('express').Router();
const TabelaFornecedor = require('./TabelaFornecedor');
const Fornecedor = require('./Fornecedor');
const NaoEncontrado = require('../../erros/NaoEncontrado');

roteador.get('/', async (requisicao, resposta) => {
    const resultados = await TabelaFornecedor.listar();
    resposta.status(200);
    resposta.send(
        JSON.stringify(resultados)
    );

})

roteador.post('/', async (requisicao, resposta) => {
    try {
        const dadosRecebidos = requisicao.body;
        const fornecedor = new Fornecedor(dadosRecebidos);
        await fornecedor.criar();
        resposta.status(201);
        resposta.send(
            JSON.stringify(fornecedor)
        );
    } catch (erro){
        resposta.status(400);
        resposta.send(
            JSON.stringify({
                mensagem: erro.message
            })
        )
    }

})

roteador.get('/:idFornecedor', async (requisicao, resposta) => {
    try {
        const id = requisicao.params.idFornecedor;
        const fornecedor = new Fornecedor({ id: id });
        await fornecedor.carregar();
        resposta.status(200);
        resposta.send(
            JSON.stringify(fornecedor)
        )
    } catch (erro) {
        resposta.status(404);
        resposta.send(JSON.stringify({
            mensagem: erro.message
        }))
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
        const dados = Object.assign({}, dadosRecebidos, { id: id});
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

roteador.delete('/:idFornecedor', async (requisicao, resposta) => {
    try {
        const id = requisicao.params.idFornecedor;
        const fornecedor = new Fornecedor({ id: id});
        await fornecedor.carregar();
        await fornecedor.remover();
        resposta.status(204);
        resposta.end();
    } catch (erro) {
        resposta.status(404);
        resposta.send(
            JSON.stringify({
                mensagem: erro.message
            })
        )
        }

})

module.exports = roteador;

