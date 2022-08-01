

## Mudanças em relação ao curso anterior

[00:00] No curso anterior, nós vimos como fazer um sistema de autenticação usando tokens. Dessa forma, sempre quando o usuário faz o *login*, põe e-mail e senha, ele vai receber um token chamado JWT para ele poder usar nas próximas requisições.

[00:16] Todo esse código está aberto no editor de texto e antes de nós começarmos a trabalhar em cima dele, eu queria comentar algumas modificações que ele teve em relação ao curso anterior, uma delas é que o pessoal *front* do Blog do Código disse que teve um pouco de dificuldade de se comunicar com a nossa “API”.

[00:37] Para resolver esse problema, nós decidimos padronizar a entrada saída da nossa aplicação para ser tudo em Json. Então, se nós formos em “app.js” do lado esquerdo, você vai ver que nós usamos o [ininteligível] `bodyParser.json` para permitir que o corpo das requisições seja em Json e não num formulário codificado em “URL”, que era como nós estávamos fazendo anteriormente.

[00:59] Outra coisa também que nós modificamos é que se nós formos em “usuarios-controlador.js” do lado esquerdo, você vai ver que a sintaxe das funções exportadas em `module.exports` mudou um pouco.

[01:14] Então, em vez de nós usarmos as *arrow functions* como nós estávamos fazendo anteriormente, agora nós usamos essa sintaxe para declarar métodos em objetos explícitos do Java Script, que fica muito mais parecido com funções nomeadas como essa [1787_Aula1.3_Imagem1] ou com métodos de classe do Java Script.

[01:34] E não só a sintaxe é diferente, a semântica muda um pouco e essa propriedade nós vamos explorar mais para frente baseado nessa nova sintaxe de declarar métodos que nós estamos usando.

[01:49] mais uma coisa que eu queria comentar, que foi modificado o jeito que nós escrevemos os [ininteligível], tanto do usuário, quanto dos *posts*, que nós usamos aquele método que fizemos no *redis* que é “promisficando” as funções de *run*, *get* e *all* que nós usamos para se comunicar com a base de dados.

[02:08] Desse forma nós conseguimos uma sintaxe bem mais enxuta para retornar *promises* e para se comunicar com o banco de dados da nossa aplicação.

[02:19] Teve uma coisa ou outra também modificada, mas tudo o que for importante, nós vamos comentar mais frente. Agora que você viu por cima as mudanças que tiveram no projeto do curso anterior para cá, eu queria chamar a tua atenção para uma característica do nosso sistema de autenticação com tokens.



## Access Token e Refresh Token

[02:37] Nós já comentamos que pelo fato de nós estarmos usando um token JWT e por segurança, nós temos um tempo de expiração curto para os tokens, um tempo de expiração de 15 minutos.

[02:49] Só que dessa forma, sempre quando o token expira, o usuário tem que ir e realizar o *login* novamente para conseguir um novo token e conseguir continuar usando a nossa aplicação.

[03:00] Então a cada quinze minutos, ele tem que ficar fazendo *login* para continuar usando a nossa aplicação e isso não é muito confortável para o usuário, mas então como que nós conseguimos ter um sistema de autenticação com tokens e não precisar ter que fazer o *login* a todo o momento?

[03:19] Para resolver esse problema, nós vamos precisar inserir um novo elemento no nosso sistema, esse elemento vai ser um segundo token, um token capaz de gerar novos tokens à medida que eles vão expirando.

[03:32] Quando o usuário fizer o *login* com e-mail e senha, ele vai receber o token JWT, que ele já recebia anteriormente, mas também um segundo token, esse token que vai ter agora um tempo de expiração maior, em relação ao JWT e ele vai ser responsável por atualizar o token JWT, conforme ele expirar.

[03:55] Por causa dessas duas funções, nós vamos dar agora novos nomes para eles, o token JWT que nós já usávamos anteriormente é chamado de Access Token porque ele vai ser responsável pelo acesso às rotas protegidas.

[04:11] E o segundo token, o novo token que nós estamos adicionando agora vai chamar de Refresh Token ou Token de Atualização e Revigoração porque ele vai ser responsável por atualizar os tokens conforme eles expiram.

[04:24] Esse tipo de nomenclatura e dinâmica é muito popular em sistemas de autorização o [ininteligível]. Então vamos ver como que nós conseguimos implementar agora esse sistema usando o Refresh Tokens e melhorando a usabilidade da nossa aplicação.
