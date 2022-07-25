import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
// import * as actions from './contacts-actions';

export const fetchContact = createAsyncThunk(
  'contacts/fetchContact',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/contacts');

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
      await axios.delete(`/contacts/${contactId}`);
      return contactId;
    } catch (error) {
      console.log(rejectWithValue(error));
      return rejectWithValue(error);
    }
  }
);
export const updateContact = createAsyncThunk(
  'contact/updateContact',
  async ({ id, number, name }, { rejectWithValue }) => {
    try {
      const { data } = await axios.patch(`/contacts/${id}`, { number, name });
      return data;
    } catch (error) {
      console.log(rejectWithValue(error));
      return rejectWithValue(error);
    }
  }
);
