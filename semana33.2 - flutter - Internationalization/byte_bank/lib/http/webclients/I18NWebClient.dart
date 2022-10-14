import 'dart:convert';
import 'package:http/http.dart';
import '../webclient.dart';



class I18NWebClient {
  final String _viewKey;
  // O arquivo json está no endereço: https://gist.githubusercontent.com/wagnerkaba/fc46bd51a98993aeb7a1c125bfb91768/raw/952b328afa2f2a9eb1abad058900d5b4dbda0ec6/dashboard.json
  final String UNENCODED_PATH = "wagnerkaba/fc46bd51a98993aeb7a1c125bfb91768/raw/d817df8ada4cf601ab3af6a88bc0ba09c313fcfb/";

  I18NWebClient(this._viewKey);

  Future<Map<String, dynamic>> findAll() async {
    Uri messagesUri = Uri.https('gist.githubusercontent.com', '$UNENCODED_PATH$_viewKey.json');
    final Response response = await client.get(messagesUri);
    final Map<String, dynamic> decodedJson = jsonDecode(response.body);
    return decodedJson;
  }
}