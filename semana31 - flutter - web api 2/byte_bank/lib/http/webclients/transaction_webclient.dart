
import 'dart:convert';
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
    final List<dynamic> decodedJson = jsonDecode(response.body);
    return decodedJson
        .map((dynamic json) => Transaction.fromJson(json))
        .toList();
  }

  Future<Transaction> save(Transaction transaction, String password) async{


    final String transactionJson = jsonEncode(transaction.toJson());
    final Response response = await client.post(
        baseUrl,
        headers: {
          'Content-type': 'application/json',
          'password': password,
        },
        body: transactionJson
    );

    if (response.statusCode != 200){
      _throwHttpError(response.statusCode);
    }
    return Transaction.fromJson(jsonDecode(response.body));


  }

  void _throwHttpError(int statusCode) {
      throw Exception(_statusCodeResponse[statusCode]);

  }

  static final Map<int, String> _statusCodeResponse = {
    400: 'There was an error submitting transaction',
    401: 'Authentication failed'
  };

}