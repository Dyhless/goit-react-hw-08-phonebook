import { useState } from 'react'; // Импорт хука useState для управления состоянием
import { Formik } from 'formik'; // Импорт Formik для управления состоянием формы
import { useDispatch } from 'react-redux'; // Импорт хука useDispatch для отправки действий Redux
import { register } from 'redux/authentication/connectionsApi'; // Импорт действия для регистрации пользователя
import 'react-toastify/dist/ReactToastify.css'; // Импорт CSS для уведомлений toast
import { Loader } from 'components/Loader'; // Импорт компонента Loader для отображения индикатора загрузки
import {
  Button,
  Input,
  Label,
  StyledForm,
  StyledError,
} from './RegisterForm.styled'; // Импорт стилизованных компонентов для формы регистрации

const defaultValues = {
  name: '',
  email: '',
  password: '',
};

export const RegisterForm = () => {
  const dispatch = useDispatch(); // Инициализация хука useDispatch для отправки действий
  const [isLoading, setIsLoading] = useState(false); // Инициализация состояния для отслеживания загрузки

  const handleRegisterSubmit = async (values, { resetForm }) => {
    setIsLoading(true); // Установка состояния isLoading в true при отправке формы
    await dispatch(register(values)); // Отправка действия для регистрации пользователя
    setIsLoading(false); // Сброс состояния isLoading в false после завершения загрузки
    resetForm(); // Сброс формы после успешной регистрации
  };

  return (
    <Formik initialValues={defaultValues} onSubmit={handleRegisterSubmit}>
      {() => (
        <StyledForm>
          <Label>
            Username
            {/* Поле ввода для имени пользователя */}
            <Input type="text" name="name" />{' '}
            {/* Отображение сообщения об ошибке для поля имени пользователя */}
            <StyledError name="name" component="div" />{' '}
          </Label>
          <Label>
            Email
            {/* Поле ввода для электронной почты */}
            <Input type="email" name="email" />{' '}
            {/* Отображение сообщения об ошибке для поля email */}
            <StyledError name="email" component="div" />{' '}
          </Label>
          <Label>
            Password
            {/* Поле ввода для пароля */}
            <Input type="password" name="password" />{' '}
            {/* Отображение сообщения об ошибке для поля password */}
            <StyledError name="password" component="div" />{' '}
          </Label>
          <Button type="submit" disabled={isLoading}>
            {/* Отображение индикатора загрузки во время отправки формы */}
            {isLoading && <Loader />} Register{' '}
          </Button>
        </StyledForm>
      )}
    </Formik>
  );
};
