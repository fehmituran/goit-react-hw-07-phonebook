import React from 'react';
import ContactListItem from './ContactListItem';
import { List } from './ContactList.styled';
import { useSelector } from 'react-redux';
import { selectFilteredContacts } from 'redux/selectors';


const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);


  return (
    <List>
      {contacts.map(({ id, name, number }) => (
        <ContactListItem key={id} id={id} number={number} name={name} />
      ))}
    </List>
  );
};

export default ContactList;
