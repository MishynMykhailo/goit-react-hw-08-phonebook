import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import * as actions from './contacts-actions';
axios.defaults.baseURL = 'https://62d25304d4eb6c69e7e95a0f.mockapi.io/';

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
// export const deleteContact = id => async dispatch => {
//   dispatch(actions.deleteContactRequest());

//   try {
//     await axios.delete(`/contacts/${id}`);
//     dispatch(actions.deleteContactSuccess(id));
//   } catch (error) {
//     dispatch(actions.deleteContactError(error));
//   }
// };

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
