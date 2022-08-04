# Node.js: Refresh Tokens e confirmação de cadastro

Este curso é uma continuação da [semana 26.2 - NodeJS JWT](../semana26.2%20-%20nodejs%20JWT/README.md). No entanto, o código da aplicação foi modificado para este curso. Para saber mais, vide [aula 1.03](./notas-de-aula/aula%201.03%20-%20Access%20e%20Refresh%20Tokens.md).

## Tópicos importantes
* [Access Token e Refresh Token](./notas-de-aula/aula%201.03%20-%20Access%20e%20Refresh%20Tokens.md).
* [Como funcionam os refresh tokens](./notas-de-aula/aula%201.05%20-%20como%20funcionam%20os%20refresh%20tokens.md)
* Token Opaco (Opaque Tokens) - The opaque token is a random unique string of characters issued by the authorization server. It is one of the possible formats that access tokens or refresh tokens can take. The opaque token does not pass any identifiable information on the user so it’s impossible for the resource server to make any authorization decisions based on the opaque token itself. The opaque contains an identifier to information stored on the authorization server. To validate the token and retrieve the information on the token and the user, the resource server calls the authorization server and requests the token introspection. 
* [Fluxo de autenticação](./notas-de-aula/aula%201.09%20-%20Como%20funcionam%20os%20refresh%20tokens%20-%20fluxo%20de%20autentica%C3%A7%C3%A3o.pdf)
* [Como criar um processo de verificação de endereço de e-mail](./notas-de-aula/aula%204.03%20-%20Modelo%20de%20verifica%C3%A7%C3%A3o%20de%20emails.md)

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

## Tecnologias utilizadas (semana 26)
* MomentJS - MomentJS is a JavaScript library which helps is parsing, validating, manipulating and displaying date/time in JavaScript in a very easy way.
* nodemailer - Send emails from Node.js.

## Setup

Instalação: 

```
npm install
```

Iniciando o blog:

```
npm start
```

Iniciar o servidor REDIS
OBS: O comando abaixo deve ser digitado no terminal do WSL2, pois o REDIS está instalado no ubuntu.
```
sudo service redis-server start
```






