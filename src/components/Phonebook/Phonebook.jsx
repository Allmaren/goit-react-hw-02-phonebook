import { Component } from 'react';
import { nanoid } from 'nanoid';

import ContactList from './ContactList/ContactList.jsx';
import Filter from './ContactFilter/ContactFilter.jsx';
import ContactForm from './Form/ContactForm.jsx';
import { Wrapper, Block, NoContacts } from './Phonebook.styled.js';
export class Phonebook extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addContact = ({ name, number }) => {
    if (this.isDublicate(name)) {
      return alert(`${name} is already in contacts.`);
    }

    this.setState(prevState => {
      const { contacts } = prevState;

      const newContact = {
        id: nanoid(),
        name,
        number,
      };

      return { contacts: [newContact, ...contacts] };
    });
  };

  removeContact = id => {
    this.setState(({ contacts }) => {
      const newContacts = contacts.filter(contact => contact.id !== id);
      return { contacts: newContacts };
    });
  };

  isDublicate(name) {
    const normalizedContact = name.toLowerCase();
    const { contacts } = this.state;
    const result = contacts.find(({ name }) => {
      return name.toLowerCase() === normalizedContact;
    });
    return Boolean(result);
  }

  getFilteredContacts() {
    const { filter, contacts } = this.state;
    if (!filter) {
      return contacts;
    }
    const normalizeFilter = filter.toLowerCase();

    const result = contacts.filter(({ name }) => {
      return name.toLowerCase().includes(normalizeFilter);
    });

    return result;
  }

  render() {
    const { addContact, handleChange, removeContact } = this;
    const items = this.getFilteredContacts();
    const isContacts = Boolean(items.length);

    return (
      <>
        <Wrapper>
          <Block>
            <h1>Phonebook</h1>
            <ContactForm onSubmit={addContact} />
          </Block>
          <Block>
            <h2>Contacts</h2>
            <Filter handleChange={handleChange} />
            {isContacts && (
              <ContactList removeContact={removeContact} items={items} />
            )}
            {!isContacts && <NoContacts>No contacts in phonebooks</NoContacts>}
          </Block>
        </Wrapper>
      </>
    );
  }
}
