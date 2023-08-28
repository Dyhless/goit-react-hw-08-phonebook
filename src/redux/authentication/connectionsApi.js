import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Встановлюємо базовий URL для всіх запитів
axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

// Утилітна функція для додавання JWT у заголовок запиту
const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// Утилітна функція для видалення JWT з заголовка запиту
const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

// Утилітна функція для створення асинхронної дії автентифікації
const createAuthAsyncThunk = (name, requestFn) =>
  createAsyncThunk(`auth/${name}`, async (args, thunkAPI) => {
    try {
      // Виконуємо запит і отримуємо відповідь
      const response = await requestFn(args);
      // Після успішного виконання запиту, додаємо токен до заголовку
      setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      // У разі помилки повертаємо помилку в разі збою
      return thunkAPI.rejectWithValue(error.message);
    }
  });

// Створюємо асинхронні дії для реєстрації, входу, виходу та оновлення даних користувача
export const register = createAuthAsyncThunk('register', credentials =>
  axios.post('/users/signup', credentials)
);

export const logIn = createAuthAsyncThunk('login', credentials =>
  axios.post('/users/login', credentials)
);

export const logOut = createAuthAsyncThunk('logout', async () => {
  // Виконуємо запит на виход з облікового запису
  await axios.post('/users/logout');
  // Після успішного виходу, видаляємо токен з заголовку
  clearAuthHeader();
});

export const refreshUser = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {
  const state = thunkAPI.getState();
  const persistedToken = state.auth.token;

  if (persistedToken === null) {
    return thunkAPI.rejectWithValue('Unable to fetch user');
  }

  try {
    setAuthHeader(persistedToken);
    // Оголошуємо цю функцію асинхронною
    const response = await axios.get('/users/current');
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

