# Para saber mais - Lidando com possíveis problemas no sqflite

Nesta configuração inicial do sqflite, caso tenha algum problema durante a execução do `onCreate`, como por exemplo, erro de syntax na criação da tabela, o sqflite mantém a execução e considera o banco como a primeira versão criada.

Em outras palavras, não é possível acessar a tabela, para lidar com esse tipo de situação temos 2 abordagens comuns:

- Apagar o banco por meio do *downgrade*;
- Realizar migration.

Para realizar o *downgrade*, basta adicionar a propriedade `onDowngrade: onDatabaseDowngradeDelete` no `openDatabase()`, então modifica a versão para 2, executa o app e modifica para a versão 1 novamente. Ao modificar para 1, o `onCreate` é executado novamente, por tanto, antes de executar, certifique-se que o problema de syntax foi corrigido, caso contrário é necessário realizar o mesmo procedimento.

Para realizar migration você pode incrementar a versão atual, como por exemplo, se estiver 1 vai para 2, então pode implementar a propriedade `onUpgrade` que recebe uma função com os argumentos `(Database, int, int)`, sendo que os `int`s representam a versão atual e versão nova respectivamente, então poderia considerar o seguinte exemplo de execução:

```
openDatabase(path, onCreate: (db, version) {
      db.execute('CREATE TABLE contacts('
          'id INTEGER PRIMARY KEY, '
          'name TEXT, '
          'account_number INTEGER)');
    }, version: 1,
    onUpgrade: (db, oldVersion, newVersion) {
      // run sql code for upgrade
    });
```

É importante ressaltar que durante o processo de migration, qualquer tipo de mudança que afeta a estrutura inicial do `onCreate()` precisa também ser replicada no código SQL do `onCreate`, ou seja, se adicionou algum campo novo, o SQL de criação também precisa adicionar esse campo, pois um dispositivo novo não vai executar as instruções do `onUpgrade`.

> Essa atualização de banco também é conhecida como migration, [você pode obter mais informações por meio da página do GitHub do sqflite](https://github.com/tekartik/sqflite/blob/master/sqflite/doc/migration_example.md).


