
const { atualizar } = require('../TabelaFornecedor');
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
        //sobre "raw:true", vide comentários em pegarPorID
        return Modelo.findAll({
            where: {
                fornecedor: idFornecedor
            },
            raw: true
        });
    },

    inserir(dados){
        return Modelo.create(dados)
    },

    remover(idProduto, idFornecedor){
        return Modelo.destroy({
            where: {
                id: idProduto,
                fornecedor: idFornecedor
            }
        })
    },
    async pegarPorId(idProduto, idFornecedor){

        //o método findOne retorna objetos do sequelize. Para retornar objetos simples com dados, passamos { raw: true } como parâmetro
        // By default, the results of all finder methods are instances of the model class (as opposed to being just plain JavaScript objects). This means that after the database returns the results, Sequelize automatically wraps everything in proper instance objects. In a few cases, when there are too many results, this wrapping can be inefficient. To disable this wrapping and receive a plain response instead, pass { raw: true } as an option to the finder method.
        const encontrado = await Modelo.findOne({ 
            where: {
                id: idProduto,
                fornecedor: idFornecedor
            },
            raw: true
        });
        if(!encontrado){
            throw new Error('Produto não encontrado')
        }
        return encontrado;
    },

    atualizar(dadosDoProduto, dadosParaAtualizar){
        return Modelo.update(
            dadosParaAtualizar,
            {
                where: dadosDoProduto
            }
        )
    }
}

