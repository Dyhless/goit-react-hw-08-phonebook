import { HelmetProvider } from 'react-helmet-async';
import { Container, Title } from './Home.styled';

export default function Home() {
  return (
    <>
      <HelmetProvider>
        <title>Phonebook</title>
      </HelmetProvider>
      <Container>
        <Title>Stay Organized, Stay Connected with Phonebook</Title>
      </Container>
    </>
  );
}
