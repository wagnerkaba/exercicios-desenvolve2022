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
const Produto = require('./Produto');
const Serializador = require('../../../Serializador').SerializadorProduto;



//-------------------------------------------------------------
// LISTAR PRODUTOS
//-------------------------------------------------------------

roteador.get('/', async (requisicao, resposta) => {

    // requisicao.fornecedor é um dado enviado pelo método verificarFornecedor() dentro de "fornecedores/index.js"
    const produtos = await Tabela.listar(requisicao.fornecedor.id);
    const serializador = new Serializador(
        resposta.getHeader('Content-Type')
    )
    resposta.send(
        serializador.serializar(produtos)
    )
})

//-------------------------------------------------------------
// CRIAR PRODUTOS
//-------------------------------------------------------------

roteador.post('/', async (requisicao, resposta, next) => {

    try {
        // requisicao.fornecedor é um dado enviado pelo método verificarFornecedor() dentro de "fornecedores/index.js"
        const idFornecedor = requisicao.fornecedor.id;
        const corpo = requisicao.body;

        // The Object.assign() method copies all enumerable own properties from one or more source objects to a target object. It returns the modified target object.
        const dados = Object.assign({}, corpo, { fornecedor: idFornecedor });

        const produto = new Produto(dados);
        await produto.criar();
        const serializador = new Serializador(
            resposta.getHeader('Content-Type')
        )
        // coloca no header da resposta a versão do produto
        // The ETag (or entity tag) HTTP response header is an identifier for a specific version of a resource.
        resposta.set('ETag', produto.versao);

        //formata a data de atualização do produto para colocar no header depois
        const timestamp = (new Date(produto.dataAtualizacao)).getTime();
        // coloca no header da resposta, o momento da ultima atualizacao do produto
        resposta.set('Last-Modified', timestamp);
        // coloca no header a url para maiores detalhes sobre o produto
        resposta.set('Location', `/api/fornecedores/${produto.fornecedor}/produtos/${produto.id}`)
        resposta.status(201);
        resposta.send(
            serializador.serializar(produto)
        );
    } catch (erro) {
        next(erro);
    }

})

//-------------------------------------------------------------
// APAGAR PRODUTOS
//-------------------------------------------------------------
roteador.delete('/:id', async (requisicao, resposta) => {
    // requisicao.fornecedor é um dado enviado pelo método verificarFornecedor() dentro de "fornecedores/index.js"
    const dados = {
        id: requisicao.params.id,
        fornecedor: requisicao.fornecedor.id
    }

    const produto = new Produto(dados);
    await produto.apagar();
    resposta.status(204);
    resposta.end();
})

//-------------------------------------------------------------
// listar produto específico
//-------------------------------------------------------------
roteador.get('/:id', async (requisicao, resposta, next) => {

    try {
        // requisicao.fornecedor é um dado enviado pelo método verificarFornecedor() dentro de "fornecedores/index.js"
        const dados = {
            id: requisicao.params.id,
            fornecedor: requisicao.fornecedor.id
        }
        const produto = new Produto(dados);
        await produto.carregar();
        const serializador = new Serializador(
            resposta.getHeader('Content-Type'),
            ['preco', 'estoque', 'fornecedor', 'dataCriacao', 'dataAtualizacao', 'versao']
        )

        // coloca no header da resposta a versão do produto
        // The ETag (or entity tag) HTTP response header is an identifier for a specific version of a resource.
        resposta.set('ETag', produto.versao);

        //formata a data de atualização do produto para colocar no header depois
        const timestamp = (new Date(produto.dataAtualizacao)).getTime();
        // coloca no header da resposta, o momento da ultima atualizacao do produto
        resposta.set('Last-Modified', timestamp);

        resposta.send(
            serializador.serializar(produto)
        )
    } catch (erro) {
        next(erro);
    }

})

//-------------------------------------------------------------
// Atualizar produto
//-------------------------------------------------------------
roteador.put('/:id', async (requisicao, resposta, next) => {

    try {
        // The Object.assign() method copies all enumerable own properties from one or more source objects to a target object. It returns the modified target object.
        const dados = Object.assign(
            {},
            requisicao.body,
            {
                id: requisicao.params.id,
                fornecedor: requisicao.fornecedor.id
            }
        )
        const produto = new Produto(dados);
        await produto.atualizar();

        // carrega o produto para pegar a data de atualização após produto.atualizar()
        await produto.carregar();

        //formata a data de atualização do produto para colocar no header
        const timestamp = (new Date(produto.dataAtualizacao)).getTime();
        // coloca no header da resposta, o momento da ultima atualizacao do produto
        resposta.set('Last-Modified', timestamp);

        // coloca no header da resposta a versão do produto
        // The ETag (or entity tag) HTTP response header is an identifier for a specific version of a resource.
        resposta.set('ETag', produto.versao);



        resposta.status(204);
        resposta.end();
    } catch (erro) {
        next(erro);

    }

})

//-------------------------------------------------------------
// Diminuir estoque
//-------------------------------------------------------------
roteador.post('/:id/diminuir-estoque', async (requisicao, resposta, next) => {


    try {
        const produto = new Produto({
            id: requisicao.params.id,
            fornecedor: requisicao.fornecedor.id
        });
        await produto.carregar();
        produto.estoque = produto.estoque - requisicao.body.quantidade;
        await produto.diminuirEstoque();

        // carrega o produto para pegar a data de atualização após produto.diminuirEstoque()
        await produto.carregar();

        //formata a data de atualização do produto para colocar no header
        const timestamp = (new Date(produto.dataAtualizacao)).getTime();
        // coloca no header da resposta, o momento da ultima atualizacao do produto
        resposta.set('Last-Modified', timestamp);

        // coloca no header da resposta a versão do produto
        // The ETag (or entity tag) HTTP response header is an identifier for a specific version of a resource.
        resposta.set('ETag', produto.versao);
        
        resposta.status(204);
        resposta.end();

    } catch (erro) {
        next(erro);
    }

})

//-------------------------------------------------------------
// ROTA PARA RECLAMAÇÕES
//-------------------------------------------------------------
const roteadorReclamacoes = require('./reclamacoes')
roteador.use('/:idProduto/reclamacoes', roteadorReclamacoes)

module.exports = roteador;