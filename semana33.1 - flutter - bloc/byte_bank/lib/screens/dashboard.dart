import 'package:byte_bank/components/container.dart';
import 'package:byte_bank/screens/contacts_list.dart';
import 'package:byte_bank/screens/name.dart';
import 'package:byte_bank/screens/transactions_list.dart';
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
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
  const DashboardView({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    final name = context.read<NameCubit>().state;
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

          // TODO: Na aula 02.03 o professor troca Container por SingleChildScrollView. Porém, nessa versão do Flutter, está dando erro. Por isso, não troquei.
          Container(
            height: 120,
            child: ListView(
              scrollDirection: Axis.horizontal,
              children: [
                _FeatureItem(
                  'Transfer',
                  Icons.monetization_on,
                  onClick: () {
                    _showContactsList(context);
                  },
                ),
                _FeatureItem(
                  'Transaction Feed',
                  Icons.description,
                  onClick: () {
                    _showTransactionsList(context);
                  },
                ),
                _FeatureItem(
                  'Change Name',
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
