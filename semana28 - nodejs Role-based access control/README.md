# Node.js: Refresh Tokens e Role-based access control

Este curso é uma continuação da [semana 27.1 - NodeJS Refresh Tokens](../semana27.1%20-%20nodejs%20refresh%20tokens/README.md) e da [semana 26.2 - nodejs JWT](../semana26.2%20-%20nodejs%20JWT/README.md).


## Tópicos importantes
* 






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

## Tecnologias utilizadas (semana 27)
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






