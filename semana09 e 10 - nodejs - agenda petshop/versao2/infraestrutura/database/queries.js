const conexao = require('./conexao');

// Explicação sobre: parametros = ''
// Trata-se de um Default Parameter
// Quando não for passado nenhum dado, parametros será igual a string vazia
// Para saber mais: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters
const executaQuery = (query, parametros = '') => {

    return new Promise((resolve, reject) => {
        conexao.query(query, parametros, (erros, resultados, campos) => {
            if (erros) {
                reject(erros);
            } else {
                resolve(resultados);
            }
        })
    })

}

module.exports = executaQuery;