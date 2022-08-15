const Usuario = require('./usuarios-modelo')
const { InvalidArgumentError, NaoEncontrado } = require('../erros')

const tokens = require('./tokens')
const { EmailVerificacao, EmailRedefinicaoSenha } = require('./emails')
const {ConversorUsuario} = require('../conversores');

function geraEndereco(rota, token) {
  const baseURL = process.env.BASE_URL
  return `${baseURL}${rota}${token}`
}

module.exports = {
  async adiciona(req, res, proximo) {
    const { nome, email, senha, cargo } = req.body

    try {
      const usuario = new Usuario({
        nome,
        email,
        emailVerificado: false,
        cargo
      })
      await usuario.adicionaSenha(senha)
      await usuario.adiciona()

      const token = tokens.verificacaoEmail.cria(usuario.id)
      const endereco = geraEndereco('/usuario/verifica_email/', token)
      const emailVerificacao = new EmailVerificacao(usuario, endereco)
      emailVerificacao.enviaEmail().catch(console.log)

      res.status(201).json()
    } catch (erro) {
      //segue para middleware de tratamento de erros em server.js
      proximo(erro);
    }
  },

  async login(req, res, proximo) {
    try {
      const accessToken = tokens.access.cria(req.user.id)
      const refreshToken = await tokens.refresh.cria(req.user.id)
      res.set('Authorization', accessToken)
      res.status(200).json({ refreshToken })
    } catch (erro) {
      //segue para middleware de tratamento de erros em server.js
      proximo(erro);
    }
  },

  async logout(req, res, proximo) {
    try {
      const token = req.token
      await tokens.access.invalida(token)
      res.status(204).json()
    } catch (erro) {
      //segue para middleware de tratamento de erros em server.js
      proximo(erro);
    }
  },

  async lista(req, res, proximo) {
    try {
      const usuarios = await Usuario.lista();

      // para entender atributos, veja nota de aula: attributes.md
      // se a pessoa tiver acesso a todos os dados, então os atributos são capturados de todos. 
      // caso contrário, os atributos serão capturados de apenasSeu
      const atributos = req.acesso.todos.permitido ? req.acesso.todos.atributos : req.acesso.apenasSeu.atributos;
      const conversor = new ConversorUsuario('json', atributos);

      //converter limita as informações que serão mostradas dependendo do cargo do usuario
      //para ver o que cada cargo pode fazer, vide controleDeAcesso.js
      res.send(conversor.converter(usuarios));
    } catch (erro) {
      //segue para middleware de tratamento de erros em server.js
      proximo(erro);
    }
  },

  async verificaEmail(req, res, proximo) {
    try {
      const usuario = req.user
      await usuario.verificaEmail()
      res.status(200).json()
    } catch (erro) {
      //segue para middleware de tratamento de erros em server.js
      proximo(erro);
    }
  },

  async deleta(req, res, proximo) {
    try {
      const usuario = await Usuario.buscaPorId(req.params.id)
      await usuario.deleta()
      res.status(200).json()
    } catch (erro) {
      //segue para middleware de tratamento de erros em server.js
      proximo(erro);
    }
  },

  async esqueciMinhaSenha(requisicao, resposta, proximo){

    const respostaPadrao = {mensagem: 'Se encontrarmos um usuário com este email, vamos enviar uma mensagem com as instruções para redefinir a senha'};
    try {
      const email = requisicao.body.email;
      const usuario = await Usuario.buscaPorEmail(email);
      const token = await tokens.redefinicaoDeSenha.criarToken(usuario.id);
      const emailRedefinicaoSenha = new EmailRedefinicaoSenha(usuario, token);
      await emailRedefinicaoSenha.enviaEmail();
      resposta.send(respostaPadrao);

    } catch (erro){
      if(erro instanceof NaoEncontrado){

        // se o usuário não foi encontrado, seria um erro de segurança dizer que o email não foi encontrado
        // According to the OWASP Auth Guidelines, "An application should respond with a generic error message regardless of whether the user ID or password was incorrect. It should also give no indication to the status of an existing account."
        resposta.send(respostaPadrao);
        return;
      }

      proximo(erro);
    }
  },

  async trocarSenha(requisicao, resposta, proximo){
    try{
      if (typeof requisicao.body.token !== 'string' || requisicao.body.token.length === 0){
        throw new InvalidArgumentError('O token está inválido')
      }

      const id = await tokens.redefinicaoDeSenha.verifica(requisicao.body.token);
      const usuario = await Usuario.buscaPorId(id);
      await usuario.adicionaSenha(requisicao.body.senha);
      await usuario.atualizarSenha();
      resposta.send({mensagem: 'Sua senha foi atualizada com sucesso'})
    } catch(erro){
      proximo(erro);
    }
  }
}
