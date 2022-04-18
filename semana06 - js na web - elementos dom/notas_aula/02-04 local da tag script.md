# Onde colocar a chamada para o arquivo js? 
 
É possível inserir um arquivo JavaScript em dois locais do documento HTML, dentro da tag `head` ou da tag `body`.

Exemplo de chamada dentro da tag `head`:
```
    <head>
        <script src="main.js"></script>
    </head>
```

Quando o código JavaScript que vamos adicionar depende de elementos que estão no `body`, por exemplo um `querySelector` que espera receber determinado seletor, o local mais apropriado para sua inserção é dentro da tag `body` e na linha anterior ao fechamento da tag `</body>`. 

O motivo é que o html é lido pelo navegador linha por linha. E se o javascript depende de algum elemento que está no `body`, pode ocorrer um erro uma vez que o navegador não sabe ainda o que existe dentro do `body`.

No head podemos inserir scripts, porém eles não devem ter dependencias de elementos do `body`, por exemplo uma biblioteca de funcionalidades.



