# Node.js: Refresh Tokens e Role-based access control

Este curso é uma continuação da [semana 27.1 - NodeJS Refresh Tokens](../semana27.1%20-%20nodejs%20refresh%20tokens/README.md) e da [semana 26.2 - nodejs JWT](../semana26.2%20-%20nodejs%20JWT/README.md).

## Tópicos importantes
* [Política de acesso ao conteúdo](./notas-de-aula/aula%202.04%20-%20Pol%C3%ADtica%20de%20acesso.md).
* [Remoção de posts do blog de acordo com o controle de acesso](./notas-de-aula/aula%203.06%20-%20Apenas%20admin%20pode%20remover%20quaisquer%20posts.md) Pessoas com cargo de admin podem apagar posts de qualquer pessoa, e quem possui o acesso de editor apenas consegue apagar seus próprios posts.
* [Middleware para tratamento de erros](./notas-de-aula/error-handling%20middleware%20function.md)
* [Como gerar documentação do código](./notas-de-aula/aula%205.07%20-%20Documentando%20uma%20fun%C3%A7%C3%A3o.md) utilizando [ESDoc](https://esdoc.org/)
* Criação de rotas para redefinição de senha. Para redefinir uma senha, o usuário deve utilizar a rota *localhost:3000/usuario/esqueci-minha-senha* com o email no *body* da requisição. Caso o email esteja cadastrado, a API irá responder com um *token* enviado por email. Em seguida, o usuário deve utilizar a rota *localhost:3000/usuario/trocar-senha* com o token e a nova senha no *body* da requisição. Assim, a senha do usuário será redefinida com sucesso.

## Postman

Para testar a API com postman, importe este [arquivo](nodejs%20%2BRBAC%20(semana%2028).postman_collection.json) para o postman.


## Tecnologias utilizadas (semana 28)
* [Access Control](https://www.npmjs.com/package/accesscontrol) - Role and Attribute based Access Control for Node.js
* [ESDoc](https://esdoc.org/) - ESDoc is a good documentation generator for JavaScript.


## Tecnologias utilizadas (semana 27)
* MomentJS - MomentJS is a JavaScript library which helps is parsing, validating, manipulating and displaying date/time in JavaScript in a very easy way.
* nodemailer - Send emails from Node.js.


## Tecnologias utilizadas (semana 26)
* NodeJS
* BCrypt 3.0.8 (Para instalar: `npm install bcrypt@3.0.8`)
* Passport 0.4.1 (Para instalar: `npm install passport@0.4.1`) - `Passport` is nodejs 'Connect style middleware' for user authentication. You're most likely to see it as Express middleware. To use passport you need to use passport and a 'strategy' defining what you are using to authenticate against. This could for example be Facebook or Google via oauth, SAML, or simply cookies. So to use Passport you need to require both the passport module itself and the relevant **'strategy'** module.
* Passport-local 1.0.0 (Para instalar: `npm install passport-local@1.0.0`) - This module lets you authenticate using a username and password in your Node.js applications. `passport-local` is the **strategy** you would use if you are authenticating against a username and password stored 'locally' i.e. in the database of your app - 'local' means local to your application server, not local to the end user.
* jsonwebtoken 8.5.1 (Para instalar: `npm install jsonwebtoken@8.5.1`)
* dotenv 8.2.0 (Para instalar: `npm instal dotenv@8.2.0`) - Finalidade: carregar variáveis de ambiente de um arquivo .env
* passport-http-bearer 1.0.1 (Para instalar `npm install passport-http-bearer@1.0.1`) - HTTP Bearer authentication **strategy** for Passport. This module lets you authenticate HTTP requests using bearer tokens, as specified by RFC 6750, in your Node.js applications. According to RFC6750, the bearer token is:
*A security token with the property that any party in possession of the token (a "bearer") can use the token in any way that any other party in possession of it can.*
* Redis - Redis is an in-memory data structure store, used as a distributed, in-memory key–value database, cache and message broker, with optional durability. OBS: a maneira mais fácil de instalar o REDIS no windows é [através do WSL2](https://redis.io/docs/getting-started/installation/install-redis-on-windows/).
* Node-Redis - node-redis is a modern, high performance Redis client for Node.js (Para instalar: `npm install redis@3.0.2`)


## Setup

Instalação: 

```
npm install
```

Iniciando o blog:
```
npm run dev
```
OBS: para entender a diferença entre `npm start` e `npm run` vide arquivo nas [notas de aula](./notas-de-aula/npm%20start.md)


Iniciar o servidor REDIS
OBS: O comando abaixo deve ser digitado no terminal do WSL2, pois o REDIS está instalado no ubuntu.
```
sudo service redis-server start
```






