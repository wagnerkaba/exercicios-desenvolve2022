import 'package:sqflite/sqflite.dart';
import 'package:path/path.dart';
import '../models/Contact.dart';

Future<Database> getDatabase() async {
  final String dbPath = await getDatabasesPath();
  final String path = join(dbPath, 'bytebank.db');
  return openDatabase(
    path,
    onCreate: (db, version) {
      db.execute('CREATE TABLE contacts('
          'id INTEGER PRIMARY KEY, '
          'name TEXT, '
          'account_number INTEGER)');
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

Future<int> save(Contact contact) async {
  final Database db = await getDatabase();
  final Map<String, dynamic> contactMap = Map();
  contactMap['name'] = contact.name;
  contactMap['account_number'] = contact.accountNumber;
  return db.insert('contacts', contactMap);

  // ==== O código abaixo foi refatorado para utilizar async await =====
  // return createDatabase().then((db) {
  //   final Map<String, dynamic> contactMap = Map();
  //   contactMap['name'] = contact.name;
  //   contactMap['account_number'] = contact.accountNumber;
  //   return db.insert('contacts', contactMap);
  // });
}

Future<List<Contact>> findAll() async {
  final List<Contact> contacts = [];
  final Database db = await getDatabase();
  final List<Map<String, dynamic>> result = await db.query('contacts');
  for (Map<String, dynamic> row in result) {
    final Contact contact =
        Contact(row['id'], row['name'], row['account_number']);
    contacts.add(contact);
  }
  return contacts;

  // ==== O código abaixo foi refatorado para utilizar async await =====
  // return getDatabase().then((db) {
  //   return db.query('contacts').then((maps) {
  //     final List<Contact> contacts = [];
  //     for (Map<String, dynamic> row in maps) {
  //       final Contact contact =
  //           Contact(row['id'], row['name'], row['account_number']);
  //       contacts.add(contact);
  //     }
  //     return contacts;
  //   });
  // });
}
