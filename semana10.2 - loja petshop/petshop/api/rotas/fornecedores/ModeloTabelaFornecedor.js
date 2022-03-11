const Sequelize = require('sequelize');
const instanciaSequelize = require('../../banco-de-dados')

const colunas = {
    empresa: {
        type: Sequelize.STRING,
        allowNull: false
    }, 
    email: {
        type: Sequelize.STRING,
        allowNull: false
    }, 
    categoria: {
        type: Sequelize.ENUM('ração', 'brinquedos'),
        allowNull: false
    }
}

const opcoes = {
    freezeTableName: true,
    tableName: 'fornecedores',
    timestamps: true,
    createdAt: 'dataCriacao',
    updatedAt: 'dataAtualizacao',
    version: 'versao'
}

// Models are the essence of Sequelize. A model is an abstraction that represents a table in your database. In Sequelize, it is a class that extends Model.
// To define mappings between a model and a table, use the define method. Sequelize will then automatically add the attributes createdAt and updatedAt to it. So you will be able to know when the database entry went into the db and when it was updated the last time. 

module.exports = instanciaSequelize.define('fornecedor', colunas, opcoes);