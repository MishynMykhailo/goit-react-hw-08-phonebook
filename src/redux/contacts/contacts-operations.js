import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
// import * as actions from './contacts-actions';

export const fetchContact = createAsyncThunk(
  'contacts/fetchContact',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/contacts');
      console.log(data);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (text, { rejectWithValue }) => {
    try {
      console.log(text);
      const { data } = await axios.post('/contacts', text);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contact/deleteContact',
  async (contactId, { rejectWithValue }) => {
    try {
      const response = await axios.delete(`contacts/${contactId}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
