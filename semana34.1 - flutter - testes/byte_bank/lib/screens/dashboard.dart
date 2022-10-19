import 'package:byte_bank/screens/contacts_list.dart';
import 'package:byte_bank/screens/transactions_list.dart';
import 'package:flutter/material.dart';

class Dashboard extends StatelessWidget {
  const Dashboard({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Dashboard'),
      ),
      body: LayoutBuilder(
        builder: (context, constraints) => SingleChildScrollView(
          child: ConstrainedBox(
            constraints: BoxConstraints(
              minHeight: constraints.maxHeight,
            ),
            child: Column(

              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              crossAxisAlignment: CrossAxisAlignment.start,
              children: <Widget>[
                Padding(
                  padding: EdgeInsets.all(8.0),
                  child: Image.asset('images/bytebank_logo.png'),
                ),

                Container(
                  height: 120,
                  child: ListView(
                    scrollDirection: Axis.horizontal,
                    children: [
                      FeatureItem(
                        'Transfer',
                        Icons.monetization_on,
                        onClick: () {
                          _showContactsList(context);
                        },
                      ),
                      FeatureItem(
                        'Transaction Feed',
                        Icons.description,
                        onClick: () {
                          _showTransactionsList(context);
                        },
                      ),
                    ],
                  ),
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }


}

class FeatureItem extends StatelessWidget {

  final String name;
  final IconData icon;
  final Function onClick;

  FeatureItem(this.name,
      this.icon,
      {required this.onClick});

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.all(8.0),
      child: Material(
        // No curso, o professor utiliza a linha embaixo para tornar o container verde. Mas no meu código, isso não está funcionando
        // color: Theme.of(context).primaryColor,
        color: Colors.green[900],
        child: InkWell( // Container não possui detecção de gestos. Por isso, é preciso adicionar InkWell (que precisa ser filho de Material)
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
  Navigator.of(context)
      .push(MaterialPageRoute(
    builder: (context) => ContactsList(),
  ));
}

void _showTransactionsList(BuildContext context) {
  Navigator.of(context)
      .push(MaterialPageRoute(
    builder: (context) => TransactionsList(),
  ));
}