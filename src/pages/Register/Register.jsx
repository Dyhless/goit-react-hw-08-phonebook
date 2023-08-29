import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { HelmetProvider } from 'react-helmet-async';

export default function Register() {
  return (
    <>
      <HelmetProvider>
        <title>Registration</title>
      </HelmetProvider>
      <RegisterForm />
    </>
  );
}
