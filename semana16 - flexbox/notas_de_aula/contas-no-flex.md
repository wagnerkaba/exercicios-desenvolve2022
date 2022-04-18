# 05 Contas no flex

A propriedade `flex-grow` vista no exercício anterior ajuda muito caso queiramos que um elemento ocupe toda a largura restante do `flex container`.

Por exemplo, se temos:

Elemento 1: `200 px`.

Elemento 2: `200 px`.

Espaço vazio que sobrou do flex container: `600 px`.

Total: `1000 px`.

Se colocamos `flex-grow: 1` no primeiro elemento, ele passa a ter `800 px` de largura, ou seja:

Espaço vazio `+` Elemento 1: `800 px`.

E o segundo elemento continua tendo `200 px` de largura.

Agora, se colocarmos `flex-grow: 1` nos dois elementos, o que aconteceria? Qual tamanho ficaria o `elemento 1`? E o `elemento 2`?



## Resposta

O que aconteceria é o seguinte:

Considere o espaço vazio inicial: `600 px`.

Como os dois elementos tem `flex-grow: 1`, a soma de `flex-grow` que temos vai dar `1 + 1 = 2`.

O navegador pega esse espaço vazio e divide pelo número de `flex-grow` que temos: `600 px : 2 = 300 px`.

Agora ele distribui esse espaço para cada um dos elementos que colocamos `flex-grow`.

Elemento 1: `300 px + 200 px = 500 px`.

Elemento 2: `300 px + 200 px = 500 px`.
