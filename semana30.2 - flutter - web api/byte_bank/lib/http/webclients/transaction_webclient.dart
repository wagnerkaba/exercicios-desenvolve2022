
import 'dart:convert';

import '../../models/Contact.dart';
import '../../models/transaction.dart';
import 'package:http/http.dart';

import '../webclient.dart';


class TransactionWebClient {

  Future<List<Transaction>> findAll() async {

    // obs: o celular não consegue acessar localhost:8080/transactions (esse endereço só dá para acessar no próprio computador).
    // é preciso descobrir a url que o celular consegue acessar digitando o comando "ipconfig" no power shell do windows
    // descobri que consigo acessar a rota "transactions", através do endereço: http://192.168.15.8:8080/transactions
    // O endereço 192.168.15.8:8080 estava em IPv4 dentro de Wireless LAN adapter wi-fi
    final Response response =
    await client.get(baseUrl).timeout(Duration(seconds: 5));
    List<Transaction> transactions = _toTransactions(response);
    return transactions;
  }

  Future<Transaction> save(Transaction transaction) async{

    Map<String, dynamic> transactionMap = _toMap(transaction);

    final String transactionJson = jsonEncode(transactionMap);
    final Response response = await client.post(
        baseUrl,
        headers: {
          'Content-type': 'application/json',
          'password': '1000',
        },
        body: transactionJson
    );

    return _toTransaction(response);
  }

  List<Transaction> _toTransactions(Response response) {
    final List<dynamic> decodedJson = jsonDecode(response.body);
    final List<Transaction> transactions = [];
    for (Map<String, dynamic> transactionJson in decodedJson) {
      final Map<String, dynamic> contactJson = transactionJson['contact'];
      final Transaction transaction = Transaction(
        transactionJson['value'],
        Contact(
          0,
          contactJson['name'],
          contactJson['accountNumber'],
        ),
      );
      transactions.add(transaction);
    }
    return transactions;
  }

  Transaction _toTransaction(Response response) {
    Map<String, dynamic> json = jsonDecode(response.body);

    final Map<String, dynamic> contactJson = json['contact'];
    return Transaction(
      json['value'],
      Contact(
        0,
        contactJson['name'],
        contactJson['accountNumber'],
      ),
    );
  }

  Map<String, dynamic> _toMap(Transaction transaction) {
    final Map<String, dynamic> transactionMap = {
      'value': transaction.value,
      'contact': {
        'name': transaction.contact.name,
        'accountNumber': transaction.contact.accountNumber
      }
    };
    return transactionMap;
  }
}