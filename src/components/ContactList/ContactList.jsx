import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts, deleteContact } from 'redux/contacts/contactsApi';
import { Loader } from 'components/Loader';
import {
  selectError,
  selectIsLoading,
  selectVisibleContacts,
  selectTempContacts,
} from 'redux/contacts/selectors';
import { selectIsLoggedIn } from 'redux/authentication/selectors';
import {
  List,
  ListItem,
  ContactInfo,
  Name,
  Phone,
  DeleteButton,
  Empty,
} from './ContactList.styled';

export const ContactList = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const visibleContacts = useSelector(selectVisibleContacts);
  const tempContacts = useSelector(selectTempContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const [contactToDeleteId, setContactToDeleteId] = useState(null);

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(fetchContacts());
    }
  }, [dispatch, isLoggedIn]);

  const contactsToDisplay = isLoggedIn ? visibleContacts : tempContacts;

  if (!contactsToDisplay.length && !error && !isLoading) {
    return <Empty>No contacts</Empty>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <List>
      {contactsToDisplay.map(({ id, name, number }) => (
        <ListItem key={id}>
          <ContactInfo>
            <Name>{name}</Name>
            <Phone>{number}</Phone>
          </ContactInfo>
          <DeleteButton
            type="button"
            onClick={() => {
              setContactToDeleteId(id);
              if (isLoggedIn) {
                dispatch(deleteContact(id)).then(() =>
                  setContactToDeleteId(null)
                );
              } else {
                dispatch({ type: 'contacts/deleteTempContact', payload: id });
                setContactToDeleteId(null);
              }
            }}
            disabled={isLoading && contactToDeleteId === id}
          >
            {contactToDeleteId === id ? <Loader /> : 'Delete'}
          </DeleteButton>
        </ListItem>
      ))}
    </List>
  );
};
