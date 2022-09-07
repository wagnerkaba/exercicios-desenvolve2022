import 'dart:convert';

import 'package:http/http.dart';
import 'package:http_interceptor/http_interceptor.dart';

import '../models/Contact.dart';
import '../models/transaction.dart';

class LoggingInterceptor implements InterceptorContract {
  @override
  Future<RequestData> interceptRequest({required RequestData data}) async {
    print('Request');
    print('url: ${data.baseUrl}');
    print('headers: ${data.headers}');
    print('body: ${data.body}');
    return data;
  }

  @override
  Future<ResponseData> interceptResponse({required ResponseData data}) async {
    print('Response');
    print('headers: ${data.headers}');
    print('status code: ${data.statusCode}');
    print('body: ${data.body}');
    return data;
  }
}

Future<List<Transaction>> findAll() async {
  Client client = InterceptedClient.build(interceptors: [LoggingInterceptor()]);

  // obs: o celular não consegue acessar localhost:8080/transactions (esse endereço só dá para acessar no próprio computador).
  // é preciso descobrir a url que o celular consegue acessar digitando o comando "ipconfig" no power shell do windows
  // descobri que consigo acessar a rota "transactions", através do endereço: http://192.168.15.8:8080/transactions
  // O endereço 192.168.15.8:8080 estava em IPv4 dentro de Wireless LAN adapter wi-fi
  final Response response =
      await client.get(Uri.http('192.168.15.8:8080', 'transactions'));
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
        ));
    transactions.add(transaction);
  }
  print('decoded json: $decodedJson');
  return transactions;
}
