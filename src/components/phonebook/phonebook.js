import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { Section } from 'components/section/section';

export class Phonebook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      ],
      filter: '',
      name: '',
      number: '',
    };
  }
  handleNameChange = event => {
    this.setState({ name: event.target.value });
  };
  handlenumberChange = event => {
    this.setState({ number: event.target.value });
  };
  handleFilterChange = event => {
    this.setState({ filter: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { name, number } = this.state;
    const id = nanoid(); // Generare ID unic utilizând nanoid
    const newContact = { id, name, number };
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
      name: '',
      number: '',
    }));
  };

  render() {
    const { contacts, filter, name, number } = this.state;
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLocaleLowerCase())
    );
    console.log(filteredContacts);

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={name}
              onChange={this.handleNameChange}
            />
          </label>
          <label>
            Number:
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              value={number}
              onChange={this.handlenumberChange}
            />
          </label>
          <button type="submit">Add Contact</button>
        </form>
        <Section title={'Contacts'} />
        <input
          type="text"
          name="filter"
          placeholder="Searche by name"
          value={filter}
          onChange={this.handleFilterChange}
        />
        <ul>
          {filteredContacts.map(contact => (
            <li key={contact.id}>
              <div>
                {contact.name}:{contact.number}
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
