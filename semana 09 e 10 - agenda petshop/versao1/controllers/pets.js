
const Pet = require('../models/pets');

module.exports = app => {

    app.get('/pet', (req, res) => {
        res.send('ok');
    })

    app.post('/pet', (req, res) => {
        const pet = req.body;
        Pet.adiciona(pet, res);
    })
}