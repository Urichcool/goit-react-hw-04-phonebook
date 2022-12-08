import { useState } from "react";
import {
 ContactsAddForm,
    ContactsAddButton,
    ContactsListLabel,
} from './App,styled'
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';




export const AddContactsForm = ({onSubmit, contacts}) => {
  const [name, setName] = useState('')
  const [number, setNumber] = useState('')


  handleInputChange = e => {
    const { name, value } = e.currentTarget;
    
    switch (name) {
      case 'name':
        setName(value)
        break;
      
      case 'number':
        setNumber(value)
        break;
      
      default:
        return;
    }

  };

  handleFormSubmit = e => {
    e.preventDefault();
     if (this.props.contacts.some(contact => contact.name === this.state.name)) {
       window.alert(`${this.state.name} is already in contacts`);
       return
    }
    
    this.props.onSubmit([{
      name: this.state.name,
      id: nanoid(),
      number: this.state.number
    }]);
    this.handleFormReset();
  };

  handleFormReset = () => {
    this.setState({ name: '', number: '' });
  };

  
    return (
      <ContactsAddForm autoComplete="off" onSubmit={this.handleFormSubmit}>
        <ContactsListLabel>
          Name
          <input
            type="text"
            value={name}
            onChange={handleInputChange}
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </ContactsListLabel>
        <ContactsListLabel>
          Number
          <input
            type="tel"
            value={number}
            onChange={handleInputChange}
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </ContactsListLabel>
        <ContactsAddButton type="submit">Add contact</ContactsAddButton>
      </ContactsAddForm>
    );
  
}

  //static propTypes = {
    //  onSubmit: PropTypes.func.isRequired,
    //  contacts:PropTypes.array.isRequired
//  };