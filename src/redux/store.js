import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import { authReducer } from 'redux/authentication/authenticationSlice';
import { contactsReducer } from './contacts/contactsSlice';
import { filterReducer } from './filter/filterSlice';

// Створюємо middleware для redux-persist
const middleware = getDefaultMiddleware({
  thunk: true, // Включаем redux-thunk
  serializableCheck: {
    // Ігноруємо деякі дії, які redux-persist не може обробити
    ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  },
});

// Конфігурація для збереження аутентифікаційних даних
const authPersistConfig = {
  key: 'auth',       // Ключ для локального сховища
  storage,           // Використовувати вказане сховище (localStorage)
  whitelist: ['token'], // Список полів, які зберігатимуться
};

// Кореневий редуктор, де поєднуються всі редуктори
const rootReducer = {
  contacts: contactsReducer, // Редуктор контактів
  filter: filterReducer,     // Редуктор фільтрації
  auth: persistReducer(authPersistConfig, authReducer), // Редуктор аутентифікації з підтримкою збереження
};

// Створюємо стор та постійне сховище
export const store = configureStore({
  reducer: rootReducer,         // Використовуємо кореневий редуктор
  middleware,                   // Використовуємо middleware
  devTools: process.env.NODE_ENV === 'development', // Включаємо devTools у режимі розробки
});

// Створюємо постійне сховище
export const persistor = persistStore(store);
