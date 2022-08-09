# 06 Faça como eu fiz: Removendo um post do blog

Agora é sua vez de adaptar uma rota do blog! Atualize a rota de remoção de posts para que pessoas com cargo de admin consigam apagar qualquer post, mas quem possui cargo de editor deve conseguir apenas apagar os próprios posts.

VER OPINIÃO DO INSTRUTOR

### Opinião do instrutor

Antes de começar a mexer nas rotas e controladores, precisamos nos certificar de que o arquivo controleDeAcesso.js possui as permissões corretas. Para nosso caso, precisamos também dar a permissão de leitura e remoção para todos os posts para nosso admin:

```
controle    .grant('admin')
    .readAny('post')
    .deleteAny('post')
```

Com as permissões devidamente ajustadas, vamos acessar o arquivo de rotas de posts e aplicar nosso middleware, permitindo que apenas pessoas que possuem a permissão para remover posts prossigam com a requisição:

```
app.route('/post/:id')
    .get(
        [middlewaresAutenticacao.bearer, autorizacao('post', 'ler')],
        postsControlador.obterDetalhes    )
    .delete(
        [middlewaresAutenticacao.bearer, autorizacao('post', 'remover')],
        postsControlador.remover    )
```

Em seguida, podemos seguir diretamente para nosso controlador. No controlador, usamos o método Post.buscaPorId passando o ID do post que queremos apagar e o ID do usuário atual, considerando-o como autor, para acessar o banco de dados e retornar o registro. Porém, se estamos tentando apagar o post de outra pessoa com o cargo de admin, ainda vamos passar o nosso ID na instrução que vai para o banco, mesmo que não sejamos quem escreveu. Para resolver isso, vamos usar dois métodos: Post.buscaPorId e Post.buscaPorIdAutor, assim conseguimos trabalhar de acordo com o cargo de quem está acessando a rota. Para saber se a pessoa pode apagar qualquer post ou apenas os que estão relacionados a sua conta, temos o objeto de acesso na requisição:

```
async remover (req, res) {
    try {
        let post        if (req.acesso.todos.permitido === true) {
            post = await Post.buscaPorId(req.params.id)
        } else if (req.acesso.apenasSeu.permitido === true) {
            post = await Post.buscaPorIdAutor(req.params.id, req.user.id)
        }

        post.remover()
        res.status(204)
        res.end()
    } catch (erro) {
        return res.status(500).json({ erro: erro.message })
    }
}
```

Em seguida, temos que ajustar o método buscaPorId para aceitar apenas o ID, e também criar nosso método buscaPorIdAutor dentro do nosso modelo, que funcionará exatamente como o método buscaPorId, porém irá aceitar o ID do autor como segundo parâmetro. Em ambas as funções, vamos usar o método buscaPorId() do nosso DAO:

```
static async buscaPorId (id) {
        const post = await postsDao.buscaPorId(id)
        if (!post) {
            return null
        }

        return new Post(post)
}


static async buscaPorIdAutor (id, idAutor) {
        const post = await postsDao.buscaPorId(id, idAutor)


        if (!post) {
            return null
        }


        return new Post(post)
}
```

Por último, só precisamos ter certeza de que nosso método buscaPorId do DAO aceite opcionalmente o ID do autor. Para isso, vamos mover os valores da função buscaPorId() para variáveis, colocando por padrão apenas o ID. Então, podemos validar se o ID do autor é válido, instanciando com a classe Number, que força a conversão do valor da variável para número. Caso seja inválido, vamos receber um NaN - Not a Number, ou seja, não é um número. Usaremos isso para adicionar opcionalmente o ID do autor a nossa instrução:

```
async buscaPorId (id, idAutor) {
        try {
            let instrucoes = 'SELECT * FROM posts WHERE id = ?'
            const parametros = [id]


            idAutor = Number(idAutor)
            if (isNaN(idAutor) === false) {
                instrucoes = `${instrucoes} AND autor = ?`
                parametros.push(idAutor)
            }


            return await dbGet(instrucoes, parametros)
        } catch (erro) {
            throw new InternalServerError('Não foi possível encontrar o post!')
        }
 },
```

Pronto! Agora nossa API consegue remover posts de acordo com nosso controle de acesso, onde pessoas com cargo de admin podem apagar posts de qualquer pessoa, e quem possui o acesso de editor apenas consegue apagar seus próprios posts
