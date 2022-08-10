const {middlewaresAutenticacao} = require('../usuarios');

module.exports = (requisicao, resposta, proximo) => {

    console.log('tentarAutenticar');
    requisicao.estaAutenticado = false;

    // se o header contém authorization, então requisição vai para middleware bearer
    if (requisicao.get('Authorization')){
        return middlewaresAutenticacao.bearer(requisicao, resposta, proximo);
    }

    // se o header não contém authorization, então segue para o próximo middleware
    proximo();
}