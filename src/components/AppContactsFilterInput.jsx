import { useState } from 'react';
import { ContactsListLabel, ContactsFilterInput } from './App,styled';
import PropTypes from 'prop-types';



export const AppContactsFilterInput = ({ filter }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = e => {
    setInputValue(e.currentTarget.value);
    filter(e.currentTarget.value);
  };

 

  return (
    <ContactsListLabel>
      Find contacts by name
      <ContactsFilterInput
        type="text"
        name="filter"
        value={inputValue}
        onChange={handleInputChange}
      ></ContactsFilterInput>
    </ContactsListLabel>
  );
};

AppContactsFilterInput.propTypes = {
  filter: PropTypes.func.isRequired,
};
