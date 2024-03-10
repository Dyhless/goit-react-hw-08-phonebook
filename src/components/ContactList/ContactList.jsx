import React, { useEffect, useState } from 'react'; // Импорт React и хука useEffect, useState
import { useDispatch, useSelector } from 'react-redux'; // Импорт хуков useDispatch и useSelector для работы с Redux
import { fetchContacts, deleteContact } from 'redux/contacts/contactsApi'; // Импорт действий для получения и удаления контактов из Redux
import { Loader } from 'components/Loader'; // Импорт компонента Loader для отображения индикатора загрузки
import {
  selectError,
  selectIsLoading,
  selectVisibleContacts,
} from 'redux/contacts/selectors'; // Импорт селекторов Redux
import {
  List,
  ListItem,
  ContactInfo,
  Name,
  Phone,
  DeleteButton,
  Empty,
} from './ContactList.styled'; // Импорт стилизованных компонентов для списка контактов

export const ContactList = () => {
  const dispatch = useDispatch(); // Инициализация хука useDispatch для отправки действий Redux
  const visibleContacts = useSelector(selectVisibleContacts); // Получение видимых контактов из хранилища Redux
  const isLoading = useSelector(selectIsLoading); // Получение состояния загрузки из хранилища Redux
  const error = useSelector(selectError); // Получение ошибки из хранилища Redux
  const [contactToDeleteId, setContactToDeleteId] = useState(null); // Инициализация состояния для идентификатора контакта, который нужно удалить

  useEffect(() => {
    dispatch(fetchContacts()); // Получение списка контактов при загрузке компонента
  }, [dispatch]);

  if (!visibleContacts.length && !error && !isLoading) {
    // Проверка наличия контактов для отображения
    return <Empty>No contacts</Empty>; // Отображение сообщения об отсутствии контактов
  }

  if (error) {
    // Проверка наличия ошибки
    return <p>{error}</p>; // Отображение сообщения об ошибке
  }

  return (
    <List>
      {visibleContacts.map(
        (
          { id, name, number } // Отображение списка контактов
        ) => (
          <ListItem key={id}>
            <ContactInfo>
              <Name>{name}</Name>
              <Phone>{number}</Phone>
            </ContactInfo>
            <DeleteButton
              type="button"
              onClick={() => {
                setContactToDeleteId(id); // Установка идентификатора контакта для удаления
                dispatch(deleteContact(id)).then(() => {
                  // Отправка действия для удаления контакта
                  setContactToDeleteId(null); // Сброс идентификатора контакта после удаления
                });
              }}
              disabled={isLoading && contactToDeleteId === id} // Отключение кнопки удаления во время загрузки
            >
              {contactToDeleteId === id ? <Loader /> : 'Delete'}{' '}
              {/* Отображение загрузчика, если контакт удаляется */}
            </DeleteButton>
          </ListItem>
        )
      )}
    </List>
  );
};
