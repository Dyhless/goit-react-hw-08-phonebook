import { useState } from 'react';
import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/authentication/connectionsApi';
import 'react-toastify/dist/ReactToastify.css';
import { Loader } from 'components/Loader';
import {
  Button,
  Input,
  Label,
  StyledForm,
  StyledError,
} from './LoginForm.styled';

const defaultValues = {
  email: '',
  password: '',
};

export const LoginForm = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const handleLoginSubmit = async (values, { resetForm }) => {
    setIsLoading(true);
    await dispatch(logIn(values));
    setIsLoading(false);
    resetForm();
  };

  return (
    <Formik initialValues={defaultValues} onSubmit={handleLoginSubmit}>
      <StyledForm>
        <Label>
          Email
          <Input type="email" name="email" />
          <StyledError name="email" component="div" />
        </Label>
        <Label>
          Password
          <Input type="password" name="password" />
          <StyledError name="password" component="div" />
        </Label>
        <Button type="submit" disabled={isLoading}>
          {isLoading && <Loader />} Log In
        </Button>
      </StyledForm>
    </Formik>
  );
};
