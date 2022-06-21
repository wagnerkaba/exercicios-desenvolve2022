# 02 Preparando o ambiente

Nesse curso usaremos o projeto pronto de uma aplicação como base para escrever nossos testes, esse projeto é feito em React e foi criado usando o Create React App. Por isso, todas as bibliotecas que precisaremos, já virão instaladas por padrão quando você criar um novo projeto com o Create React App. Para baixar e executar o projeto siga esses passos:

É preciso que você tenha o npm ou Yarn instalado na sua máquina, caso não tenha, baixe e instale um dos dois através dos links a seguir:

- npm: https://www.npmjs.com/get-npm
- Yarn: https://yarnpkg.com/getting-started/install

O projeto está disponível no repositório do Github e começaremos nosso curso a partir da branch projeto-inicial, nela você vai encontrar todo o código da aplicação sem testes.

Para baixar o código, basta fazer um clone do repositório na sua máquina através do comando:

```
git clone https://github.com/alura-cursos/1976-react-testes.git
```

Entre na pasta baixada digitando:

```
cd 1976-react-testes/
```

Após isso você precisa instalar os pacotes da aplicação, de agora em diante usaremos os comandos npm como exemplo.

```
npm install
```

Com o projeto instalado, você deve executar os comandos de início para o backend e frontend da aplicação.

```
npm run backend

npm start
```

Por padrão, o comando de teste é executado em modo watch, isso significa que, toda vez que você salvar um arquivo de teste, o servidor executará todos os testes novamente. Também é possível filtrar um arquivo específico para executar os testes, mas isso veremos ao longo do curso. Para iniciar a execução de testes você vai usar o seguinte comando:

```
npm test
```

Com isso, temos nosso projeto configurado e pronto para uso ao longo do curso. Que tal ir usando nossa aplicação para conhecer as funcionalidades antes de começar as aulas?
