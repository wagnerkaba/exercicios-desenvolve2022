# 02Criando modelos



[00:00] Agora é a hora de começarmos a criar modelos baseados nas tabelas do nosso diagrama de bancos. Sequelize vai escrever as tabelas, os modelos. Só precisaremos passar algumas informações para ele.

[00:12] Conforme o nosso diagrama, o cliente quer um sistema que organize alunos e professores, as pessoas que estão envolvidas com a escola em turmas. O diagrama está criando turmas, a partir das turmas das pessoas ele cria algumas matrículas baseado na turma que a pessoa está, no nível de cada turma, gerando uma tabela de matrículas.

[00:41] Quando começamos, normalmente, a trabalhar com banco, procuramos identificar qual é a tabela principal/a mais simples. No caso, mais simples é uma tabela que não requer relação com outras tabelas. A tabela “pessoas”, além de ser a principal a partir do onde vamos gerar as outras informações, não utiliza dados de nenhuma outra tabela, ao contrário da tabela de turma, que utiliza dados da tabela de nível, dados da tabela de pessoas etc.

[01:11] Então vamos começar por essa tabela principal, a tabela de alunos e professores, a tabela “pessoas”, e a partir daí, relacionamos as restantes. Como faremos isso? Usaremos o comando de sequelize-cli para dar um comando para o Sequelize direto no terminal. Passaremos para o terminal, para o Sequelize, o nome do modelo que pretendemos criar, baseado na tabela, e os atributos com os tipos de dados.

[01:44] Atributos com seus tipos de dados significa todas as colunas que estão no nosso modelo e o tipo de dado dessas colunas. Na coluna de pessoas, trabalharemos com a coluna de ID, que será o identificador único de cada linha da tabela, o nome, que vai ser dado do tipo *string*, se o cadastro da pessoa está ativo ou não, será um booleano, *true* ou *false*, ou 0 e 1 no caso da tabela do MySQL, e-mail, que vai ser do tipo *string*, e *role*, que é o papel da pessoa, se ela é professor, se é aluna etc. e também será um dado do tipo *string*.

[02:26] Tem vários outros tipos de dados que podemos usar com o SQL e com o Sequelize, e deixarei material adicional para vocês darem uma olhada. Mas, por enquanto, nessa tabela, vão ser esses que usaremos.

[02:39] Voltando para o nosso terminal, darei o comando `npx` para rodar o sequelize-cli, dando agora model: create, vamos criar um modelo novo. Passaremos o nome desse modelo, que será “pessoas”, no plural, e os atributos, que serão as colunas que essa tabela vai ter: coluna “nome”, que vai ser um dado do tipo *string*, ativo, e-mail e papel. A separação é feita por vírgulas, não tem espaço. O ativo é um dado do tipo boolean, o e-mail e o role são do tipo *string*. Vamos ver o que acontece.



```
npx sequelize-cli model:create --name Pessoas --attributes nome:string,ativo:boolean,email:string,role:string
```



[03:54] O servidor Nodemon reconheceu que tem algumas alterações, já rodou, e o sequelize-cli apontou que um novo modelo foi criado no caminho do nosso projeto, e uma nova migração foi criada. Vamos ver isso ponto por ponto, então. Primeiro, vamos dar uma olhada no arquivo de modelo que o Sequelize informou que criou. Ele criou na pasta “modelo”.

```
"development": {
    "username": "alura",
    "password": "admin123",
    "database": "escola_ingles",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "operatorsAliases": false
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "operatorsAliases": false
  },
```

[04:18] Veja que graças ao sequelize.rc ele resolveu o caminho, achou a pasta modelo dentro da pasta API e criou um arquivo já preenchido.

```
'use strict';
module.exports = (sequelize, DataTypes) => {
  const Pessoas = sequelize.define('Pessoas', {
    nome: DataTypes.STRING,
    ativo: DataTypes.BOOLEAN,
    email: DataTypes.STRING,
    role: DataTypes.STRING  }, {});
  Pessoas.associate = function(models) {
    // associations can be defined here
  };
  return Pessoas;
};
```

[04:29] Então duas coisas para notarmos nesse modelo: a primeira é esse método *associate*, associação, que é onde associaremos, literalmente faremos as associações da tabela de pessoas com o restante das tabelas que precisaremos. Não precisamos fazer isso agora, faremos isso um pouco mais para frente. E a outra coisa que eu queria que vocês olhassem aqui é o segundo parâmetro do método *define*. O primeiro é o nome da tabela e no segundo ele adicionou as colunas que estarão na tabela pessoas.

[05:09] Se compararmos com o nosso diagrama de código, parece que ocorreu um erro, que esqueci de criar a coluna ID, porque a tabela precisará do ID para ser o identificador único de cada linha, mas ao ver no sequelize-cli a lista de atributos, o ID não foi adicionado. Será que é um erro? Não sei, vamos dar uma olhada. No novo arquivo que o Sequelize criou na pasta de migrações, *migrations*: “API > migrations”.

[05:54] Ele criou esse arquivo gerado automaticamente. O número no começo do arquivo se refere à data de criação, 2020/05/05, que é a data de hoje, o horário e o que foi criado. Veremos mais para frente que isso é importante, tem uma razão para ele criar o arquivo automaticamente com a data e o horário que ele foi criado, mas já vemos isso daqui a pouco.

[06:15] O que temos que ver agora são alguns detalhes nesse arquivo. Ele tem o nome da tabela que foi criada, e ele inseriu automaticamente não só a coluna ID, o Sequelize criou sozinho a coluna ID. Uma coluna do tipo inteiro, dado do tipo inteiro, que é o dado que estamos usando na nossa tabela. Estamos passando como número inteiro, 1, 2, 3, em sequência. Então ele criou a coluna e veio com as suas restrições, seus *constraints*.

[06:55] Ele traz que a tabela ID é uma chave primária, irá se autoincrementar, 1, 2, 3, automaticamente, e ela não pode ser um campo nulo. Não passamos essas informações, essas restrições, para nenhuma outra das colunas que nossa tabela terá, mas também poderíamos incluir se fosse o caso. Além disso, o Sequelize criou automaticamente mais duas colunas na nossa tabela: “criado em” “atualizado em”, também com suas restrições.

[07:28] Cada um dos arquivos de migração, para cada uma das tabelas que iremos criar, ele tem duas funções principais: uma é a *up*, de subir, que é o que acontece quando criamos a migração e a *down*, que está aqui embaixo, que é o que acontece quando desfaz a migração. A função *up* vem já com esse método `createTable`, que faz a mesma coisa que o comando `createTable` do SQL quando queremos criar uma tabela, e a mesma coisa no *down*, onde se tem o comando `dropTable`, de novo, igual ao `dropTable` do SQL.

[08:07] O *drop* é um termo que usamos “aportuguesado” quando falamos dropar uma tabela, dropar uma *database*, que é quando queremos desfazer, destruir. Então já vimos algumas coisas bacanas que o Sequelize faz. A ferramenta terá todo o trabalho, não só de se comunicar com o banco, através do arquivo *config* e do modo como esse arquivo *config* se comunicará com o resto do código e ela transforma tudo isso aqui que estamos escrevendo em JavaScript em *queries*, em consultas ao SQL.

[08:43] Não precisamos nos preocupar com dialeto de banco nem nada, em escrever as *queries* do jeito do MySQL, ou do jeito do Postgres, que eles têm os próprios dialetos. Então, se de repente, quiséssemos trocar de banco: não quero mais usar o MySQL, eu instalei um banco local do Postgres, não tem problema: podemos, no arquivo *config*, trocar para Postgres, alterando a *database*, trocando o *username*, não quero usar mais o *username* raiz, quero colocar outro, coloquei um *password*. Só trocamos no arquivo *config* e não precisamos nos preocupar com mais nada.

[09:26] Quer usar um outro banco para fazer o teste? É só trocar no código `test` que o Sequelize se encarrega de converter, de traduzir, do JavaScript, que é o que estamos escrevendo com a própria sintaxe do SQL para a sintaxe, digamos assim, e os dialetos do SQL de cada um dos bancos que usaremos.

[09:46] Por enquanto, criamos essa tabela, mas nada disso está ainda no nosso banco “escola de inglês”. Ele ainda está vazio porque ainda não rodamos as ligações para avisar a *database* que teve alterações dos nossos modelos. Então, vamos fazer isso agora.
