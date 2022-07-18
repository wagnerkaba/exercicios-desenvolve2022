

# Node.js e JWT: autenticação com tokens

## Postman

Para testar o sistema, utilize o Postman e importe [este arquivo](nodejs%20%2B%20JWT%20(semana%2026).postman_collection.json).

## Tópicos importantes
* [Armazenar senhas de forma segura com funções de hashing](./notas-de-aula/aula%201.04%20-%20Fun%C3%A7%C3%B5es%20de%20Hashing.md)
* [Bcrypt](./notas-de-aula/aula%201.07%20-%20Funcionamento%20do%20bcrypt.pdf)
* Implementação de um sistema de autenticação onde o usuário fornece email e senha como credenciais e recebe um token JWT.
* Como guardar a senha secreta para assinatura do JWT em uma variável de ambiente utilizando [dotenv](https://www.npmjs.com/package/dotenv).
* [Como invalidar JSON Web Tokens com uma blacklist](./notas-de-aula/aula%204.06%20-%20blacklist.md)


## Tecnologias utilizadas
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
npm start
```

Iniciar o servidor REDIS no terminal do WSL2:
```
sudo service redis-server start
```