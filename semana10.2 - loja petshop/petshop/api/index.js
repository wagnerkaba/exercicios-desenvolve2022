const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// indicação do local em que está o diretório config
process.env["NODE_CONFIG_DIR"] = "../config/";
const config = require('config');
const roteador = require('./rotas/fornecedores');

app.use(bodyParser.json());

app.use('/api/fornecedores', roteador);


const porta = config.get('api.porta');

app.listen(porta, () => console.log(`API foi inicializada na porta ${porta}`));