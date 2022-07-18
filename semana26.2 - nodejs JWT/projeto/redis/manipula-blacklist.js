const blacklist = require('./blacklist');

const { promisify } = require('util'); // veja nota de aula sobre promisify
const existsAsync = promisify(blacklist.exists).bind(blacklist);
const setAsync = promisify(blacklist.set).bind(blacklist);

const jwt = require('jsonwebtoken');
const { createHash } = require('crypto');


// cria um hash a partir de um token para ser utilizado como chave no redis
function geraTokenHash(token) {
    return createHash('sha256')
        .update(token)
        .digest('hex');
}

module.exports = {
    adiciona: async token => {

        // recupera a data de expiração do jwt token 
        const dataExpiracao = jwt.decode(token).exp;

        const tokenHash = geraTokenHash(token);
        await setAsync(tokenHash, '');

        // o token vai ficar na blacklist enquanto não tiver passado a data de expiração
        // depois de passar a data de expiração, não há mais necessidade de o token ficar na blacklist
        blacklist.expireat(tokenHash, dataExpiracao);
    },

    contemToken: async token => {

        const tokenHash = geraTokenHash(token);
        const resultado = await existsAsync(tokenHash);
        return resultado === 1;
    }

}