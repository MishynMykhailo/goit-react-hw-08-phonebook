import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import * as actions from './contacts-actions';
import {
  fetchContact,
  addContact,
  deleteContact,
  updateContact,
} from './contacts-operations';

const items = createReducer([], {
  [fetchContact.fulfilled]: (_, { payload }) => {
    return payload;
  },
  [addContact.fulfilled]: (state, { payload }) => {
    return [...state, payload];
  },
  [deleteContact.fulfilled]: (state, { payload }) => {
    return state.filter(({ id }) => id !== payload);
  },
  [updateContact.fulfilled]: (state, { payload }) => {
    return state.map(contact =>
      contact.id === payload.id ? payload : contact
    );
  },
});
const filter = createReducer('', {
  [actions.changeFilter]: (_, { payload }) => payload,
});

const loading = createReducer([], {
  [fetchContact.pending]: () => true,
  [fetchContact.fulfilled]: () => false,
  [fetchContact.rejected]: () => false,

  [addContact.pending]: () => true,
  [addContact.fulfilled]: () => false,
  [addContact.rejected]: () => false,

  [deleteContact.pending]: () => true,
  [deleteContact.fulfilled]: () => false,
  [deleteContact.rejected]: () => false,
});
export const contactReducers = combineReducers({
  items,
  filter,
  loading,
});
