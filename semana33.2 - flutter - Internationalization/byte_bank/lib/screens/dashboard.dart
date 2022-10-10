import 'package:byte_bank/components/container.dart';
import 'package:byte_bank/screens/contacts_list.dart';
import 'package:byte_bank/screens/name.dart';
import 'package:byte_bank/screens/transactions_list.dart';
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import '../components/localization.dart';
import '../models/name.dart';

class DashboardContainer extends BlocContainer {

  @override
  Widget build(BuildContext context) {
    return BlocProvider(
      // Para entender (_) veja nota de aula: underscore as parameter
      create: (_) => NameCubit("Guilherme"),
      child: DashboardView(),
    );
  }
}

class DashboardView extends StatelessWidget {

  @override
  Widget build(BuildContext context) {
    final i18n = DashboardViewI18N(context);

    return Scaffold(
      appBar: AppBar(
        title: BlocBuilder<NameCubit, String>(
          builder: (context, state)=>Text('Welcome $state'),
        ),
      ),
      body: Column(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        crossAxisAlignment: CrossAxisAlignment.start,
        children: <Widget>[
          Padding(
            padding: EdgeInsets.all(8.0),
            child: Image.asset('images/bytebank_logo.png'),
          ),

          // TODO: Na semana 33.1, aula 02.03 o professor troca Container por SingleChildScrollView. Mas não fiz a troca porque está dando erro.
          Container(
            height: 120,
            child: ListView(
              scrollDirection: Axis.horizontal,
              children: [
                _FeatureItem(
                  i18n.transfer,
                  Icons.monetization_on,
                  onClick: () {
                    _showContactsList(context);
                  },
                ),
                _FeatureItem(
                  i18n.transaction_feed,
                  Icons.description,
                  onClick: () {
                    _showTransactionsList(context);
                  },
                ),
                _FeatureItem(
                  i18n.change_name,
                  Icons.person_outline,
                  onClick: () {
                    _showChangeName(context);
                  },
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }
}

class DashboardViewI18N extends ViewI18N{
  DashboardViewI18N(BuildContext context) : super(context);
  String get transfer =>
    localize({"pt-br":"Transferir", "en": "Transfer"});


  String get transaction_feed =>
    localize({"pt-br":"Transações", "en": "Transaction Feed"});

  String get change_name =>
    localize({"pt-br":"Mudar Nome", "en": "Change Name"});

}



class _FeatureItem extends StatelessWidget {
  final String name;
  final IconData icon;
  final Function onClick;

  _FeatureItem(this.name, this.icon, {required this.onClick});

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.all(8.0),
      child: Material(
        // No curso, o professor utiliza a linha embaixo para tornar o container verde. Mas no meu código, isso não está funcionando
        // color: Theme.of(context).primaryColor,
        color: Colors.green[900],
        child: InkWell(
          // Container não possui detecção de gestos. Por isso, é preciso adicionar InkWell (que precisa ser filho de Material)
          onTap: () => onClick(),
          child: Container(
              padding: EdgeInsets.all(8.0),
              height: 100,
              width: 150,
              child: Column(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                crossAxisAlignment: CrossAxisAlignment.start,
                children: <Widget>[
                  Icon(
                    icon,
                    color: Colors.white,
                    size: 32.0,
                  ),
                  Text(
                    name,
                    style: const TextStyle(
                      color: Colors.white,
                      fontSize: 16.0,
                    ),
                  ),
                ],
              )),
        ),
      ),
    );
  }
}

void _showContactsList(BuildContext context) {
  push(context, ContactsListContainer());
}

void _showTransactionsList(BuildContext context) {
  Navigator.of(context).push(MaterialPageRoute(
    builder: (context) => TransactionsList(),
  ));
}

void _showChangeName(BuildContext blocContext) {
  Navigator.of(blocContext).push(MaterialPageRoute(
    builder: (context) => BlocProvider.value(
      value: BlocProvider.of<NameCubit>(blocContext),
      child: NameContainer(),
    ),
  ));
}
