import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  selectIsLoading,
  selectVisibleContacts,
} from 'redux/contacts/selectors';
import { addContact } from 'redux/contacts/contactsApi';
import { addTempContact } from 'redux/contacts/contactsSlice';
import { selectIsLoggedIn } from 'redux/authentication/selectors';
import {
  Button,
  Input,
  Label,
  StyledForm,
  StyledError,
} from './ContactForm.styled';
import { Loader } from 'components/Loader';

const defaultValues = {
  name: '',
  number: '',
};

const schema = Yup.object().shape({
  name: Yup.string().required('* Имя обязательно для заполнения'),
  number: Yup.string()
    .required('* Номер телефона обязателен для заполнения')
    .matches(
      /^[\d()+-]+$/,
      'Номер телефона должен содержать только цифры и следующие символы: ( ) - +'
    )
    .min(8, 'Номер телефона должен содержать минимум 8 символов'),
});

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectVisibleContacts);
  const isLoading = useSelector(selectIsLoading);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const [determineAddBtn, setDetermineAddBtn] = useState(false);

  const handleSubmitForm = (values, action) => {
    setDetermineAddBtn(true);
    const isInContacts = contacts.some(
      ({ name }) => name.toLowerCase() === values.name.toLowerCase()
    );

    if (isInContacts) {
      setDetermineAddBtn(false);
      return toast.warn(`${values.name} уже присутствует в контактах.`);
    }

    if (isLoggedIn) {
      dispatch(addContact(values)).then(() => {
        setDetermineAddBtn(false);
      });
    } else {
      dispatch(addTempContact({ ...values, id: Date.now().toString() }));
      setDetermineAddBtn(false);
    }

    action.resetForm();
  };

  return (
    <Formik
      initialValues={defaultValues}
      onSubmit={handleSubmitForm}
      validationSchema={schema}
    >
      <StyledForm>
        <Label>
          Name
          <Input type="text" name="name" />
          <StyledError name="name" component="div" />
        </Label>
        <Label>
          Phone number
          <Input type="tel" name="number" />
          <StyledError name="number" component="div" />
        </Label>
        <Button type="submit" disabled={isLoading && determineAddBtn}>
          {isLoading && determineAddBtn && <Loader />}
          Add contact
        </Button>
      </StyledForm>
    </Formik>
  );
};
