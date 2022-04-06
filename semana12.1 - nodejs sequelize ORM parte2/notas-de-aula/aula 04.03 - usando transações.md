# 03Usando transações

[00:00] O que são transações então? As transações servem para garantir a integridade dos dados em operações como esta que fizemos. Por exemplo, uma operação que acesse mais de uma tabela, acesse várias tabelas, ou que faça atualizações em várias linhas de uma tabela.

[00:16] Se acontece qualquer erro nesse processo, qualquer erro de banco, e temos uma falha em qualquer parte dessa operação, nenhum dado é salvo, nenhum dado é atualizado no banco, na realidade, e o banco volta para o ponto onde ele estava antes de tudo isso começar, antes de todas as operações que passamos começarem.

[00:40] Quando temos que voltar o banco para o estado anterior chamamos de `rollback`. Então, a transação ou dá certa e é commitada, ou ela não dá certo e é feito o `rollback`. A documentação do sequelize sobre transações dá alguns exemplos, mostra algumas formas de implementar transações.

[01:00] O que vamos fazer agora é utilizar o método `sequelize.transaction`, e esse método recebe como parâmetro um `call-back`, e dentro desse `call-back` vamos fazer todas as operações de banco que queremos que sejam, digamos assim, gerenciadas pela transação.

[01:18] Além de ser passado esse `call-back` e fazermos tudo dentro dele, vamos passar também um terceiro parâmetro em cada um dos métodos de banco que vamos usar, passando que ele tem que ser gerenciado por uma transação, que na documentação está sendo chamada de `T`. Podemos dar o nome que quisermos, `T` é só o nome do parâmetro que ele está passando.

[01:40] O que já escrevemos é bem parecido, só vamos fazer algumas alterações no método cancela pessoas para incluir uma transação. Dentro do `try`, a primeira coisa que vamos fazer é chamar `database.sequelize.transaction`, ela vai ser `async` e vamos passar o argumento, vou chamar o argumento ao invés de T, como está na documentação, de transação.

[02:11] Abro e fecho chaves. Aqui dentro tem que acontecer o que? Fazer o primeiro update na tabela pessoas, fazer o segundo update na tabela matrículas e o retorno. Vou jogar isso tudo para dentro do `call-back`. O argumento que estamos passando transação ainda não está sendo utilizado, temos que passar isso como terceiro parâmetro de cada um dos métodos, então update, o primeiro parâmetro é o que vai ser alterado, segundo parâmetro é where, terceiro parâmetro é outro objeto que vamos passar `transaction: transacao`, que é o nome da transação que estamos usando.

[02:52] Esse fizemos no primeiro update, update de pessoas, o segundo update a mesma coisa. Passamos como terceiro parâmetro `transaction: transacao`, e agora todas as operações de banco que estão sendo feitas nesse método estão dentro de `sequelize.transaction`, e já podemos testar na rota.

[03:11] Dentro da tabela matrículas criei mais alguns registros para testar referentes a `estudanteId 4` e `estudanteID 5`. No Postman aproveitamos a mesma rota que já tínhamos criado, já estava funcionando, `localhost:3000/pessoas/4/cancela`, vou dar `send`, e vamos ver o que vai acontecer.

[03:33] Matrículas referentes a estudante 4 canceladas, ok, porque não fizemos nenhuma alteração. Se chamarmos com `select * from matrículas` os registros referentes a `id 4` estão como cancelados, mas o importante agora é ir no outro terminal, onde o `nodemon` está mostrando as queries para nós e ver o que aconteceu.

[03:55] Agora a query, a primeira linha dela, é uma palavra, um termo *start transaction*. Ou seja, agora ele começa, a query começa abrindo uma transação, executou o primeiro update de pessoas, executou o segundo update em matrículas, deu tudo certo, ele fecha com a palavra *commit*, ou seja, abri uma transação, fez todas as alterações, as alterações deram certo, vamos commitar essa transação e aí sim modificar tudo no banco. Significa que deu tudo certo, commitou tudo.

[04:30] Vamos testar isso de novo. Vou passar no código alguma informação para forçar um erro. No `database.matriculas`, esse `where estudanteId`, vou trocar a variável estudanteId onde ele está recebendo número por x, só para passarmos um erro, dar uma forçada em um erro.

[04:52] Vou voltar no Postman e tentar alterar pessoas 5, cancela, vamos dar um `send`. Ele já vai dar um erro. Vou cancelar essa requisição, porque ele vai ficar tentando, mas vamos voltar no terminal do `nodemon` e ver o que aconteceu na query. A query começa, abre uma transação, executa o update em pessoas, porque até chegar por enquanto em update pessoas está tudo ok, não viu erro aqui, executou, mas quando foi para o update de matrículas, o que aconteceu? Ele viu um erro e `rollback`, não aconteceu nada no banco.

[05:28] Vamos testar para ver se não aconteceu realmente nada no banco. Vamos voltar no terminal do MYSQL, pedir para mostrar matrículas, e todos os registros de estudante 5 continuam como confirmados, ou seja, o `rollback` funcionou, nada foi alterado no banco. Vou dar "Ctrl + Z" no nosso método para tirar o erro que forcei.

[05:52] Ou seja, agora todas as operações de banco um pouco mais complexas, que fazem várias alterações em várias partes, estão gerenciadas e seguradas por uma transação que vai impedir que qualquer erro de execução mande para o banco alterações, atualizações parciais, que isso é uma coisa que nunca queremos, queremos consistência dos nossos dados.


