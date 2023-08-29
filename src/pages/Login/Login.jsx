import { LoginForm } from 'components/LoginForm';
import { HelmetProvider } from 'react-helmet-async';

export default function Login() {
  return (
    <>
      <HelmetProvider>
        <title>Login</title>
      </HelmetProvider>
      <LoginForm />
    </>
  );
}
