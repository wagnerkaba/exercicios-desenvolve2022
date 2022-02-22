
const Atendimento = require('../models/atendimentos')


module.exports = app => {
    app.get('/atendimentos', (req, res) => res.send('você está na rota de atendimentos e esta pagina foi atualizada'));

    app.post('/atendimentos', (req, res) => {
        const atendimento = req.body;
        Atendimento.adiciona(atendimento);
        res.send('você esta na rota de atendimentos e está realizando um post')
    });
}
