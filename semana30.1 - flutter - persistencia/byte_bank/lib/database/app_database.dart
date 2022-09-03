import 'package:byte_bank/database/dao/contact_dao.dart';
import 'package:sqflite/sqflite.dart';
import 'package:path/path.dart';

Future<Database> getDatabase() async {
  final String dbPath = await getDatabasesPath();
  final String path = join(dbPath, 'bytebank.db');
  return openDatabase(
    path,
    onCreate: (db, version) {
      db.execute(ContactDao.tableSql);
    },
    version: 1,
  );
  // ==== O código abaixo foi refatorado para utilizar async await =====
  // return getDatabasesPath().then(
  //   (dbPath) {
  //     final String path = join(dbPath, 'bytebank.db');
  //     return openDatabase(
  //       path,
  //       onCreate: (db, version) {
  //         db.execute('CREATE TABLE contacts('
  //             'id INTEGER PRIMARY KEY, '
  //             'name TEXT, '
  //             'account_number INTEGER)');
  //       },
  //       version: 1,
  //       //gambiarra ensinada na aula 5.1 para limpar o banco de dados
  //       //fazer upgrade do banco de dados e depois fazer downgrade e ativar opção para apagar bd no downgrade (vide linha abaixo)
  //       //onDowngrade: onDatabaseDowngradeDelete,
  //     );
  //   },
  // );
}
