import 'package:byte_bank/components/transaction_auth_dialog.dart';
import 'package:flutter/material.dart';
import '../http/webclients/transaction_webclient.dart';
import '../models/contact.dart';
import '../models/transaction.dart';

class TransactionForm extends StatefulWidget {
  final Contact contact;

  TransactionForm(this.contact);

  @override
  _TransactionFormState createState() => _TransactionFormState();
}

class _TransactionFormState extends State<TransactionForm> {
  final TextEditingController _valueController = TextEditingController();
  final TransactionWebClient _webClient = TransactionWebClient();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('New transaction'),
      ),
      body: SingleChildScrollView(
        child: Padding(
          padding: const EdgeInsets.all(16.0),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: <Widget>[
              Text(
                widget.contact.name,
                style: TextStyle(
                  fontSize: 24.0,
                ),
              ),
              Padding(
                padding: const EdgeInsets.only(top: 16.0),
                child: Text(
                  widget.contact.accountNumber.toString(),
                  style: TextStyle(
                    fontSize: 32.0,
                    fontWeight: FontWeight.bold,
                  ),
                ),
              ),
              Padding(
                padding: const EdgeInsets.only(top: 16.0),
                child: TextField(
                  controller: _valueController,
                  style: const TextStyle(fontSize: 24.0),
                  decoration: const InputDecoration(labelText: 'Value'),
                  keyboardType:
                      const TextInputType.numberWithOptions(decimal: true),
                ),
              ),
              Padding(
                padding: const EdgeInsets.only(top: 16.0),
                child: SizedBox(
                  width: double.maxFinite,
                  child: ElevatedButton(
                    child: Text('Transfer'),
                    onPressed: () {
                      final double value;
                      if(double.tryParse(_valueController.text) != null){
                         value = double.tryParse(_valueController.text) as double;
                      } else {
                        throw Exception("Não foi digitado um valor para transferência");
                      }


                      final transactionCreated =
                          Transaction(value, widget.contact);
                      try {
                        showDialog(
                            context: context,
                            builder: (contextDialog) {
                              // ATENÇÃO: é importante mudar o nome do context no parâmetro da função do builder para não ser confundido com o primeiro context
                              // para entender melhor, veja nota de aula 1.09

                              return TransactionAuthDialog(
                                onConfirm: (String password) {
                                  _save(transactionCreated, password, context);
                                },
                              );
                            });
                      } catch (e, s) {
                        print(s);
                      }
                    },
                  ),
                ),
              )
            ],
          ),
        ),
      ),
    );
  }

  void _save(Transaction transactionCreated, String password, BuildContext context) async {
    _webClient
        .save(transactionCreated, password)
        .then((transaction) {
      Navigator.pop(context);
    }).catchError((e){
      print('Houve um erro $e');
    });
  }
}
