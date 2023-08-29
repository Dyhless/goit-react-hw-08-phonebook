import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, fetchContacts } from 'redux/contacts/contactsApi';
import { Loader } from 'components/Loader';
import {
  selectError,
  selectIsLoading,
  selectVisibleContacts,
} from 'redux/contacts/selectors';
import {
  List,
  ListItem,
  ContactInfo,
  Name,
  Phone,
  DeleteButton,
  Empty,
} from './ContactList.styled';

export const ContactItem = ({ id, name, number, onDelete, isLoading }) => (
  <ListItem key={id}>
    <ContactInfo>
      <Name>{name}</Name>
      <Phone>{number}</Phone>
    </ContactInfo>
    <DeleteButton
      type="button"
      onClick={() => onDelete(id)}
      disabled={isLoading}
    >
      {isLoading ? <Loader /> : 'Delete'}
    </DeleteButton>
  </ListItem>
);

export const ContactList = () => {
  const dispatch = useDispatch();
  const visibleContacts = useSelector(selectVisibleContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <List>
      {visibleContacts.length === 0 && !error && !isLoading && (
        <Empty>No contacts</Empty>
      )}
      {error && <p>{error}</p>}
      {visibleContacts.map(contact => (
        <ContactItem
          key={contact.id}
          {...contact}
          onDelete={id => dispatch(deleteContact(id))}
          isLoading={isLoading}
        />
      ))}
    </List>
  );
};
