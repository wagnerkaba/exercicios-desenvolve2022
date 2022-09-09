
class Contact {
  final int id;
  final String name;
  final int accountNumber;

  Contact(
      this.id,
      this.name,
      this.accountNumber,
      );

  @override
  String toString() {
    return 'Contact{id: $id, name: $name, accountNumber: $accountNumber}';
  }

  // Contact.fromJson é um named constructor: https://dart.dev/guides/language/language-tour#named-constructors
  // os dois pontos depois do construtor é chamado de initializer list.
  // veja nota de aula: Named Constructors and Initializer lists
  Contact.fromJson(Map<String, dynamic> json):
      //id = json['id'], // Este é o código do professor feito com versão antiga do Flutter. Mas como o Json não tem o id do contato, esse código dá problema.
      id = 0,
      name = json['name'],
      accountNumber = json['accountNumber'];

  Map<String, dynamic> toJson()=> {
    'name': name,
    'accountNumber': accountNumber,

  };

}