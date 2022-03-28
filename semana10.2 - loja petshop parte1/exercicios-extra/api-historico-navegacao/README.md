# [Brincando com status de resposta](https://cursos.alura.com.br/course/nodejs-api-rest-padronizada-escalavel/task/80279)



Crie uma API para gerenciar o histórico de navegação! Declare uma lista vazia no topo do arquivo para usar como lista de sites acessados.

Faça uma rota com o método POST para cadastrar novos sites à sua lista, verificando se o site possui URL e data de acesso!



## Resposta

Instale o Express: `npm install express`

Vamos declarar o express e instanciá-lo numa variável chamada app, temos que declarar também o pacote body-parser e usá-lo na nossa API para aceitarmos requisições em JSON.

Depois, vamos chamar o método `listen()` do nosso app para escutar requisições na porta 3000 e exibir uma mensagem quando estiver funcionando:

```
const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.json())

app.listen(3000, () => console.log('API está funcionando'))
```

Agora, vamos declarar uma variável chamada `sitesAcessados` como uma lista vazia. Depois, temos que criar uma requisição POST, com a rota “/api/sites” e uma função para processar a requisição:

```
// const app = …

app.post('/api/sites', (requisicao, resposta) => {
})

// app.listen()...
```

Dentro dessa função, primeiro temos que verificar se no corpo da requisição, está sendo enviado as propriedades url e dataDeAcesso. Fazemos isso com uma condicional, e caso dê falso, vamos enviar um objeto em JSON com a propriedade mensagem indicando para o cliente da API que é necessário enviar a url e `dataDeAcesso`, através do método `resposta.send()`.

```
// const app = …

const sitesAcessados = []

app.post('/api/sites', (requisicao, resposta) => {
  if (!requisicao.body.url || !requisicao.body.dataDeAcesso) {
    resposta.send(JSON.stringify({ mensagem: 'Os campos "url" e "dataDeAcesso" são obrigatórios e não podem estar vazios!' }))
  }
})

// app.listen()...
```

Como a mensagem de erro se refere à um erro no lado do cliente, no corpo da requisição, usamos o status 400 de resposta, aplicando pelo método `resposta.status()` antes de enviar as informações sobre o erro.

Podemos encerrar a requisição com `resposta.end()` e colocar um `return` para a função não continuar a ser executada:

```
// const app = …

const sitesAcessados = []

app.post('/api/sites', (requisicao, resposta) => {
  if (!requisicao.body.url || !requisicao.body.dataDeAcesso) {
    resposta.status(400)
    resposta.send(JSON.stringify({ mensagem: 'Os campos "url" e "dataDeAcesso" são obrigatórios e não podem estar vazios!' }))
    resposta.end()
    return
  }
})

// app.listen()...
```

Agora, caso os valores estejam corretos, esse código dentro do nosso `if` não será executado. Então temos que adicionar essas informações na nossa lista de `sitesAcessados`. Para isso, podemos usar o método `push()` da lista, onde informamos qualquer valor como parâmetro, e esse valor é adicionado à lista.

Declaramos uma variável chamada site contendo um objeto com a propriedade url e `dataDeAcesso`, com os valores apontando para os dados que vieram da requisição, depois adicionamos essa variável à nossa lista de `sitesAcessados`:

```
// const app = …

const sitesAcessados = []

app.post('/api/sites', (requisicao, resposta) => {
  if (!requisicao.body.url || !requisicao.body.dataDeAcesso) {
    resposta.status(400)
    resposta.send(JSON.stringify({ mensagem: 'Os campos "url" e "dataDeAcesso" são obrigatórios e não podem estar vazios!' }))
    resposta.end()
    return
  }

  const site = {
    url: requisicao.body.url,
    dataDeAcesso: requisicao.body.dataDeAcesso  }

  sitesAcessados.push(site)
})

// app.listen()...
```

Com a lista de `sitesAcessados` atualizada, podemos enviar na resposta, o objeto site que criamos em formato JSON.

Como a operação foi um sucesso, temos que indicar pelo status de resposta que foi criado com sucesso, para isso temos o status 201 Criado com o método `resposta.status()`:

```
// const app = …

const sitesAcessados = []

app.post('/api/sites', (requisicao, resposta) => {
  if (!requisicao.body.url || !requisicao.body.dataDeAcesso) {
    resposta.status(400)
    resposta.send(JSON.stringify({ mensagem: 'Os campos "url" e "dataDeAcesso" são obrigatórios e não podem estar vazios!' }))
    resposta.end()
    return
  }

  const site = {
    url: requisicao.body.url,
    dataDeAcesso: requisicao.body.dataDeAcesso  }

  sitesAcessados.push(site)
  resposta.status(201)
  resposta.send(JSON.stringify(site))
})

// app.listen()...
```

E com isso, conseguimos criar nossa API para cadastrar os sites mais acessados, respondendo corretamente com os status para cada situação.


