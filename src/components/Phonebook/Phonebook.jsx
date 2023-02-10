import { Component } from 'react';
import { nanoid } from 'nanoid';

import { Wrapper, Block, FormGroup } from './Phonebook.styled.js';

export class Phonebook extends Component {
  state = {
    contacts: [
      { id: nanoid(), name: 'Rosie Simpson', number: '459-12-56' },
      { id: nanoid(), name: 'Hermione Kline', number: '443-89-12' },
      { id: nanoid(), name: 'Eden Clements', number: '645-17-79' },
      { id: nanoid(), name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  addContact = e => {
    e.preventDefault();
    const { name } = this.state;
    if (this.isDublicate(name)) {
      return alert(`${name} is already in contacts.`);
    }

    this.setState(prevState => {
      const { name, number, contacts } = prevState;

      const newContact = {
        id: nanoid(),
        name,
        number,
      };

      return { contacts: [newContact, ...contacts], name: '', number: '' };
    });
  };

  removeContact(id) {
    this.setState(({ contacts }) => {
      const newContacts = contacts.filter(contact => contact.id !== id);
      return { contacts: newContacts };
    });
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
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
    const { addContact } = this;
    const { handleChange } = this;

    const { name, number } = this.state;
    const contacts = this.getFilteredContacts();

    const contact = contacts.map(({ id, name, number }) => (
      <li key={id}>
        {name}: {number}
        <button onClick={() => this.removeContact(id)} type="button">
          Delete
        </button>
      </li>
    ));

    return (
      <div>
        <h1>Phonebook</h1>
        <Wrapper>
          <Block>
            <form action="" onSubmit={addContact}>
              <FormGroup>
                <label>Name</label>
                <input
                  onChange={handleChange}
                  placeholder="Name"
                  type="text"
                  name="name"
                  value={name}
                  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                  required
                />
              </FormGroup>
              <FormGroup>
                <label>Number</label>
                <input
                  onChange={handleChange}
                  placeholder="Number"
                  type="tel"
                  name="number"
                  value={number}
                  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                  required
                />
              </FormGroup>
              <button type="submit">Add contact </button>
            </form>
          </Block>
          <Block>
            <h2>Contacts</h2>
            <FormGroup>
              <label>Find contact by name</label>
              <input
                onChange={handleChange}
                placeholder="Filter name"
                name="filter"
              />
            </FormGroup>
            <ol>{contact}</ol>
          </Block>
        </Wrapper>
      </div>
    );
  }
}
