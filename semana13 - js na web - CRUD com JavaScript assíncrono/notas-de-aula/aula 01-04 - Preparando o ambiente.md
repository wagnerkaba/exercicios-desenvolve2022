# 04 Preparando o ambiente

Na aula seguinte vamos usar o json-server para simular um servidor e consumir dados.

O json-server está listado como dependência no [package.json](../projeto-v1/package.json) que é o arquivo onde encontramos todas as bibliotecas externas que estamos usando no projeto. 

Ao fazer `npm install` dentro pasta **projeto-v1** (que é a pasta do projeto) é feito o download do json-server automaticamente.

A que se notar que o comando que executamos durante a aula para subir o servidor, `json-server --watch db.json`, deve ser realizado dentro da pasta do projeto **projeto-v1**, caso contrário o comando não vai ser reconhecido.

**OBS: para o comando `json-server --watch db.json` funcionar, é preciso ter instalado o json-server de forma global.**

Para instalar json-server de forma global: `npm install -g json-server`

Após instalar json-server de forma global, será possível rodar o comando `json-server --watch db.json`

Caso não tenha o json-server instalado de forma global e não queira fazer essa instalação, então será necessário usar o comando npx para rodar o json-server: `npx json-server --watch db.json`




