# 06 Para saber mais: Parâmetros pré definidos

Caso você tenha tomado um choque qual eu escrevi esse código [aqui](../projeto/src/pages/Carrinho/index.js):

```
const { saldo = 0 } = useContext(UsuarioContext)
```

Ou apenas não estudou a fundo sobre isso antes, o nome disso é `parâmetro pré definido`, ou, em inglês, default parameters. Isso é *muito útil* no React pois nem sempre temos os valores iniciais do jeito que esperamos, por exemplo:

- Podemos ter que usar o toFixed em um valor undefined como ocorreu no nosso código, para isso podemos usar o `= 0` para, caso não haja valor, colocar o valor padrão como 0;
- Podemos usar um .map em uma variável undefined, e o `= []` ajuda a não usar .map em undefined, isso também quebra o código;
- Estamos esperando um valor qualquer como parâmetro de uma função e precisamos colocar um valor padrão caso nenhum seja enviado.

Caso queira saber mais, deixo aqui a [documentação do MDN sobre parâmetro pré definido](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Functions/Default_parameters).
