

//-------------------------------------------------------------
// script para criar tabelas no mysql
// caso o banco de dados não tenha as tabelas necessárias, execute: node criarTabelas.js
//-------------------------------------------------------------
const modelos = [
    require('../rotas/fornecedores/ModeloTabelaFornecedor'),
    require('../rotas/fornecedores/produtos/ModeloTabelaProduto')
]

async function criarTabelas () {
    for (let contador = 0; contador < modelos.length; contador++){
        const modelo = modelos[contador];
        await modelo.sync();
    }
}

criarTabelas();