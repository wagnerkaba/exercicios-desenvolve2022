const passport = require('passport');
const Usuario = require('./usuarios-modelo');
const { InvalidArgumentError } = require('../erros');
const tokens = require('./tokens');




module.exports = {

  // middleware para tratar erros que aparecem na estratégia local do passport
  // para saber mais, vide projeto semana 26
  local(req, res, next) {
    passport.authenticate(
      'local',
      { session: false },
      (erro, usuario, info) => {
        if (erro && erro.name === 'InvalidArgumentError') {
          return res.status(401).json({ erro: erro.message });
        }

        if (erro) {
          return res.status(500).json({ erro: erro.message });
        }

        if (!usuario) {
          return res.status(401).json();
        }

        req.user = usuario;
        return next();
      }
    )(req, res, next);
  },

  // middleware para tratar erros que aparecem na estratégia bearer do passport
  // para saber mais, vide projeto semana 26
  bearer(req, res, next) {
    passport.authenticate(
      'bearer',
      { session: false },
      (erro, usuario, info) => {
        if (erro && erro.name === 'JsonWebTokenError') {
          return res.status(401).json({ erro: erro.message });
        }

        if (erro && erro.name === 'TokenExpiredError') {
          return res
            .status(401)
            .json({ erro: erro.message, expiradoEm: erro.expiredAt });
        }

        if (erro) {
          return res.status(500).json({ erro: erro.message });
        }

        if (!usuario) {
          return res.status(401).json();
        }

        req.token = info.token;
        req.user = usuario;
        return next();
      }
    )(req, res, next);
  },

  async refresh(req, res, next) {

    try {
      // captura o refreshToken da requisição
      const { refreshToken } = req.body;

      // verifica se o refreshToken é válido e recebe o id do usuário
      const id = await tokens.refresh.verifica(refreshToken);

      await tokens.refresh.invalida(refreshToken);

      req.user = await Usuario.buscaPorId(id);

      // chama o próximo middleware
      return next();
    } catch (erro){
      if(erro.name === 'InvalidArgumentError')  {
        return res.status(401).json({erro: erro.message});
      }
      return res.status(500).json({erro:erro.message});
    }

  }
};
