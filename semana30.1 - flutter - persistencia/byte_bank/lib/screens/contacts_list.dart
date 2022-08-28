import 'package:byte_bank/screens/contact_form.dart';
import 'package:flutter/material.dart';

import '../models/Contact.dart';

class ContactsList extends StatelessWidget {
  ContactsList({Key? key}) : super(key: key);

  final List<Contact> contacts = [];

  @override
  Widget build(BuildContext context) {

    contacts.add(Contact(0, 'Alex', 2000));
    contacts.add(Contact(0, 'Alex', 2000));
    contacts.add(Contact(0, 'Alex', 2000));
    return Scaffold(
      appBar: AppBar(
        title: Text('Contacts'),
      ),
      body: ListView.builder(

        itemBuilder: (context,index){
          final Contact contact = contacts[index];
          return _ContactItem(contact);
        },
        itemCount: contacts.length,
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: () {
          Navigator.of(context).push(
            MaterialPageRoute(
              builder: (context) => ContactForm(),
            ),
          ).then((newContact)=>debugPrint(newContact.toString()),);
        },
        child: const Icon(Icons.add),
      ),
    );
  }
}


class _ContactItem extends StatelessWidget {
  final Contact contact;

  _ContactItem(this.contact);

  @override
  Widget build(BuildContext context) {
    return Card(
      child: ListTile(
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
