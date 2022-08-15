const AccessControl = require('accesscontrol');
const controle = new AccessControl();

controle
    .grant('assinante')
    // ['id', 'titulo', 'conteudo', 'autor'] são attributes
    // Para entender attributes, veja nota de aula: attributes.md
    .readAny('post', ['id', 'titulo', 'conteudo', 'autor'])
    //assinante pode apenas ver o nome dos usuarios
    .readAny('usuario', ['nome']);

controle
    .grant('editor')
    .extend('assinante') //pode fazer tudo o que assinante faz
    .createOwn('post')
    .deleteOwn('post')

controle
    .grant('admin')
    .readAny('post')
    .createAny('post')
    .deleteAny('post')
    .readAny('usuario')
    .deleteAny('usuario')

module.exports = controle;