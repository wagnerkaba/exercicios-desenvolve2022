
import 'dart:convert';
import '../../models/transaction.dart';
import 'package:http/http.dart';
import '../webclient.dart';


class TransactionWebClient {

  Future<List<Transaction>> findAll() async {
    final Response response =
    await client.get(baseUrl);
    final List<dynamic> decodedJson = jsonDecode(response.body);
    return decodedJson
        .map((dynamic json) => Transaction.fromJson(json))
        .toList();
  }

  Future<Transaction> save(Transaction transaction, String password) async{
    await Future.delayed(Duration(seconds: 10));

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
        throw HttpException(_statusCodeResponse[response.statusCode]!);
      }


    return Transaction.fromJson(jsonDecode(response.body));
  }


  static final Map<int, String> _statusCodeResponse = {
    400: 'There was an error submitting transaction',
    401: 'Authentication failed'
  };

}

class HttpException implements Exception {
  final String message;

  HttpException(this.message);
}