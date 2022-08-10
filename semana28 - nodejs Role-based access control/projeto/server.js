require('dotenv').config()

const app = require('./app')
const port = 3000
require('./database')
require('./redis/blocklist-access-token')
require('./redis/allowlist-refresh-token')

const routes = require('./rotas')
const { InvalidArgumentError } = require('./src/erros')
const jwt = require('jsonwebtoken');

routes(app)


app.use((erro, requisicao, resposta, proximo) => {

    //500 é o erro padrão
    let status = 500;
    const corpo = {
        mensagem: erro.message
    }

    if (erro instanceof InvalidArgumentError) {
        status = 400;
    }
    if (erro instanceof jwt.JsonWebTokenError) {
        status = 401;
    }

    if (erro instanceof jwt.TokenExpiredError) {
        status = 401;
        corpo.expiradoEm = erro.expiredAt;
    }
    resposta.status(status);
    resposta.json(corpo);

})

app.listen(port, () => console.log('A API está funcionando!'))
