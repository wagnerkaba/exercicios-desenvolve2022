const Sequelize = require('sequelize');

// indicação do local em que está o diretório config
process.env["NODE_CONFIG_DIR"] = "../../config/";
const config = require('config');


const database = config.get('mysql.database');
const usuario = config.get('mysql.usuario');
const senha = config.get('mysql.senha');
const meuHost = config.get('mysql.host');


const instancia = new Sequelize(
    database,
    usuario,
    senha, 
    {
        host: meuHost,
        dialect: 'mysql'

    }


)

module.exports = instancia;