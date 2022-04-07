const Services = require('./Services');
const PessoasServices = require('./PessoasServices')

class MatriculasServices extends Services {
    constructor() {
        super('Matriculas');
        this.pessoasService = new PessoasServices('Pessoas');

    }

    async pegaMatriculasPorEstudante(where = {}) {
        const matriculas = await this.pessoasService.pegaQualquerPessoa({ ...where });

        // o que é este método getAulasMatriculadas? 
        // "aulasMatriculadas" é o nome do association-scope no arquivo "models/pessoas.js"
        // o sequelize cria um método get automaticamente a partir desse nome de association-scope
        return matriculas.getAulasMatriculadas()
    }
}

module.exports = MatriculasServices;