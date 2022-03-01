module.exports = app => {

    app.get('/pet', (req, res) => {
        res.send('ok');
    })

    app.post('/pet', (req, res) => {
        res.send('ok');
    })
}