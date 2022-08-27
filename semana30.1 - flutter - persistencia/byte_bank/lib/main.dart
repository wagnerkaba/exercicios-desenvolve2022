import 'package:byte_bank/database/app_database.dart';
import 'package:byte_bank/screens/contact_form.dart';
import 'package:byte_bank/screens/contacts_list.dart';
import 'package:byte_bank/screens/dashboard.dart';
import 'package:flutter/material.dart';

import 'models/Contact.dart';

void main() {
  runApp(ByteBankApp());
  debugPrint('====================================================== runApp executado =====================================================');
  save(Contact(0,'alex',1000)).then((id){
    debugPrint('====================================================== save executado =====================================================');
    findAll().then((contacts){
      debugPrint('===========================================================================================================');
      debugPrint(contacts.toString());
      debugPrint('===========================================================================================================');
    },
    );
  });
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


