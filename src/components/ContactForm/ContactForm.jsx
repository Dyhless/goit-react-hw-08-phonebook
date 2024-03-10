import { useState } from 'react'; // Импорт хука useState для управления состоянием в функциональных компонентах
import { useDispatch, useSelector } from 'react-redux'; // Импорт хуков useDispatch и useSelector для управления состоянием Redux
import { Formik } from 'formik'; // Импорт Formik для управления состоянием формы
import * as Yup from 'yup'; // Импорт Yup для валидации формы
import { toast } from 'react-toastify'; // Импорт toast для отображения уведомлений
import 'react-toastify/dist/ReactToastify.css'; // Импорт CSS для уведомлений toast
import {
  selectIsLoading,
  selectVisibleContacts,
} from 'redux/contacts/selectors'; // Импорт селекторов Redux
import { addContact } from 'redux/contacts/contactsApi'; // Импорт действия Redux для добавления контактов
import {
  Button,
  Input,
  Label,
  StyledForm,
  StyledError,
} from './ContactForm.styled'; // Импорт стилизованных компонентов для формы контакта
import { Loader } from 'components/Loader'; // Импорт компонента Loader для отображения индикатора загрузки

const defaultValues = {
  name: '',
  number: '',
};

// Определение схемы валидации для полей формы
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
  const dispatch = useDispatch(); // Инициализация хука useDispatch для отправки действий
  const contacts = useSelector(selectVisibleContacts); // Получение контактов из хранилища Redux
  const isLoading = useSelector(selectIsLoading); // Получение состояния загрузки из хранилища Redux
  const [determineAddBtn, setDetermineAddBtn] = useState(false); // Инициализация состояния для определения, следует ли отключить кнопку добавления

  const handleSubmitForm = (values, action) => {
    setDetermineAddBtn(true); // Установка состояния determineAddBtn в true для отключения кнопки добавления
    const isInContacts = contacts.some(
      // Проверка, существует ли контакт уже в списке контактов
      ({ name }) => name.toLowerCase() === values.name.toLowerCase()
    );

    if (isInContacts) {
      return toast.warn(`${values.name} уже присутствует в контактах.`); // Отображение предупреждающего уведомления, если контакт уже существует
    }

    dispatch(addContact(values)).then(() => {
      // Отправка действия addContact для добавления контакта
      setDetermineAddBtn(false); // Сброс состояния determineAddBtn в false после добавления контакта
    });
    action.resetForm(); // Сброс формы после отправки
  };

  return (
    <Formik // Обертка Formik для управления состоянием формы
      initialValues={defaultValues}
      onSubmit={handleSubmitForm} // Обработка отправки формы
      validationSchema={schema} // Применение схемы валидации к полям формы
    >
      <StyledForm>
        <Label>
          Имя
          <Input type="text" name="name" />{' '}
          {/* Поле ввода для имени контакта */}
          <StyledError name="name" component="div" />{' '}
          {/* Отображение сообщения об ошибке для поля имени */}
        </Label>
        <Label>
          Номер телефона
          <Input type="tel" name="number" />{' '}
          {/* Поле ввода для номера телефона контакта */}
          <StyledError name="number" component="div" />{' '}
          {/* Отображение сообщения об ошибке для поля номера телефона */}
        </Label>
        <Button type="submit" disabled={isLoading && determineAddBtn}>
          {' '}
          {/* Кнопка отправки для добавления контакта */}{' '}
          {isLoading && determineAddBtn && <Loader />}{' '}
          {/* Отображение загрузчика, если форма отправляется */}
          Добавить контакт
        </Button>
      </StyledForm>
    </Formik>
  );
};
