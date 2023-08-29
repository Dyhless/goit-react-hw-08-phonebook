import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ContactForm } from 'components/ContactForm';
import { ContactList } from 'components/ContactList';
import { fetchContacts } from 'redux/contacts/contactsApi';
import { Filter } from 'components/Filter';
import { HelmetProvider } from 'react-helmet-async';
import {
  ContactsContainer,
  ContactsTitle,
  FilterTitle,
  MainTitle,
  MainContainer,
} from './Contacts.styled';

export default function Contacts() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <HelmetProvider>
      <MainContainer>
        <MainTitle>Phonebook</MainTitle>
        <ContactForm />
        <ContactsTitle>Contacts</ContactsTitle>
        <ContactsContainer>
          <FilterTitle>Search your contact name</FilterTitle>
          <Filter />
          <ContactList />
        </ContactsContainer>
      </MainContainer>
    </HelmetProvider>
  );
}
