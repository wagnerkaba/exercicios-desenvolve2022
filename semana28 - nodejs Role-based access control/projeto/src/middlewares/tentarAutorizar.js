const autorizacao = require('./autorizacao');

// Este middleware é uma function composition. Para saber mais, vide "nota de aula 1.8 - middleware"
module.exports = (entidade, acao) => (requisicao, resposta, proximo) => {
    if (requisicao.estaAutenticado === true){
        return autorizacao(entidade, acao)(requisicao, resposta, proximo)
    }

    proximo();
}

