import 'contact.dart';

class Transaction {
  final double value;
  final Contact contact;

  Transaction(
      this.value,
      this.contact,
      );

  // Transaction.fromJson é um named constructor: https://dart.dev/guides/language/language-tour#named-constructors
  // os dois pontos depois do construtor é chamado de initializer list.
  // veja nota de aula: Named Constructors and Initializer lists
  Transaction.fromJson(Map<String, dynamic> json) :
      value = json['value'],
      contact = Contact.fromJson(json['contact']);

  Map<String, dynamic> toJson()=> {
    'value':value,
    'contact': contact.toJson(),

  };

  @override
  String toString() {
    return 'Transaction{value: $value, contact: $contact}';
  }

}