const Post = require('./posts-modelo')
const { InvalidArgumentError } = require('../erros')
const {ConversorPost} = require('../conversores');
const {EmailNovoPost} = require('../usuarios/emails');

module.exports = {
  async adiciona (req, res, proximo) {
    try {
      req.body.autor = req.user.id
      const post = new Post(req.body)
      await post.adiciona()

      
      const email = new EmailNovoPost(req.user, post.titulo);
      // notifica usuario por email que um novo post foi criado
      await email.enviaEmail();

      res.status(201).json(post)
    } catch (erro) {
      //segue para middleware de tratamento de erros em server.js
      proximo(erro);
    }
  },

  async lista (req, res, proximo) {
    try {
      let posts = await Post.listarTodos();
            
      // OBSERVAÇÃO 1
      // para entender atributos, veja nota de aula: attributes.md
      // se a pessoa tiver acesso a todos os dados, então os atributos são capturados de todos. 
      // caso contrário, os atributos serão capturados de apenasSeu
      // OBSERVAÇÃO 2
      // req.acesso pode ser undefined caso o usuário não esteja autenticado. Isso pode dar erro "Cannot read Properties of Undefined"
      // Para evitar erro, eu coloquei "?"
      // Para entender melhor "?", veja nota de aula "Cannot read Properties of Undefined.md"  
      const atributos = req.acesso?.todos.permitido ? req.acesso.todos.atributos : req.acesso?.apenasSeu.atributos;

      const conversor = new ConversorPost('json', atributos);

      // se o usuário não estiver autenticado, ele será avisado que precisa assinar o blog para ver todo conteudo
      if(!req.estaAutenticado){
        posts = posts.map(post => {
          post.conteudo = post.conteudo.substr(0,10) + '... Você precisa assinar o blog para ler o restante do post.';
          return post;
        })
      }

      //converter faz com que apenas o titulo e o conteudo do post sejam mostrados, caso usuario não esteja autenticado
      res.send(conversor.converter(posts));
    } catch (erro) {
      //segue para middleware de tratamento de erros em server.js
      proximo(erro);
    }
  },

  async obterDetalhes (req, res, proximo) {
    try {
      const post = await Post.buscaPorId(req.params.id, req.user.id)
      res.json(post)
    } catch (erro) {
      //segue para middleware de tratamento de erros em server.js
      proximo(erro);
    }
  },

  async remover (req, res, proximo) {
    try {

      let post;

      console.log(req.acesso);

      if (req.acesso.todos.permitido === true){
        post = await Post.buscaPorId(req.params.id)
      } else if (req.acesso.apenasSeu.permitido === true){
        post = await Post.buscaPorIdAutor(req.params.id, req.user.id)

      }

      console.log(post);

      post.remover()
      res.status(204)
      res.end()
    } catch (erro) {
      //segue para middleware de tratamento de erros em server.js
      proximo(erro);
    }
  }
}
