const autorizacao = require('./autorizacao');

// Este middleware é uma function composition. Para saber mais, vide "nota de aula 1.8 - middleware"
module.exports = (entidade, acao) => (requisicao, resposta, proximo) => {

    console.log('tentarAutorizar');

    // se usuario está autenticado, então segue para middleware autorizacao
    if (requisicao.estaAutenticado === true){
        console.log("estaAutenticado === true");
        console.log(`entidade: ${entidade}`);
        console.log(`acao: ${acao}`);
        return autorizacao(entidade, acao)(requisicao, resposta, proximo)
    }

    // se usuario não está autenticado, então segue para próximo middleware
    proximo();
}

