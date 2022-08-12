require('dotenv').config()

const app = require('./app')
const port = 3000
require('./database')
require('./redis/blocklist-access-token')
require('./redis/allowlist-refresh-token')

const routes = require('./rotas')
const { InvalidArgumentError, NaoEncontrado, NaoAutorizado } = require('./src/erros')
const jwt = require('jsonwebtoken');

//Objetivos deste middleware:
//      1. colocar o Content-Type no header da resposta para indicar que a resposta está em json
//      2. se uma requisição pedir um formato diferente de json, encerrar requisição
app.use((requisicao, resposta, proximo) => {

    // busca o header accept
    //The Accept request HTTP header indicates which content types, expressed as MIME types, the client is able to understand.
    const accept = requisicao.get('Accept');

    console.log(accept);

    // verifica se accept contém json ou */*
    // se o accept contém */*, isso significa que qualquer formato é aceitável
    if (accept !=='application/json' && accept !== '*/*') {

        // se o accept não contém json ou /*, então a requisição é encerrada com o status 406: não aceito
        resposta.status(406)
        resposta.end()
        return
    }


    //colocar o Content-Type no header da resposta para indicar que a resposta está em json
    resposta.set({
        'Content-Type': 'application/json'
    })


    proximo()
})



routes(app)

// middleware para tratamento de erros. Para saber mais, vide nota de aula: error-handling middleware function
app.use((erro, requisicao, resposta, proximo) => {


    //http response status 500 é a resposta padrão desta api quando o erro não está previsto
    //Para saber mais sobre http response status: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
    let status = 500;
    const corpo = {
        mensagem: erro.message
    }

    if (erro instanceof NaoEncontrado) {
        status = 404;
    }

    if (erro instanceof NaoAutorizado) {
        status = 401;
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
