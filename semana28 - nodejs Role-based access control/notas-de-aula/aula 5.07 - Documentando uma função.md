# Documentando uma função

Thiago está começando a documentar a seguinte função:

```
/**/
const multiplicar = (quantidade, fator) => {
    if (typeof quantidade !== ‘number’ || typeof fator !== ‘number’) {
        throw new Error(‘Os fatores da multiplicação devem ser números válidos’)
    }

    return quantidade * fator
}
```

Como Thiago deve documentar sua função de multiplicação?

## Resposta

Adicionando uma descrição sobre o que a função faz, em seguida usar a tag ****@param**** para documentar o nome e tipo dos parâmetros e **@throws** para indicar o tipo do erro que é emitido, junto com sua descrição.

Com a descrição, é possível ter um entendimento geral sobre a função, junto com as tags de @param, é possível também saber quais parâmetros a função necessita e seus tipos. Com a tag @throws conseguimos descobrir quais erros podem acontecer e porque eles acontecem

# Para saber mais: JSDoc e mais tags

Na nossa API, usamos algumas tags (@param e @throws) para documentar partes da nossa classe (vide [usuario-modelo.js](../projeto/src/usuarios/usuarios-modelo.js)).

No entanto, existem dezenas de tags e marcações que podem ser utilizadas para nos ajudar a documentar o nosso código. Você pode encontrar essas tags e marcações na documentação do esdoc: https://esdoc.org/manual/tags.html

Além do esdoc, você também pode conhecer o JSDoc, projeto que serviu de inspiração para o esdoc: [Use JSDoc: Index](https://jsdoc.app/)
