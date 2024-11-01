import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import { authReducer } from 'redux/authentication/authenticationSlice';
import { contactsReducer } from './contacts/contactsSlice';
import { filterReducer } from './filter/filterSlice';

const middleware = getDefaultMiddleware({
  thunk: true,
  serializableCheck: {
    ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER], 
  },
});

const authPersistConfig = {
  key: 'auth',     
  storage,      
  whitelist: ['token'],
};

const rootReducer = {
  contacts: contactsReducer, 
  filter: filterReducer,    
  auth: persistReducer(authPersistConfig, authReducer), 
};

export const store = configureStore({
  reducer: rootReducer,        
  middleware,                 
  devTools: process.env.NODE_ENV === 'development', 
});

export const persistor = persistStore(store); 