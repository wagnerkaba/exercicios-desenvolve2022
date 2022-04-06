const database = require('../models');
const Sequelize = require('sequelize');
// Sequelize Operators: https://sequelize.org/docs/v6/core-concepts/model-querying-basics/#operators
const Op = Sequelize.Op;

class TurmaController {
  static async pegaTodasAsTurmas(req, res) {

    // data_inicial e data_final são usadas para filtrar turmas
    // esses parâmetros são enviados por meio de query strings
    const { data_inicial, data_final } = req.query;
    const where = {};

    // se data_inicial e data_final forem enviadas por meio de query string, a api vai criar um objeto como o exemplo abaixo:
    //   where: {
    //     data_inicio: {
    //       [Op.gte]: data_inicial,
    //       [Op.lte]: data_final
    //     }
    //   }

    if (data_inicial || data_final) {
      where.data_inicio = {};
      if (data_inicial) {
        // gte significa "greater than or equal to"
        // Para saber mais: https://sequelize.org/docs/v6/core-concepts/model-querying-basics/#operators
        where.data_inicio[Op.gte] = data_inicial;
      }
      if (data_final) {
        // lte significa "less than or equal to"
        // Para saber mais: https://sequelize.org/docs/v6/core-concepts/model-querying-basics/#operators
        where.data_inicio[Op.lte] = data_final;
      }
    }

    // veja o resultado final do objeto "where"
    console.log({where});

    try {

      const todasAsTurmas = await database.Turmas.findAll({ where });
      return res.status(200).json(todasAsTurmas);
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async pegaUmaTurma(req, res) {
    const { id } = req.params
    try {
      const umaTurma = await database.Turmas.findOne({
        where: {
          id: Number(id)
        }
      })
      return res.status(200).json(umaTurma)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async criaTurma(req, res) {
    const novaTurma = req.body
    try {
      const novaTurmaCriada = await database.Turmas.create(novaTurma)
      return res.status(200).json(novaTurmaCriada)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async atualizaTurma(req, res) {
    const { id } = req.params
    const novasInfos = req.body
    try {
      await database.Turmas.update(novasInfos, { where: { id: Number(id) } })
      const turmaAtualizada = await database.Turmas.findOne({ where: { id: Number(id) } })
      return res.status(200).json(turmaAtualizada)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  // Na aula 01.05 (vide notas de aula) as tabelas foram alterada para que nenhum dado seja realmente apagado
  // ou seja, caso o usuário apague um dado, o sistema irá apenas fazer um soft delete
  static async apagaTurma(req, res) {
    const { id } = req.params
    try {
      await database.Turmas.destroy({ where: { id: Number(id) } })
      return res.status(200).json({ mensagem: `id ${id} deletado` })

    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  // os dados não são realmente apagados, mas sofrem apenas soft delete
  // dessa forma, é possível restaurar os dados através do método restore
  static async restauraTurma(req, res) {
    const { id } = req.params
    try {
      await database.Turmas.restore({ where: { id: Number(id) } })
      return res.status(200).json({ mensagem: `id ${id} restaurado` })
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

}

module.exports = TurmaController