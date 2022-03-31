
// api/routes/index.js é o ponto de entrada que gerencia os arquivos de rotas, importa os métodos de cada arquivo api/routes/[arquivo] através dos require e chama estes métodos de acordo com a rota acessada pelo usuário.

const bodyParser = require('body-parser');
const pessoas = require('./pessoasRoute');
module.exports = app => {
    app.use(bodyParser.json());
    app.use(pessoas);
}