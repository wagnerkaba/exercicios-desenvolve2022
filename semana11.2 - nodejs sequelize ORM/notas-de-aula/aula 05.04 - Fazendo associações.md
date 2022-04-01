# 04 Fazendo associações

[00:00] Bom, já criamos todos os arquivos de migração e todos os modelos que precisamos, de acordo com o nosso diagrama de banco.

[00:07] Mas antes de rodarmos o comando de migração para mandar tudo para o banco, vamos dar uma olhada na nossa tabela Turmas. Além do ID, a tabela Turmas tem três colunas,a coluna data_inicio, que definimos quando criamos o modelo, e tem mais duas que estão ligadas à tabela Pessoas através de chaves estrangeiras: docente_id, que é a coluna que liga Turma a Pessoas, e nível_id, que é a coluna que liga Turma a Nível.

[00:37] Porém, se viermos no nosso código, em nenhuma parte dele falamos para o Sequelize que existe essa relação entre as tabelas. Por enquanto, nossa tabela Turmas só tem uma coluna no modelo, que é a coluna data_início, e no arquivo de migração também só tem data_início e as outras três colunas que são as que o Sequelize cria.

[01:02] Então, como fazemos para que o Sequelize consiga fazer a relação entre as colunas? Porque o que está no nosso diagrama de banco é o que tem que se refletir no banco. Então as tabelas no banco devem ser criadas exatamente da forma que estão no nosso diagrama.

[01:20] Vamos dar uma olhada na documentação do Sequelize, na parte de associações, para sabermos como associamos as tabelas. Ela diz que o Sequelize dá suporte para associações padrão no SQL: associação um para um, um para muitos e muitos para muitos. E ele faz isso através de quatro métodos.

[01:41] E temos que descobrir na documentação qual método usamos e quais associações que precisamos fazer de acordou com o nosso diagrama.

[01:51] Quando criamos o diagrama, usamos uma anotação para ilustrar quais são os relacionamentos entre as tabelas.

[02:00 ] O risco sozinho e o tridente, que chamamos de pé de galinha porque parece um pé, dizem em conjunto que entre a tabela Pessoas e a tabela Turmas existe uma relação de um para vários. Como assim? Vamos ler essa relação. Na tabela Turmas, essa relação é feita através da coluna docente_id, porque na tabela Pessoas entram professores, alunos, *staff*, etc. E um professor pode trabalhar em diversas turmas: pode dar aula de básico, pode dar aula de avançado, etc.

[02:40] Então o registro de um mesmo ID de professor pode aparecer várias vezes na tabela Turmas. É uma relação de um para vários. A mesma coisa “nível”, cada um dos níveis – básico, avançado, intermediário de inglês – eu posso ter várias turmas desse nível: turmas de manhã, turmas à tarde, etc. Então é uma relação de um nível para várias turmas, e por aí vai.

[03:03] A mesma coisa acontece em Matrículas: uma turma pode ter várias matrículas, porque várias pessoas se matriculam na mesma turma, então cada turma tem várias matrículas ou nenhuma, caso ninguém se matricule nela. E um estudante pode ter várias matrículas também, porque ele se matricula no básico, depois se matricula avançado. Podemos abrir depois uma turma de conversação e ele se inscreve em conversação e básico.

[03:27] Então as relações que temos na nossa tabela são relações de um para vários, de *one to many*. Como fazemos para usar os métodos do Sequelize para dizer isso no nosso código? O Sequelize diz também, está em inglês, mas vamos juntos, que *has many*, “tem muitas”, uma tradução bem livre do nome desse método, essa associação significa que uma relação de um para vários existe entre as tabelas A e B.

[04:00] Então, entre as tabelas A e B há vários, podemos usar o método `hasMany`. Ele diz também que a chave estrangeira, a FK, tem que ser definida na tabela, no modelo B, que é o modelo que está sendo passado por parâmetro do método. Então, vamos copiar A.hasMany(B) e passar para o nosso código, e ver como traduzimos esse exemplo.

[04:26] As associações são feitas nos modelos, então vamos começar pelo modelo de Pessoas. Elas são feitas na parte do código `Pessoas.associate = function(models) {`, inclusive o Sequelize já deixa comentado a parte onde ele quer que coloquemos as associações `// associations can be defined here`.

[04:40] Então vamos colar A.hasMany(B). A vira Pessoas, porque é o modelo do qual estamos falando, e ele tem vários, pertence a vários ou faz parte de vários do modelo-alvo, da tabela-alvo.

[04:54] Vamos olhar no nosso diagrama. Pessoas tem a relação de um para vários com Turmas e relação de um para vários para Matrículas.

[05:0] Então ele pertence a vários, participa de vários. `Pessoas.hasMany(models.Turmas)` e também podemos copiar porque além de Turmas, ela tem uma relação do mesmo tipo com Matrículas: `Pessoas.hasMany(models.Matriculas)`. É o *models* que vai receber como parâmetro da função, do método de fora.

[05:30] Então já estabelecemos uma relação entre “Pessoas e Turma”, e, “Pessoas e Matrículas”. Nível, a mesma coisa: nível vai ter o mesmo tipo de relação com Turma, e Turma vai ter o mesmo tipo de relação com Matrículas.

[05:44] Então podemos voltar no modelo de Níveis “api > models > niveis.js”, deixa eu copiar a linha que vamos repetir: `Pessoas.hasMany(models.Matriculas)`, então nosso modelo de níveis vai ter o mesmo tipo de associação, só que no lugar de Pessoas, vai ser Niveis, e a relação de um para vários é com Turmas: `Niveis.hasMany(models.Turmas)`. Deixa eu salvar.

[06:10] E Turmas tem uma relação do mesmo tipo com Matrículas “api>models>turmas.js”: `Turmas.hasMany(models.Matriculas)`. Vamos ver se eu não esqueci nada: Pessoas com Matrículas, Pessoas com Turma, Nível com Turma e Turma com Matrículas. Ok. Porém, falta um detalhe. Nós demos nomes para as colunas. Eu chamei uma coluna de docente_id, que é a coluna de Turma que faz a ligação com Pessoas, nivel_id, etc. E ainda não falamos em nenhuma parte do código os nomes dessas colunas.

[06:49] O que aconteceria se eu rodasse as migrações, se eu mandasse dessa forma para o banco? É um comportamento que é padrão de ORM. O Sequelize, por padrão, se passamos para migração o código `Pessoas.hasMany(models.Matriculas)`, por exemplo, ele vai criar no banco uma coluna chamada `PessoaId`. Ou seja, ele vai associar que é um plural, vai tentar pegar o singular, “pessoa”, e vai colocar a palavra ID depois.

[07:18] Só que tem duas coisas, primeiro, que quando criamos o diagrama de banco, dissemos o nome da tabela exato que queremos. E outro, com Pessoa tudo bem, o singular e o plural se resolvem, mas quando chega no modelo Niveis, ele vai tentar criar `NiveiId`, e não vai dar certo, não é o que estamos esperando. Não é uma palavra que existe em português. Como estamos trabalhando com os nomes em português de modelo, de tabela, isso pode dar problema.

[07:50] Como fazemos, então, para prevenir esse comportamento padrão? O Sequelize tem uma opção para passarmos exatamente o nome da tabela que queremos, na parte de relações de um para vários, nas opções, ele fornece o nome dessa opção. Chama *foreignKey*.

[08:11] Então a passamos como segundo parâmetro, e ela vai dentro de um objeto. Então, podemos voltar no código “api > models > pessoas.js”, eu vou deixar aberto nossos arquivos níveis, pessoas, turmas e matrículas para podermos fechar. Então, todas as relações`hasMany`, “tem vários”, precisamos colocar essa opção para podermos dizer qual o nome da tabela que desejamos que seja criado, e passamos como segundo parâmetro.

[08:42] Então, na relação entre Pessoas e Turmas, o nome da nossa coluna é docente_id, e em Matrículas, o nome da coluna é estudante_id. Só confirmar no nosso diagrama se eu coloquei os nomes certos. Sim, entre Pessoas e Matrículas a coluna se chama estudante_id, e docente_id entre Turma. Falta fazermos isso em Nível e em Turma. Então vamos voltar aqui.

[09:14] No modelo Níveis “api> models> niveis.js”, mesma coisa, o nome da coluna que queremos que seja criado é nivel_id, e em turmas “api> models> turmas.js”, o nome da coluna vai ser turma_id. Deixa eu só confirmar se está tudo certo, nível_id, turma_id. Perfeito. Só o que falta fazer agora é outro lado dessa relação.

[09:47] Se olharmos a documentação do Sequelize, ela traz que as associações são feitas. Para criar uma relação de um para vários, eu tenho que usar o método `hasMany`, “tem vários”, e “pertence a”, usar os dois juntos. Só usamos o `hasMany`, vamos agora inserir o “pertence a”. Só que vamos inserir o “pertence a” do outro lado da relação.

[10:10] Eu vou copiar um exemplo: `Bar.belongsTo(Foo)`, e vamos adicionar o método belongsTo do outro lado das relações. Então vou adicionar em Matrículas para Pessoas, Matrículas para Turma, Turma para Pessoas e Turma para Nível.

[10:29] Então vamos voltar primeiro no modelo Turmas “api> models> turmas.js”, já estamos aqui, e vamos adicionar a linha `Bar.belongsTo(Foo)`, que ficará `Turmas.belongsTo(models.Pessoas)`, e `Turmas.belongsTo(models.Niveis)`.

[10:55] E a mesma coisa em Matrículas “api> models> matriculas.js”. Por enquanto, não tem nenhuma associação, ela vai receber só esse tipo, é a ponta do muitos, então: `Matriculas.belongsTo(models.Pessoas)` e `Matriculas.belongsTo(models.Turmas)`. Beleza?

[11:21] Então antes de rodar as migrações, já avisamos nos modelos, onde as associações estão feitas. Só falta associar nas migrações em qual das colunas que as FKs vão ser adicionadas porque, por enquanto, essa informação também não existe. Vamos fazer isso em seguida e, assim, poderemos rodar as migrações.
