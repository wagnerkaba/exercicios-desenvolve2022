# 05 Projeto & Ambiente

Vamos preparar o ambiente para trabalhar no projeto.

## O projeto

O mais fácil é [baixar o ZIP do projeto](https://github.com/alura-cursos/performance-web/archive/79fd7470bdf853a3e86528e0bb28b2254e791974.zip).

Opcionalmente, você pode ver o [código direto no Github](https://github.com/alura-cursos/performance-web/tree/79fd747). Se for clonar o repositório, use o commit **79fd747** como ponto inicial para o curso.

Teste abrindo o arquivo `site/index.html` no seu navegador. Deve aparecer o projeto inicial que vamos otimizar.

## Gulp

Vamos estudar as práticas de performance ao longo do curso *independente de ferramentas*. Mas, para facilitar a aplicação de algumas delas, usaremos o **Gulp**. Então prepare seu ambiente para ter o **node** e o **gulp**.

1) Instale o Node.js, idealmente para este curso versão 12 LTS. Baixe em [nodejs.org](https://nodejs.org/en/) e faça a instalação.

2) Execute `npm install -g gulp-cli` para instalar o Gulp globalmente.

3) No terminal, entre na pasta do projeto: `cd performance-web`

4) Execute `npm install` na pasta do projeto para instalar as dependências do projeto

## Servidor HTTP local

É recomendado que você tenha um servidor HTTP local para servir os arquivos do curso. Você pode acessar com `file://` mas acessar via `http://` abre novas possibilidades de otimização além de ser mais próximo do ambiente real da Web.

**Você pode usar qualquer servidor HTTP nesse curso.** Nginx, Apache, IIS, Tomcat, Jetty, etc.

O projeto é de arquivos estáticos então vai funcionar em qualquer servidor. Use o que você tiver mais familiaridade.

**A forma mais simples** de subir um servidor web é instalando o pacote node [`http-server`](https://www.npmjs.com/package/http-server). Basta digitar no terminal `npm install --global http-server` para instalar, e depois na pasta do projeto do curso, no caso performance-web, digite `http-server`, e a aplicação indicará o endereço local que foi disponibilizado o site.
