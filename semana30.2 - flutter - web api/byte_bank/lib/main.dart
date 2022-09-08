import 'package:byte_bank/http/webclient.dart';
import 'package:byte_bank/models/transaction.dart';
import 'package:byte_bank/screens/dashboard.dart';
import 'package:flutter/material.dart';

import 'models/Contact.dart';

void main() {
  runApp(ByteBankApp());

}

class ByteBankApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
        theme: ThemeData(
          colorScheme: ColorScheme.fromSwatch(
            primarySwatch: Colors.green,
          )
              .copyWith(
            primary: Colors.green[900],
            secondary: Colors.blueAccent[700],
          ),
          buttonTheme: ButtonThemeData(
              buttonColor: Colors.blueAccent[700],
              textTheme: ButtonTextTheme.primary
          ),
        ),
        home: Dashboard(),
    );
  }
}


