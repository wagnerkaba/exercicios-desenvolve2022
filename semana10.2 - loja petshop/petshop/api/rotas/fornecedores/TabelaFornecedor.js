const Modelo = require('./ModeloTabelaFornecedor');
const NaoEncontrado = require('../../erros/NaoEncontrado')

module.exports = { 
    listar() {
        //o método findAll retorna objetos do sequelize. Para retornar objetos simples com dados, passamos { raw: true } como parâmetro
        // By default, the results of all finder methods are instances of the model class (as opposed to being just plain JavaScript objects). This means that after the database returns the results, Sequelize automatically wraps everything in proper instance objects. In a few cases, when there are too many results, this wrapping can be inefficient. To disable this wrapping and receive a plain response instead, pass { raw: true } as an option to the finder method.
        return Modelo.findAll( {raw : true});   
    },

    inserir(fornecedor) {
        return Modelo.create(fornecedor);
    },

    async pegarPorId(id) {
        const encontrado = await Modelo.findOne({

            where: {
                id: id
            }
        })

        if (!encontrado){
            throw new NaoEncontrado();
        }

        return encontrado;
    },

    atualizar (id, dadosParaAtualizar) {
        return Modelo.update(
            dadosParaAtualizar,
            {
                where: { id: id }
            }
        )
    },

    remover (id){
        return Modelo.destroy({
            where: {id: id}
        })
    }


}