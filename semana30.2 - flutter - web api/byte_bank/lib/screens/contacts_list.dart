import 'package:byte_bank/components/progress.dart';
import 'package:byte_bank/database/dao/contact_dao.dart';
import 'package:byte_bank/screens/contact_form.dart';
import 'package:byte_bank/screens/transaction_form.dart';
import 'package:flutter/material.dart';

import '../models/Contact.dart';

class ContactsList extends StatefulWidget {
  ContactsList({Key? key}) : super(key: key);

  @override
  State<ContactsList> createState() => _ContactsListState();
}

class _ContactsListState extends State<ContactsList> {
  final ContactDao _dao = ContactDao();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Transfer'),
      ),
      body: FutureBuilder<List<Contact>>(
        initialData: [],
        future: Future.delayed(Duration(seconds: 1))
            .then((value) => _dao.findAll()),
        builder: (context, snapshot) {
          switch (snapshot.connectionState) {
            case ConnectionState.none:
              // Not currently connected to any asynchronous computation.
              // For example, a FutureBuilder whose FutureBuilder.future is null.
              // Não é o caso de ser implementado
              break;
            case ConnectionState.waiting:
              // Connected to an asynchronous computation and awaiting interaction.
              // Neste caso, deve aparecer o indicador de progresso para o usuário
              return Progress();
            case ConnectionState.active:
              // Connected to an active asynchronous computation.
              // For example, a Stream that has returned at least one value, but is not yet done.
              // Não é o caso de ser implementado
              break;
            case ConnectionState.done:
              // Connected to a terminated asynchronous computation.
              final List<Contact> contacts = snapshot.data as List<Contact>;
              return ListView.builder(
                itemBuilder: (context, index) {
                  final Contact contact = contacts[index];
                  return _ContactItem(contact, onClick: () {
                    print('============================================= ON CLICK ===================================================================================');
                    Navigator.of(context).push(
                      MaterialPageRoute(
                        builder: (context) => TransactionForm(contact),
                      ),
                    );
                  });
                },
                itemCount: contacts.length,
              );
          }

          // O código só vai chegar neste ponto se ocorrer algum erro imprevisto
          return const Text('Unknown error');
        },
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: () {
          Navigator.of(context)
              .push(
                MaterialPageRoute(
                  builder: (context) => ContactForm(),
                ),
              )
              .then((value) => setState(() {}));
        },
        child: const Icon(Icons.add),
      ),
    );
  }
}

class _ContactItem extends StatelessWidget {
  final Contact contact;
  final Function onClick;

  _ContactItem(this.contact, {required this.onClick});

  @override
  Widget build(BuildContext context) {
    return Card(
      child: ListTile(
        onTap: () => onClick(),
        title: ListTile(
          title: Text(
            contact.name,
            style: const TextStyle(
              fontSize: 24.0,
            ),
          ),
          subtitle: Text(
            contact.accountNumber.toString(),
            style: const TextStyle(
              fontSize: 16.0,
            ),
          ),
        ),
      ),
    );
  }
}
