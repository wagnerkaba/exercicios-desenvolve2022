# Segunda versão do projeto

Refatoração do projeto-v1 com separação de responsabilidades.




## Setup

* Abrir a pasta no vscode e rodar o [json server](../notas-de-aula/aula%2001-04%20-%20Preparando%20o%20ambiente.md): 

```js
json-server --watch db.json
```

* Rodar o comando [browser-sync](https://browsersync.io/) (é preciso ter [browser-sync](https://browsersync.io/) instalado):
```
browser-sync start --server --file . --host --port 5000 --startPath telas/lista_cliente.html
```