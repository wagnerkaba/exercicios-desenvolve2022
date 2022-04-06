// OBS: parte deste código foi gerado automaticamente. Vide "aula 02.02 - Criando modelos" na pasta "notas-de-aula"

'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pessoas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Pessoas.hasMany(models.Turmas, { foreignKey: 'docente_id' });
      Pessoas.hasMany(models.Matriculas, {
        foreignKey: 'estudante_id',
        // association scope: https://sequelize.org/docs/v6/advanced-association-concepts/association-scopes/
        scope: { status: 'confirmado' }, //neste scope o sistema retorna apenas matriculas com "status:confirmado"
        as: 'aulasMatriculadas' //nome do association-scope
      });
    }
  }

  
  Pessoas.init({
    nome: {
      type: DataTypes.STRING,
      validate: {
        // o sequelize tem um validador próprio para tamanho de string chamado "len": https://sequelize.org/docs/v6/core-concepts/validations-and-constraints/
        // no entanto, a professora criou a função abaixo para ensinar como utilizar funções customizadas para validação.
        funcaoValidadora: function (dado) {
          if (dado.length < 3) throw new Error('o campo nome deve ter mais de 3 caracteres');
        }
      }
    },
    ativo: DataTypes.BOOLEAN,
    email: {
      type: DataTypes.STRING,
      // validação de email utilizando validation do sequelize
      validate: {
        isEmail: {
          args: true,
          msg: 'dados do tipo email inválidos'
        }
      }
    },

    role: DataTypes.STRING
  }, {
    sequelize,
    paranoid: true, // A paranoid table is one that, when told to delete a record, it will not truly delete it. 
    modelName: 'Pessoas',
    defaultScope: {
      // o cliente gostaria que na lista de Pessoas, por padrão, fossem exibidos somente os usuários ativos.
      // Para fazer isso, é utilizado defaultScope: https://sequelize.org/docs/v6/other-topics/scopes/
      // This means, that with the model definition above, Pessoas.findAll() will create the following query:
      // SELECT * FROM pessoas WHERE ativo = true
      where: { ativo: true }
    },
    scopes: {
      // No defaultScope, são exibidos apenas os usuários ativos. 
      // No scope "todos", todos os usuários são exibidos.
      todos: { where: {} }
    }
  });
  return Pessoas;
};