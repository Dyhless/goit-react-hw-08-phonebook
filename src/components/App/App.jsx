import { Container, PhoneFrame, Title, ContentContainer } from './App.styled';
import { ContactForm } from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';

export const App = () => {
  return (
    <Container>
      <PhoneFrame>
        <Title>Phonebook</Title>
        <ContentContainer>
          <ContactForm />
          <Title>Contacts</Title>
          <Filter />
          <ContactList />
        </ContentContainer>
      </PhoneFrame>
    </Container>
  );
};
