const Post = require('./posts-modelo')
const { InvalidArgumentError } = require('../erros')

module.exports = {
  async adiciona (req, res) {
    try {
      req.body.autor = req.user.id
      const post = new Post(req.body)
      await post.adiciona()

      res.status(201).json(post)
    } catch (erro) {
      if (erro instanceof InvalidArgumentError) {
        return res.status(400).json({ erro: erro.message })
      }
      res.status(500).json({ erro: erro.message })
    }
  },

  async lista (req, res) {
    try {
      let posts = await Post.listarTodos()

      // se o usuário não estiver autenticado, ele pode ver apenas o titulo e o conteudo do post
      if(!req.estaAutenticado){
        posts = posts.map(post => ({titulo: post.titulo, conteudo: post.conteudo}))
      }

      res.json(posts)
    } catch (erro) {
      return res.status(500).json({ erro: erro.message })
    }
  },

  async obterDetalhes (req, res) {
    try {
      const post = await Post.buscaPorId(req.params.id, req.user.id)
      res.json(post)
    } catch (erro) {
      return res.status(500).json({ erro: erro.message })
    }
  },

  async remover (req, res) {
    try {

      let post;

      console.log(req.acesso);

      if (req.acesso.todos.permitido === true){
        post = await Post.buscaPorId(req.params.id)
      } else if (req.acesso.apenasSeu.permitido === true){
        post = await Post.buscaPorIdAutor(req.params.id, req.user.id)

      }

      //CORRIGIR: SE UM EDITOR TENTA APAGAR UM POST QUE NÃO É SEU, post será nulo (RESPOSTA DO MÉTODO buscaPorIdAutor)
      //SE POST É NULO, post.remover vai dar erro!!!!
      post.remover()
      res.status(204)
      res.end()
    } catch (erro) {
      return res.status(500).json({ erro: erro.message })
    }
  }
}
