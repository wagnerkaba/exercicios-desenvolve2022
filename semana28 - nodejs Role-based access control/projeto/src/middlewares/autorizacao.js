
const controle = require('../controleDeAcesso');

const metodos = {
    ler: {
        todos: 'readAny',
        apenasSeu: 'readOwn'
    },
    criar: {
        todos: 'createAny',
        apenasSeu: 'createOwn'
    },

    remover: {
        todos: 'deleteAny',
        apenasSeu: 'deleteOwn'
    }
}

// Este middleware é uma function composition. Para saber mais, vide "nota de aula 1.8 - middleware"
module.exports = (entidade, acao) => (requisicao, resposta, proximo) => {
    const permissoesDoCargo = controle.can(requisicao.user.cargo);

    const acoes = metodos[acao];
       
    // entidade pode ser 'usuario' ou 'post'
    const permissaoTodos = permissoesDoCargo[acoes.todos](entidade);
    const permissaoApenasSeu = permissoesDoCargo[acoes.apenasSeu](entidade);

    if (permissaoTodos.granted === false && permissaoApenasSeu.granted === false) {

        // se não tiver permissaoTodos e nem permissaoApenasSeus então o usuario não tem nenhuma autorização
        console.log(`permissaoTodos.granted: ${permissaoTodos.granted}`);
        console.log(`permissaoApenasSeu.granted: ${permissaoApenasSeu.granted}`);

        resposta.status(403);
        resposta.end();
        return;
    }

    requisicao.acesso = {
        todos: {
            permitido: permissaoTodos.granted,
            atributos: permissaoTodos.attributes
        },
        apenasSeu: {
            permitido: permissaoApenasSeu.granted,
            atributos: permissaoApenasSeu.attributes
        }
    }
    proximo();
}