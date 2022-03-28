
const Modelo = require('./ModeloTabelaProduto')

//------------------------------------------------------
// Este módulo funciona como DAO (Data access object)
// Quando o usuário quer, por exemplo, enviar dados para o banco de dados, os seguintes passos são dados:
//      1. A API se comunica com o DAO.
//      2. O DAO se comunica com o Sequelize
//      3. O Sequelize se comunica com o MySQL
//
// Fonte: https://cursos.alura.com.br/course/nodejs-api-rest-controle-versao/task/82415
//------------------------------------------------------

module.exports = {
    listar (idFornecedor) {
        //o método listar deve listar apenas os produtos do fornecedor com idFornecedor
        return Modelo.findAll({
            where: {
                fornecedor: idFornecedor
            }
        });
    }
}

