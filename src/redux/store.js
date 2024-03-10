import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import { authReducer } from 'redux/authentication/authenticationSlice';
import { contactsReducer } from './contacts/contactsSlice';
import { filterReducer } from './filter/filterSlice';

// Создаем middleware для redux-persist
const middleware = getDefaultMiddleware({
  thunk: true, // Включаем redux-thunk
  serializableCheck: {
    ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER], // Игнорируем определенные действия, которые redux-persist не может обработать
  },
});

// Конфигурация для сохранения аутентификационных данных
const authPersistConfig = {
  key: 'auth',       // Ключ для локального хранилища
  storage,           // Использовать указанное хранилище (localStorage)
  whitelist: ['token'], // Список полей, которые будут сохранены
};

// Корневой редуктор, где объединяются все редукторы
const rootReducer = {
  contacts: contactsReducer, // Редуктор контактов
  filter: filterReducer,     // Редуктор фильтрации
  auth: persistReducer(authPersistConfig, authReducer), // Редуктор аутентификации с поддержкой сохранения
};

// Создаем хранилище и постоянное хранилище
export const store = configureStore({
  reducer: rootReducer,         // Используем корневой редуктор
  middleware,                   // Используем middleware
  devTools: process.env.NODE_ENV === 'development', // Включаем devTools в режиме разработки
});

export const persistor = persistStore(store); // Создаем постоянное хранилище