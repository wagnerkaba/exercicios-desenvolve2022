import 'dart:convert';
import '../../models/transaction.dart';
import 'package:http/http.dart';
import '../webclient.dart';

class TransactionWebClient {
  Future<List<Transaction>> findAll() async {
    final Response response = await client.get(baseUrl);
    final List<dynamic> decodedJson = jsonDecode(response.body);
    return decodedJson
        .map((dynamic json) => Transaction.fromJson(json))
        .toList();
  }

  Future<Transaction> save(Transaction transaction, String password) async {
    //await Future.delayed(Duration(seconds: 10)); //OBS: este comando serve para que uma transação demore 10s para que seja possivel testar o app como se o servidor estivesse demorando para responder

    final String transactionJson = jsonEncode(transaction.toJson());
    final Response response = await client.post(baseUrl,
        headers: {
          'Content-type': 'application/json',
          'password': password,
        },
        body: transactionJson);

    if (response.statusCode != 200) {
      throw HttpException(_getHttpExceptionMessage(response.statusCode));
    }

    return Transaction.fromJson(jsonDecode(response.body));
  }

  String _getHttpExceptionMessage(int statusCode) {
    if (_statusCodeResponse.containsKey(statusCode)) {
      return _statusCodeResponse[statusCode]!;
    }
    return 'Unknown Error';
  }

  static final Map<int, String> _statusCodeResponse = {
    400: 'There was an error submitting transaction',
    401: 'Authentication failed',
    404: 'Endereço da WEB API não foi encontrado',
    409: 'Transaction alredy exists'
  };
}

class HttpException implements Exception {
  final String message;

  HttpException(this.message);
}
