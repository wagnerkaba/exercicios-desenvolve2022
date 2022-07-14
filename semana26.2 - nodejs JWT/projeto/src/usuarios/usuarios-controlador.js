const Usuario = require('./usuarios-modelo');
const { InvalidArgumentError, InternalServerError } = require('../erros');
const jwt = require('jsonwebtoken');

function criaTokenJWT(usuario){

  // payload é informação a ser enviada no token
  // Para saber mais, vide estrutura de um JWT no endereço: https://jwt.io/
  const payload = {
    id: usuario.id
  };
  // process.env.CHAVE_JWT é uma variavel de ambiente salva no arquivo .env
  // para conseguir ler essa variável, é preciso ter instalado dotenv
  const token = jwt.sign(payload, process.env.CHAVE_JWT);
  return token;
}

module.exports = {
  adiciona: async (req, res) => {
    const { nome, email, senha } = req.body;

    try {
      const usuario = new Usuario({
        nome,
        email
      });

      await usuario.adicionaSenha(senha);

      await usuario.adiciona();

      res.status(201).json();
    } catch (erro) {
      if (erro instanceof InvalidArgumentError) {
        res.status(422).json({ erro: erro.message });
      } else if (erro instanceof InternalServerError) {
        res.status(500).json({ erro: erro.message });
      } else {
        res.status(500).json({ erro: erro.message });
      }
    }
  },

  login: (req, res) => {

    // cria o token JWT
    const token = criaTokenJWT(req.user);

    // envia o token JWT no header "authorization"
    res.set('Authorization', token);
    res.status(204).send();
  },

  lista: async (req, res) => {
    const usuarios = await Usuario.lista();
    res.json(usuarios);
  },

  deleta: async (req, res) => {
    const usuario = await Usuario.buscaPorId(req.params.id);
    try {
      await usuario.deleta();
      res.status(200).send();
    } catch (erro) {
      res.status(500).json({ erro: erro });
    }
  }
};
