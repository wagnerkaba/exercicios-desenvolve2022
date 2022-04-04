// OBS: parte deste código foi gerado automaticamente. Vide "notas de aula 05.02 - Criando mais tabelas"


'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Turmas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Turmas.hasMany(models.Matriculas, {foreignKey: 'turma_id'});
      Turmas.belongsTo(models.Pessoas, {foreignKey: 'docente_id'});
      Turmas.belongsTo(models.Niveis, {foreignKey: 'nivel_id'});

    }
  }
  Turmas.init({
    data_inicio: DataTypes.DATEONLY
  }, {
    sequelize,
    paranoid: true, // A paranoid table is one that, when told to delete a record, it will not truly delete it. 

    modelName: 'Turmas',
  });
  return Turmas;
};