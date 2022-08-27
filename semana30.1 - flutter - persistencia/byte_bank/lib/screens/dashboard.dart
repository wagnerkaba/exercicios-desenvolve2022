import 'package:byte_bank/screens/contacts_list.dart';
import 'package:flutter/material.dart';

class Dashboard extends StatelessWidget {
  const Dashboard({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Dashboard'),
      ),
      body: Column(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        crossAxisAlignment: CrossAxisAlignment.start,
        children: <Widget>[
          Padding(
            padding: const EdgeInsets.all(8.0),
            child: Image.asset('images/bytebank_logo.png'),
          ),
          Padding(
            padding: const EdgeInsets.all(8.0),
            child: Material(
              // No curso, o professor utiliza a linha embaixo para tornar o container verde. Mas no meu código, isso não está funcionando
              // color: Theme.of(context).primaryColor,
              color: Colors.green[900],
              child: InkWell( // Container não possui detecção de gestos. Por isso, é preciso adicionar InkWell (que precisa ser filho de Material)
                onTap: (){
                  Navigator.of(context)
                      .push(MaterialPageRoute(
                      builder: (context) => ContactsList(),
                  ));
                },
                child: Container(
                    padding: EdgeInsets.all(8.0),
                    height: 100,
                    width: 150,
                    child: Column(
                      mainAxisAlignment: MainAxisAlignment.spaceBetween,
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: const <Widget>[
                        Icon(
                          Icons.people,
                          color: Colors.white,
                          size: 32.0,
                        ),
                        Text(
                          'Contacts',
                          style: TextStyle(
                            color: Colors.white,
                            fontSize: 16.0,
                          ),
                        ),
                      ],
                    )),
              ),
            ),
          )
        ],
      ),
    );
  }
}