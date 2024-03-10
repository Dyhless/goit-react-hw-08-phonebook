import { useState } from 'react'; // Импорт хука useState для управления состоянием
import { Formik } from 'formik'; // Импорт Formik для управления состоянием формы
import { useDispatch } from 'react-redux'; // Импорт хука useDispatch для отправки действий Redux
import { logIn } from 'redux/authentication/connectionsApi'; // Импорт действия для входа пользователя
import 'react-toastify/dist/ReactToastify.css'; // Импорт CSS для уведомлений toast
import { Loader } from 'components/Loader'; // Импорт компонента Loader для отображения индикатора загрузки
import {
  Button,
  Input,
  Label,
  StyledForm,
  StyledError,
} from './LoginForm.styled'; // Импорт стилизованных компонентов для формы входа

const defaultValues = {
  email: '',
  password: '',
};

export const LoginForm = () => {
  const dispatch = useDispatch(); // Инициализация хука useDispatch для отправки действий
  const [isLoading, setIsLoading] = useState(false); // Инициализация состояния для отслеживания загрузки

  const handleLoginSubmit = async (values, { resetForm }) => {
    setIsLoading(true); // Установка состояния isLoading в true при отправке формы
    await dispatch(logIn(values)); // Отправка действия для входа пользователя
    setIsLoading(false); // Сброс состояния isLoading в false после завершения загрузки
    resetForm(); // Сброс формы после успешного входа
  };

  return (
    <Formik initialValues={defaultValues} onSubmit={handleLoginSubmit}>
      <StyledForm>
        <Label>
          Email
          <Input type="email" name="email" />{' '}
          {/* Поле ввода для электронной почты */}
          <StyledError name="email" component="div" />{' '}
          {/* Отображение сообщения об ошибке для поля email */}
        </Label>
        <Label>
          Password
          <Input type="password" name="password" />{' '}
          {/* Поле ввода для пароля */}
          <StyledError name="password" component="div" />{' '}
          {/* Отображение сообщения об ошибке для поля password */}
        </Label>
        <Button type="submit" disabled={isLoading}>
          {isLoading && <Loader />} Log In{' '}
          {/* Отображение индикатора загрузки во время отправки формы */}
        </Button>
      </StyledForm>
    </Formik>
  );
};
