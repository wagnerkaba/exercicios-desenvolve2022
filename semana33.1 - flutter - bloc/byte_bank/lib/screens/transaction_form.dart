import 'dart:async';

import 'package:byte_bank/components/container.dart';
import 'package:byte_bank/components/progress.dart';
import 'package:byte_bank/components/response_dialog.dart';
import 'package:byte_bank/components/transaction_auth_dialog.dart';
import 'package:byte_bank/screens/contacts_list.dart';
import 'package:flutter/material.dart';
import '../components/error.dart';
import '../http/webclients/transaction_webclient.dart';
import '../models/contact.dart';
import '../models/transaction.dart';
import 'package:uuid/uuid.dart';
import 'package:flutter_bloc/flutter_bloc.dart';

@immutable
abstract class TransactionFormState {
  const TransactionFormState();
}

@immutable
class SendingState extends TransactionFormState {
  const SendingState();
}

@immutable
class ShowFormState extends TransactionFormState {
  const ShowFormState();
}

@immutable
class SentState extends TransactionFormState {
  const SentState();
}

@immutable
class FatalErrorFormState extends TransactionFormState {
  final String _message;

  const FatalErrorFormState(this._message);
}

class TransactionFormCubit extends Cubit<TransactionFormState> {
  TransactionFormCubit() : super(ShowFormState());

  void save(Transaction transactionCreated, String password,
      BuildContext context) async {
    emit(SendingState());
    await _send(transactionCreated, password, context);
  }

  _send(Transaction transactionCreated, String password,
      BuildContext context) async {
    await TransactionWebClient()
        .save(transactionCreated, password)
        .then((transaction) => emit(SentState()))
        .catchError(
          (e) {
        emit(FatalErrorFormState('Timeout submitting transaction'));
      },
      test: ((e) => e is TimeoutException),
    ).catchError(
          (e) {
        emit(FatalErrorFormState(e.message));
      },
      test: ((e) => e is HttpException),
    ).catchError(
          (e) {
        emit(FatalErrorFormState(e.message));
      },
      test: ((e) => e is Exception),
    );
  }
}

class TransactionFormContainer extends BlocContainer {
  final Contact _contact;

  TransactionFormContainer(this._contact);

  @override
  Widget build(BuildContext context) {
    return BlocProvider<TransactionFormCubit>(
      create: (BuildContext context) {
        return TransactionFormCubit();
      },
      child: BlocListener<TransactionFormCubit, TransactionFormState>(
        listener: (context, state){
          if (state is SentState){
            Navigator.pop(context);
          }
        },
          child: TransactionFormStateless(_contact)),
    );
  }
}

class TransactionFormStateless extends StatelessWidget {
  final Contact _contact;

  TransactionFormStateless(this._contact);

  @override
  Widget build(BuildContext context) {
    return BlocBuilder<TransactionFormCubit, TransactionFormState>(
        builder: (context, state) {
          if (state is ShowFormState) {
            return _BasicForm(_contact);
          }
          if (state is SendingState || state is SentState) {
            return ProgressView();
          }
          if (state is FatalErrorFormState) {
            return ErrorView(state._message);
          }
          return const ErrorView("Unknown Error");
        });
  }

}

class _BasicForm extends StatelessWidget {
  final Contact _contact;
  final TextEditingController _valueController = TextEditingController();
  final String transactionId =
  const Uuid().v4(); // cria um id único para cada transação

  _BasicForm(this._contact);

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
                _contact.name,
                style: TextStyle(
                  fontSize: 24.0,
                ),
              ),
              Padding(
                padding: const EdgeInsets.only(top: 16.0),
                child: Text(
                  _contact.accountNumber.toString(),
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
                      if (double.tryParse(_valueController.text) != null) {
                        value =
                        double.tryParse(_valueController.text) as double;
                      } else {
                        throw Exception(
                            "Não foi digitado um valor para transferência");
                      }

                      final transactionCreated =
                      Transaction(transactionId, value, _contact);
                      try {
                        showDialog(
                            context: context,
                            builder: (contextDialog) {
                              // ATENÇÃO: é importante mudar o nome do context no parâmetro da função do builder para não ser confundido com o primeiro context
                              // para entender melhor, veja nota de aula 1.09

                              return TransactionAuthDialog(
                                onConfirm: (String password) {
                                  BlocProvider.of<TransactionFormCubit>(context)
                                      .save(transactionCreated, password,
                                      context);
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
}
