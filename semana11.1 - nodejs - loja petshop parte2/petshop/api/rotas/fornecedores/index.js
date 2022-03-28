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
            serializador.serializar(fornecedor)
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

//-------------------------------------------------------------
// ROTA PARA PRODUTOS
//-------------------------------------------------------------

const roteadorProdutos = require('./produtos');

//-------------------------------------------------------------
// Middleware para verificar se fornecedor existe
// Quando o cliente acessa a rota de produtos, ele tem que indicar o id do fornecedor do produto
// Por exemplo: localhost:3000/api/fornecedores/75/produtos/
// No caso acima, o id do fornecedor é 75
// Se o cliente fornecer um id que não existe, vai causar erro
// Assim, o middleware abaixo serve para tratar corretamente o erro, caso o cliente envie um id de fornecedor inexistente
//-------------------------------------------------------------
const verificarFornecedor = async (requisicao, resposta, next) => {
    try {
        const id = requisicao.params.idFornecedor;
        const fornecedor = new Fornecedor({id:id});

        // verifica se o fornecedor existe
        await fornecedor.carregar();

        // se o fornecedor existe e foi carregado, então ele é inserido na requisição para eventualmente ser utilizado
        // dessa forma, se for necessário alguma informação do fornecedor no futuro, não será preciso carregá-lo na memória novamente
        requisicao.fornecedor = fornecedor;
        next();
    } catch (erro){
        next(erro);
    }


}

// Sintaxe de app.use: app.use([path,] callback [, callback...])
// You can provide multiple callback functions that behave just like middleware, except that these callbacks can invoke next('route') to bypass the remaining route callback(s). You can use this mechanism to impose pre-conditions on a route, then pass control to subsequent routes if there is no reason to proceed with the current route.
// https://expressjs.com/en/api.html#app.use
roteador.use('/:idFornecedor/produtos', verificarFornecedor, roteadorProdutos);

module.exports = roteador;

