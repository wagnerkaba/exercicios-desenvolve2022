// OBS: parte deste código foi gerado automaticamente. Vide "notas de aula 05.02 - Criando mais tabelas"


'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Matriculas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Matriculas.belongsTo(models.Pessoas, {foreignKey: 'estudante_id'});
      Matriculas.belongsTo(models.Turmas, {foreignKey: 'turma_id'});
    }
  }
  Matriculas.init({
    status: DataTypes.STRING
  }, {
    sequelize,
    paranoid: true, // A paranoid table is one that, when told to delete a record, it will not truly delete it. 
    modelName: 'Matriculas',
  });
  return Matriculas;
};