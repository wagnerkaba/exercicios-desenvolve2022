const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const NaoEncontrado = require('./erros/NaoEncontrado');
const CampoInvalido = require('./erros/CampoInvalido');
const DadosNaoFornecidos = require('./erros/DadosNaoFornecidos');
const ValorNaoSuportado = require('./erros/ValorNaoSuportado');
const formatosAceitos = require('./Serializador').formatosAceitos;
const SerializadorErro = require('./Serializador').SerializadorErro;

// indicação do local em que está o diretório config
process.env["NODE_CONFIG_DIR"] = "../config/";
const config = require('config');
const roteador = require('./rotas/fornecedores');

app.use(bodyParser.json());


// Middeware para verificar qual é o formato requisitado como resposta pelo cliente
// Para entender sobre middleware, veja a pasta "api-middleware" nesta semana 10.
app.use((requisicao, resposta, next) => {

    // procura o header da requisição com o parâmetro Accept
    // O parâmetro accept indica o formato aceito como resposta pelo cliente
    let formatoRequisitado = requisicao.header('Accept');


    // '*/*' é o formato default do Accept 
    // se o cliente não definir o formato requisitado, ele irá vir com formato default
    if (formatoRequisitado === '*/*') {

        // se o formato requisitado for default ('*/*'), então pressupõe-se que seja json
        formatoRequisitado = 'application/json';
    }

    // verifica se o formato requisitado pelo cliente existe dentro de formatosAceitos
    // se "formatosAceitos.indexOf" for igual a -1, isso significa que o formato requisitado não é aceito
    if (formatosAceitos.indexOf(formatoRequisitado) === -1){

        resposta.status(406);
        resposta.end();
        return;

    }

    // se o formato requisitado é aceito, então o formato da resposta já pode ser definido como idêntico a "formatoRequisitado"
    resposta.setHeader('Content-Type', formatoRequisitado);

    // chama o próximo middleware ou route handler (Para entender melhor, veja a pasta "api-middleware" nesta semana 10.)
    next();

})

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

    if (erro instanceof ValorNaoSuportado) {
        status = 406;
    }
    
    const serializadorErro = new SerializadorErro(
        resposta.getHeader('Content-Type')
    );
    resposta.status(status);
    resposta.send(
        serializadorErro.serializar({
            mensagem: erro.message,
            id: erro.idErro
        })
    );
})




const porta = config.get('api.porta');

app.listen(porta, () => console.log(`API foi inicializada na porta ${porta}`));