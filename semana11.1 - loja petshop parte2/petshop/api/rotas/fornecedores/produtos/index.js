//-----------------------------------------------------------------------------
// ------------------ ROUTER --------------------------------------------------
//-----------------------------------------------------------------------------
// A router object is an isolated instance of middleware and routes. You can think of it as a “mini-application,” capable only of performing middleware and routing functions. Every Express application has a built-in app router.
// A router behaves like middleware itself, so you can use it as an argument to app.use() or as the argument to another router’s use() method.
// The top-level express object has a Router() method that creates a new router object.
// Once you’ve created a router object, you can add middleware and HTTP method routes (such as get, put, post, and so on) to it just like an application.
// https://expressjs.com/en/4x/api.html#router
//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
// ------------------ MERGEPARAMS ---------------------------------------------
//-----------------------------------------------------------------------------
// mergeParams é um parâmetro opcional de express.Router([options])
// mergeParams preserves the req.params values from the parent router. If the parent and the child have conflicting param names, the child’s value take precedence.
// Neste exemplo, "parent router" é o roteador em fornecedores/index.js
// Se mergeParams é falso, este módulo não vai conseguir capturar os parâmetros da requisição
const roteador = require('express').Router({ mergeParams: true });
const Tabela = require('./TabelaProduto')



//-------------------------------------------------------------
// LISTAR PRODUTOS
//-------------------------------------------------------------

roteador.get('/', async (requisicao, resposta) => {

    const produtos = await Tabela.listar(requisicao.params.idFornecedor);
    resposta.send(
        JSON.stringify(produtos)
    )
})

//-------------------------------------------------------------
// CRIAR PRODUTOS
//-------------------------------------------------------------

roteador.post('/', (requisicao, resposta) => {
    const idFornecedor = requisicao.params.idFornecedor;
    const corpo = requisicao.body;

    // The Object.assign() method copies all enumerable own properties from one or more source objects to a target object. It returns the modified target object.
    const dados = Object.assign({}, corpo, { fornecedor: idFornecedor });

})


//-------------------------------------------------------------
// ROTA PARA RECLAMAÇÕES
//-------------------------------------------------------------
const roteadorReclamacoes = require('./reclamacoes')
roteador.use('/:idProduto/reclamacoes', roteadorReclamacoes)

module.exports = roteador;