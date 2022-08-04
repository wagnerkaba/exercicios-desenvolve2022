const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const moment = require('moment');
const allowlistRefreshToken = require('../../redis/allowlist-refresh-token');
const blocklistAccessToken = require('../../redis/blocklist-access-token');
const { InvalidArgumentError } = require('../erros');



function criaTokenJWT(id, [tempoQuantidade, tempoUnidade]) {

    const payload = { id };
    return jwt.sign(payload, process.env.CHAVE_JWT, { expiresIn: tempoQuantidade + tempoUnidade });
}

async function verificaTokenJWT(token, nome, blocklist) {
    await verificaTokenNaBlocklist(token, nome, blocklist);
    const { id } = jwt.verify(token, process.env.CHAVE_JWT);
    return id;
}

async function verificaTokenNaBlocklist(token, nome, blocklist) {

    if (!blocklist) {
        return;
    }
    const tokenNaBlocklist = await blocklist.contemToken(token);
    if (tokenNaBlocklist) {
        throw new jwt.JsonWebTokenError(`${nome} inválido por logout!`);
    }
}

function invalidaTokenJWT(token, blocklist) {
    return blocklist.adiciona(token);
}

async function criaTokenOpaco(id, [tempoQuantidade, tempoUnidade], allowlist) {
    // Para entender o que é um token opaco, vide nota de aula 1.05
    const tokenOpaco = crypto.randomBytes(24).toString('hex');
    const dataExpiracao = moment().add(tempoQuantidade, tempoUnidade).unix();
    await allowlist.adiciona(tokenOpaco, id, dataExpiracao);
    return tokenOpaco;
}

async function verificaTokenOpaco(token, nome, allowlist) {

    // verifica se token é nulo
    verificaTokenEnviado(token, nome);

    // verifica se token é válido
    const id = await allowlist.buscaValor(token);

    verificaTokenValido(id, nome);

    return id;
}

async function invalidaTokenOpaco(token, allowlist) {
    await allowlist.deleta(token);
}

function verificaTokenValido(id, nome) {
    // se id é nulo, token é inválido
    if (!id) {
        throw new InvalidArgumentError(`${nome} é inválido`);
    }
}

function verificaTokenEnviado(token, nome) {
    if (!token) {
        throw new InvalidArgumentError(`${nome} não foi enviado`);
    }
}
module.exports = {

    access: {
        nome: 'Access token',
        lista: blocklistAccessToken,
        expiracao: [15, 'm'],
        cria(id) {
            // Para entender "this", leia "How to call a function inside an object in javascript" em "notas de aula"
            return criaTokenJWT(id, this.expiracao);
        },
        verifica(token) {
            return verificaTokenJWT(token, this.nome, this.lista);
        },
        invalida(token) {
            return invalidaTokenJWT(token, this.lista);
        }

    },

    refresh: {
        nome: 'Refresh token',
        lista: allowlistRefreshToken,
        expiracao: [5, 'd'],
        cria(id) {
            // Para entender "this", leia "How to call a function inside an object in javascript" em "notas de aula"
            return criaTokenOpaco(id, this.expiracao, this.lista);
        },
        verifica(token) {
            return verificaTokenOpaco(token, this.nome, this.lista);
        },
        invalida(token) {
            return invalidaTokenOpaco(token, this.lista);
        }
    },

    verificacaoEmail: {
        nome: 'token de verificação de email',
        expiracao: [1, 'h'],
        cria(id) {
            return criaTokenJWT(id, this.expiracao);
        },
        verifica(token) {
            return verificaTokenJWT(token, this.nome);
        }
    }


}


