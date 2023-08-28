import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Створюємо універсальну асинхронну функцію для виконання запитів
const createAsyncContactAction = (name, requestFn) =>
  createAsyncThunk(`contacts/${name}`, async (arg, thunkAPI) => {
    try {
      // Виконуємо асинхронний запит і отримуємо відповідь
      const response = await requestFn(arg);
      // Повертаємо дані з відповіді як результат дії
      return response.data;
    } catch (error) {
      // В разі помилки повертаємо помилку з текстом повідомлення
      return thunkAPI.rejectWithValue(error.message);
    }
  });

// Створюємо асинхронні дії для взаємодії з контактами
export const fetchContacts = createAsyncContactAction(
  'fetchContacts',
  async () => axios.get('/contacts')
);

export const addContact = createAsyncContactAction(
  'addContact',
  async (contact) => axios.post('/contacts', contact)
);

export const deleteContact = createAsyncContactAction(
  'deleteContact',
  async (contactId) => axios.delete(`/contacts/${contactId}`)
);

// Об'єднуємо всі асинхронні дії в один об'єкт для імпорту
const contactsApi = {
  fetchContacts,
  addContact,
  deleteContact,
};

export default contactsApi;
