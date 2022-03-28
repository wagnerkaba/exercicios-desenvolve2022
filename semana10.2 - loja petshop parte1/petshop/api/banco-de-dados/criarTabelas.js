
//-------------------------------------------------------------
// script para criar tabelas no mysql
// caso o banco de dados não tenha as tabelas necessárias, execute: node criarTabelas.js
//-------------------------------------------------------------

const ModeloTabela = require('../rotas/fornecedores/ModeloTabelaFornecedor');

ModeloTabela
    .sync()
    .then(() => console.log('Tabela criada com sucesso'))
    .catch(console.log);