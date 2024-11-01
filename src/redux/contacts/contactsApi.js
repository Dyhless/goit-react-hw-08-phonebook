import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const handleAsyncRequest = async (url, data, thunkAPI, method = 'get') => {
  try {
    const response = await axios[method](url, data);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
};

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, thunkAPI) => {
    return handleAsyncRequest('/contacts', null, thunkAPI);
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkAPI) => {
    return handleAsyncRequest('/contacts', contact, thunkAPI, 'post');
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    return handleAsyncRequest(`/contacts/${contactId}`, null, thunkAPI, 'delete');
  }
);
