
// A router object is an isolated instance of middleware and routes. You can think of it as a “mini-application,” capable only of performing middleware and routing functions. Every Express application has a built-in app router.
// A router behaves like middleware itself, so you can use it as an argument to app.use() or as the argument to another router’s use() method.
// The top-level express object has a Router() method that creates a new router object.
// Once you’ve created a router object, you can add middleware and HTTP method routes (such as get, put, post, and so on) to it just like an application.
// https://expressjs.com/en/4x/api.html#router
const roteador = require('express').Router();

roteador.get('/', (requisicao, resposta) => {
    resposta.send(
        JSON.stringify([])
    )
})


module.exports = roteador;