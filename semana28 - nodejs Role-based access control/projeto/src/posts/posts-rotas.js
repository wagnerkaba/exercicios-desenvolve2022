const postsControlador = require('./posts-controlador')
const { middlewaresAutenticacao } = require('../usuarios')
const autorizacao = require('../middlewares/autorizacao');
const tentarAutenticar = require('../middlewares/tentarAutenticar');
const tentarAutorizar = require('../middlewares/tentarAutorizar');

module.exports = app => {
  app
    .route('/post')
    .get(
      [tentarAutenticar, tentarAutorizar('post', 'ler')],
      postsControlador.lista
    )
    .post(
      [middlewaresAutenticacao.bearer, autorizacao('post', 'criar')],
      postsControlador.adiciona
    )

  app.route('/post/:id')
    .get(
      [middlewaresAutenticacao.bearer, autorizacao('post', 'ler')],
      postsControlador.obterDetalhes
    )
    .delete(
      //para deletar um post é preciso ter o token JWT e também é preciso enviar login e senha no body  
      //trata-se de dupla autenticação para evitar uma deleção acidental    
      [middlewaresAutenticacao.bearer, middlewaresAutenticacao.local, autorizacao('post', 'remover')],
      postsControlador.remover
    )
}
