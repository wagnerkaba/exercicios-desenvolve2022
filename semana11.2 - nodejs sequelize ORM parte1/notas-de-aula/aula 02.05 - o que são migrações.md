# 05 O que são migrações



[00:00] Antes de continuarmos, vamos então só trocar duas palavras sobre migração. Vocês me viram falar sobre migração, rodamos um comando de criar modelos e criou junto com a migração, eu fiquei mostrando o arquivo, mas o que é migração, *migrations*? Quando falamos de migração em DQL, podemos falar de duas coisas.

[00:19] A primeira coisa é que, normalmente, vocês vão ver se vocês buscarem SQL migração, SQL *migration*, é a migração de dados mesmo. É quando mudamos, transferimos nossos dados de uma plataforma para outra. Mudou o banco de dados, mudou o serviço. Normalmente, os bancos de dados são umas entidades complexas, dependendo ainda da empresa que você trabalha, do projeto, esse banco pode ser bem grande. Migrar, transportar esses dados pode ser complicado, uma operação delicada.

[01:00] Então, existem vários processos para isso, e várias empresas, consultoria, softwares, que ajudam. Essa é a migração de dados normal, quando você transfere seus dados de um lugar para outro.

[01:11] Quando estamos falando nesse projeto, estamos falando de migração que fazemos com ORM. Essa migração, embora tenha o mesmo nome, quando falamos aqui no curso de migração, falamos de alterações que fazemos no banco. Por exemplo, criei uma tabela, por exemplo, que tem nome, telefone, endereço, ou, na nossa escola de inglês, tem nome, se a pessoa está ativa, se tem o papel de estudante ou de aluno. Criei essa tabela “pessoas” e eu tenho que fazer alterações nela.

[01:42] Normalmente, essas alterações impactam nosso sistema, no produto inteiro, na regra de negócios. Então, quando falamos de migração em ORM, falamos de como alteramos as tabelas, nossas entidades relacionais, de uma forma que elas possam ser rastreáveis, e se acontecer alguma coisa, podemos voltar.

[02:08] Quem trabalha com versionamento de código, por exemplo, usando o Git, sabe que, ao mandar um código para o GitHub, ou para o BitBucket, um *commit*, se eu quero ou preciso voltar alguma coisa, sempre se pode voltar o código para o estado anterior, e a migração com ORM trata justamente disso, de voltar o estado da nossa tabela a um estado anterior, se precisar. É uma segurança para você rastrear as alterações feitas no banco. Mesmo se você tem uma equipe e várias pessoas mexendo no mesmo projeto, isso pode ser interessante.

[02:50] Então, quando falamos de mudanças no esquema de dados, precisamos tanto coordenar alterações feitas por diferentes pessoas de um time; ou seja, eu estou trabalhando no mesmo projeto que você e estamos fazendo alterações nas tabelas. Podemos estar fazendo ao mesmo tempo, pode acontecer. Como rastreamos alterações que foram feitas, quando elas foram feitas, que alteração sobrescreveu a outra? Podemos ver isso usando arquivos de migração, usando a migração na ORM.

[03:21] E também, se você precisa debugar algum erro, debugar algum problema. De repente, quebrou em produção nosso banco porque alguém subiu uma alteração na tabela que causou impacto aí no restante do sistema. Como eu debugo? Você pode fazer isso através das migrações também.

[03:40] Do mesmo modo que o Git, por exemplo, tem um arquivo dentro da pasta oculta `.git` que “ouve” o que está acontecendo dentro do seu diretório, também temos um arquivo, não vamos mexer nele, mas vai vê-lo no banco, que é o arquivo que guarda as alterações, as migrações feitas no nosso banco de dados, para podermos voltar quando precisa.

[04:06] Por enquanto, é isso que vamos falar sobre migrações. Vamos falar bastante, vocês verão muitas migrações aqui no projeto. Elas se referem a esse tipo de migração, as alterações que fazemos nas nossas tabelas. Então, vamos em frente? Vamos lá!
