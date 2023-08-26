import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, fetchContacts } from 'redux/contactsApi';
import { Loader } from 'components/Loader';
import {
  selectError,
  selectIsLoading,
  selectVisibleContacts,
} from 'redux/selectors';
import {
  List,
  ListItem,
  ContactInfo,
  Name,
  Phone,
  DeleteButton,
  Empty,
} from './ContactList.styled';

const ContactList = () => {
  const dispatch = useDispatch();
  const visibleContacts = useSelector(selectVisibleContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleDelete = id => {
    dispatch(deleteContact(id));
  };

  return (
    <List>
      {!visibleContacts.length && !error && !isLoading && (
        <Empty>No contacts</Empty>
      )}
      {error && <p>{error}</p>}
      {visibleContacts.map(({ id, name, phone }) => (
        <ListItem key={id}>
          <ContactInfo>
            <Name>{name}</Name>
            <Phone>{phone}</Phone>
          </ContactInfo>
          <DeleteButton
            type="button"
            onClick={() => handleDelete(id)}
            disabled={isLoading}
          >
            {isLoading && <Loader />}
            Delete
          </DeleteButton>
        </ListItem>
      ))}
    </List>
  );
};

export default ContactList;
