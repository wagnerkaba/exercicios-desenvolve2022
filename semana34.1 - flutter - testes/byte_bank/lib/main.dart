import 'package:byte_bank/screens/dashboard.dart';
import 'package:flutter/material.dart';

import 'database/dao/contact_dao.dart';

void main() {
  runApp(ByteBankApp(contactDao: ContactDao(),));

}

class ByteBankApp extends StatelessWidget {
  late final ContactDao contactDao;
  ByteBankApp({required this.contactDao});
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
        home: Dashboard(contactDao: contactDao),
    );
  }
}


