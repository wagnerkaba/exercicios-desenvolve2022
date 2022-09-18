import 'package:bytebank/screens/dashboard/saldo_card.dart';
import 'package:flutter/material.dart';

import '../../models/saldo.dart';

class Dashboard extends StatelessWidget {
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Bytebank'),
      ),
      body: Align(
        alignment: Alignment.topCenter,
        child: SaldoCard(),
      ),
    );
  }
}
