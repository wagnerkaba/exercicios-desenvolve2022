
# Primeira versão do projeto

* Criação da versão inicial do [cliente-service.js](./service/cliente-service.old.js) utilizando `Promises` e `XMLHttpRequest()`.
* Refatoração do [cliente-service.js](./service/cliente-service.js) para uso do Fetch API para popular a página [lista_cliente.html](./telas/lista_cliente.html).

## Setup

* Abrir a pasta no vscode e rodar o [json server](../notas-de-aula/aula%2001-04%20-%20Preparando%20o%20ambiente.md): 
```js
json-server --watch db.json
```

* Abrir a página [lista_cliente.html](./telas/lista_cliente.html) com o Live Server do VS Code.