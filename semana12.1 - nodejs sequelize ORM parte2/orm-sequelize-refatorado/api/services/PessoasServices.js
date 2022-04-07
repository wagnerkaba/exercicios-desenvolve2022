const Services = require('./Services');
const database = require('../models');

class PessoasServices extends Services {
    constructor() {
        super('Pessoas');
        this.matriculas = new Services('Matriculas');

    }

    async pegaRegistrosAtivos(where = {}) {
        return database[this.nomeDoModelo].findAll({ where: { ...where } });
    }

    async pegaTodosOsRegistros(where = {}) {
        return database[this.nomeDoModelo]
            .scope('todos')
            .findAll({ where: { ...where } });
    }


    // criei este método para conseguir usar o scope "todos"
    // o método super.pegaUmRegistro não tem scope "todos". Dessa forma, não consegue buscar por pessoas desativadas.
    async pegaQualquerPessoa(where = {}) {

        return database[this.nomeDoModelo]
            .scope('todos')
            .findOne({ where: { ...where } });
    }


    //para maiores informações sobre transactions, vide "pessoaController.js" na pasta "orm-sequelize" (sem refatoração)
    async cancelaPessoaEMatriculas(estudanteId) {
        return database.sequelize.transaction(async transacao => {
            await this.atualizaQualquerPessoa(
                { ativo: false }, estudanteId, { transaction: transacao });
            await this.matriculas.atualizaRegistros(
                { status: 'cancelado' }, { estudante_id: estudanteId }, { transaction: transacao });
        })
    }

    // criei este método para conseguir usar o scope "todos"
    // o método super.atualizaRegistro não tem scope "todos". Dessa forma, não consegue atualizar pessoas desativadas.
    async atualizaQualquerPessoa(dadosAtualizados, id, transacao = {}) {
        return database[this.nomeDoModelo]
            .scope('todos')
            .update(dadosAtualizados, {
                where: { id: id },
                ...transacao
            });
    }

    // criei este método pafa facilitar reverter o cancelamento 
    // o código é redundante com o método "cancelaPessoaEMatricula" e pode ser refatorado mais tarde
    async reverteCancelaPessoaEMatriculas(estudanteId) {
        return database.sequelize.transaction(async transacao => {
            await this.atualizaQualquerPessoa({ ativo: true }, estudanteId, { transaction: transacao });
            await this.matriculas.atualizaRegistros({ status: 'confirmado' }, { estudante_id: estudanteId }, { transaction: transacao });
        })
    }

}

module.exports = PessoasServices;
