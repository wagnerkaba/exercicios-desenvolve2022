import 'dart:convert';
import 'package:http/http.dart';
import '../webclient.dart';

Uri messagesUri = Uri.https('gist.githubusercontent.com', 'wagnerkaba/fc46bd51a98993aeb7a1c125bfb91768/raw/53adbf8431cb0f781f3d3ba95525b584b9883e3a/i18n.json');

class I18NWebClient {
  Future<Map<String, dynamic>> findAll() async {
    final Response response = await client.get(messagesUri);
    final Map<String, dynamic> decodedJson = jsonDecode(response.body);
    return decodedJson;
  }
}