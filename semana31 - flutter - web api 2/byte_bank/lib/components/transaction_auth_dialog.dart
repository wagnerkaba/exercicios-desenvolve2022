
import 'package:flutter/material.dart';

class TransactionAuthDialog extends StatelessWidget {
  const TransactionAuthDialog({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return AlertDialog(
      title: Text('Authenticate'),
      content: const TextField(
        obscureText: true,
        maxLength: 4,
        textAlign: TextAlign.center,
        keyboardType: TextInputType.number,
        decoration: InputDecoration(
          border: OutlineInputBorder()
        ),
        style: TextStyle(fontSize: 64, letterSpacing: 32),
      ),
      actions: <Widget>[
        FlatButton(onPressed: (){print('cancel');}, child: Text('Cancel'),),
        FlatButton(onPressed: (){print('confirm');}, child: Text('Confirm'),),

      ],

    );
  }
}
