const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const NaoEncontrado = require('./erros/NaoEncontrado');
const CampoInvalido = require('./erros/CampoInvalido');
const DadosNaoFornecidos = require('./erros/DadosNaoFornecidos');


// indicação do local em que está o diretório config
process.env["NODE_CONFIG_DIR"] = "../config/";
const config = require('config');
const roteador = require('./rotas/fornecedores');

app.use(bodyParser.json());

app.use('/api/fornecedores', roteador);

//Função que faz tratamento dos erros (error-handling middleware function)
// Para entender sobre middleware, veja a pasta "api-middleware" nesta semana 10.
//Error-handling middleware always takes four arguments. You must provide four arguments to identify it as an error-handling middleware function. Even if you don’t need to use the next object, you must specify it to maintain the signature. Otherwise, the next object will be interpreted as regular middleware and will fail to handle errors. For details about error-handling middleware, see: Error handling.
//Define error-handling middleware functions in the same way as other middleware functions, except with four arguments instead of three, specifically with the signature (err, req, res, next)):
//https://expressjs.com/en/4x/api.html#middleware-callback-function-examples
//You define error-handling middleware last, after other app.use() and routes calls
// https://expressjs.com/en/guide/error-handling.html
app.use((erro, requisicao, resposta, next) => {
    let status = 500;

    if (erro instanceof NaoEncontrado){
        status = 404;
    } 

    if (erro instanceof CampoInvalido || erro instanceof DadosNaoFornecidos){
        status = 400;

    } 
    

    resposta.status(status);
    resposta.send(
        JSON.stringify({
            mensagem: erro.message,
            id: erro.idErro
        })
    );
})




const porta = config.get('api.porta');

app.listen(porta, () => console.log(`API foi inicializada na porta ${porta}`));