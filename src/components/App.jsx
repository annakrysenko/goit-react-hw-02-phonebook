import { Component } from 'react';
import ContactsForm from './ContactsForm/ContactsForm';
import ContactsList from './Contacts/ContactsList';
import Filter from './Filter/Filter';
import Wrapper from './Wrapper/Wrapper';
import { nanoid } from 'nanoid';
import styles from './App.module.css';
import ContactsWrapper from './ContactsWrapper/ContactsWrapper';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],

    filter: '',
  };

  handleSubmit = ({ number, name }) => {
    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, { id: nanoid(), name, number }],
      };
    });
  };

  handleFilter = ev => {
    const { value } = ev.target;
    this.setState({ filter: value });
  };

  showFilteredContacts = () => {
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLocaleLowerCase())
    );
  };

  OnClickDelete = id => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(contact => contact.id !== id),
      };
    });
  };

  render() {
    return (
      <div className={styles.container}>
        <Wrapper>
          <ContactsForm
            title="Phonebook"
            handleSubmit={this.handleSubmit}
            contacts={this.state.contacts}
          />

          <ContactsWrapper>
            <Filter
              handleFilter={this.handleFilter}
              filter={this.state.filter}
            />
            <ContactsList
              title="Contacts"
              showFilteredContacts={this.showFilteredContacts()}
              OnClickDelete={this.OnClickDelete}
            />
          </ContactsWrapper>
        </Wrapper>
      </div>
    );
  }
}
