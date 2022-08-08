
# Middleware e Function Composition

Para usar corretamente o nosso middleware de autorização em cada caso possível da API, criamos uma função que recebe uma lista de cargos aceitos e retorna um middleware válido para Express.

Esse tipo de função que retorna outra função é chamada de função composta (Function composition, composição de funções), onde juntamos duas ou mais funções em uma só, como fizemos com o nosso middleware.