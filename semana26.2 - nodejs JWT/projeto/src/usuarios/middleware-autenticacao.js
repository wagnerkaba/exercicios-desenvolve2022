const passport = require('passport');

module.exports = {

    // middleware para tratar erros que aparecem na estratégia local do passport
    local: (req, res, next) => {
        passport.authenticate(
            'local',
            { session: false },
            (erro, usuario, info) => {

                console.log("middlewaresAutenticacao.local");

                // aqui são tratados os erros que ocorrem na hipótese de usuário ou senha inválidos
                if (erro && erro.name === 'InvalidArgumentError') {
                    return res.status(401).json({ erro: erro.message });
                }

                // aqui são tratados quaisquer erros que não foram previstos
                if (erro) {
                    return res.status(500).json({ erro: erro.message });
                }

                // Aqui é tratado a hipótese em que o input está mal formatado
                // Ou seja, a função call-back do passport authenticate é chamada com os atributos erro como null e usuário como false.
                if (!usuario) {
                    return res.status(401).json();
                }

                req.user = usuario; // caso a autenticação tenha dado certo, usuario é inserido em req.user
                return next(); // chama o próximo middleware
            }
        )(req, res, next); // veja nota de aula: req, res, next.md
    },

    // middleware para tratar erros que aparecem na estratégia bearer do passport
    bearer: (req, res, next) => {

        passport.authenticate(
            'bearer',
            { session: false },
            (erro, usuario, info) => {


                // aqui é tratado a hipótese em que a credencial não é válida
                if (erro && erro.name === 'JsonWebTokenError') {
                    return res.status(401).json({ erro: erro.message });
                }

                // aqui é tratado a hipótese em que o tempo do token expirou
                if (erro && erro.name === 'TokenExpiredError') {
                    return res.status(401).json({ erro: erro.message, expiradoEm: erro.expiredAt });
                }

                // aqui são tratados quaisquer erros que não foram previstos
                if (erro) {
                    return res.status(500).json({ erro: erro.message });
                }

                // Aqui é tratado a hipótese em que o input está mal formatado
                // Ou seja, a função call-back do passport authenticate é chamada com os atributos erro como null e usuário como false.
                if (!usuario) {
                    return res.status(401).json({ erro: 'usuario = false' });
                }

                req.token = info.token;
                req.user = usuario; // caso a autenticação tenha dado certo, usuario é inserido em req.user
                return next(); // chama o próximo middleware
            }
        )(req, res, next); // veja nota de aula: req, res, next.md


    }
}