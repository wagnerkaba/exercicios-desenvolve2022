const Sequelize = require('sequelize');
const { MatriculasServices } = require('../services');
const matriculasServices = new MatriculasServices();

class MatriculaController {

    static async pegaMatriculasPorEstudante(req, res) {
        const { estudanteId } = req.params;
        try {
            const matriculas = await matriculasServices.pegaMatriculasPorEstudante({ id: Number(estudanteId) });
            return res.status(200).json(matriculas);
        } catch (error) {
            return res.status(500).json(error.message);

        }
    }

    static async pegaMatriculasPorTurma(req, res) {
        const { turmaId } = req.params;
        try {
            const todasAsMatriculas = await matriculasServices
                .encontraEContaRegistros(
                    { turma_id: Number(turmaId), status: 'confirmado' },
                    { limit: 20, order: [['estudante_id', 'DESC']] });
            return res.status(200).json(todasAsMatriculas);
        } catch (error) {
            return res.status(500).json(error.message);

        }
    }
    // O cliente quer poder consultar as matrículas por turma e saber quais delas estão lotadas, para organizar melhor as matrículas.
    static async pegaTurmasLotadas(req, res) {
        const lotacaoTurma = 2; //lotacaoTurma = numero de alunos para sala ser considerada lotada
        try {
            const turmasLotadas = await matriculasServices
                .encontraEContaRegistros({ status: 'confirmado' },
                    {
                        attributes: ['turma_id'],
                        group: ['turma_id'],
                        having: Sequelize.literal(`count(turma_id) >= ${lotacaoTurma}`)
                    })


            return res.status(200).json(turmasLotadas.count);
        } catch (error) {
            return res.status(500).json(error.message);

        }
    }


    static async pegaUmaMatricula(req, res) {
        const { estudanteId, matriculaId } = req.params;

        try {
            const umaMatricula = await matriculasServices.pegaUmRegistro({
                    id: Number(matriculaId),
                    estudante_id: Number(estudanteId)
            });
            return res.status(200).json(umaMatricula);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async criaMatricula(req, res) {
        const { estudanteId } = req.params;
        // What do these three dots (...) do?
        // That's property spread notation: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
        // Spread syntax can be used when all elements from an object or array need to be included in a list of some kind.
        const novaMatricula = { ...req.body, estudante_id: Number(estudanteId) };
        try {
            const novaMatriculaCriada = await matriculasServices.criaRegistro(novaMatricula);
            return res.status(200).json(novaMatriculaCriada);
        } catch (error) {
            return res.status(500).json(error.message);

        }
    }


    static async atualizaMatricula(req, res) {
        const { estudanteId, matriculaId } = req.params;
        const novasInfos = req.body;
        try {
            await matriculasServices.atualizaRegistros(novasInfos, {
                    id: Number(matriculaId),
                    estudante_id: Number(estudanteId)
            });
            return res.status(200).json({ mensagem: `id ${matriculaId} atualizado`});
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    // Na aula 01.05 (vide notas de aula) as tabelas foram alterada para que nenhum dado seja realmente apagado
    // ou seja, caso o usuário apague um dado, o sistema irá apenas fazer um soft delete
    static async apagaMatricula(req, res) {
        const { matriculaId } = req.params;

        try {
            await matriculasServices.apagaRegistro(matriculaId);


            return res.status(200).json({ mensagem: `id ${matriculaId} foi apagado` });
        } catch (error) {
            return res.status(500).json(error.message);

        }
    }

    // os dados não são realmente apagados, mas sofrem apenas soft delete
    // dessa forma, é possível restaurar os dados através do método restore
    static async restauraMatricula(req, res) {
        const { matriculaId } = req.params
        try {
            await matriculasServices.restauraRegistro(matriculaId);
            return res.status(200).json({ mensagem: `id ${matriculaId} restaurado` })
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }


}

module.exports = MatriculaController;
