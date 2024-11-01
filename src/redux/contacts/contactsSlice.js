import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './contactsApi';
import {
  handleAddContactFulfilled,
  handleDeleteContactFulfilled,
  handleGetAllContactsFulfilled,
  handlePending,
  handleRejected,
} from '../handlers';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    tempItems: [], 
    isLoading: false,
    error: null,
  },
  reducers: {
    addTempContact: (state, action) => {
      state.tempItems.push(action.payload); 
    },
    deleteTempContact: (state, action) => {
      state.tempItems = state.tempItems.filter(contact => contact.id !== action.payload);
    },
    clearTempContacts: (state) => {
      state.tempItems = []; 
    }
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.fulfilled, handleGetAllContactsFulfilled)
      .addCase(fetchContacts.rejected, handleRejected)
      .addCase(addContact.pending, handlePending)
      .addCase(addContact.fulfilled, handleAddContactFulfilled)
      .addCase(addContact.rejected, handleRejected)
      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.fulfilled, handleDeleteContactFulfilled)
      .addCase(deleteContact.rejected, handleRejected);
  },
});

export const { addTempContact, deleteTempContact, clearTempContacts } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;