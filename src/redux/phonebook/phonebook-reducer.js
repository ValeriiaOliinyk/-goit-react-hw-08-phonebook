import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { changeFilter } from './phonebook-actions';
import { contactsOperations } from '../../redux/phonebook';

const contacts = createReducer([], {
  [contactsOperations.fetchContacts.fulfilled]: (_, { payload }) => payload,
  [contactsOperations.addContact.fulfilled]: (state, { payload }) => [
    ...state,
    payload,
  ],
  [contactsOperations.deleteContact.fulfilled]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const loading = createReducer(false, {
  [contactsOperations.addContact.pending]: () => true,
  [contactsOperations.addContact.fulfilled]: () => false,
  [contactsOperations.addContact.rejected]: () => false,
  [contactsOperations.deleteContact.pending]: () => true,
  [contactsOperations.deleteContact.fulfilled]: () => false,
  [contactsOperations.deleteContact.rejected]: () => false,
  [contactsOperations.fetchContacts.pending]: () => true,
  [contactsOperations.fetchContacts.fulfilled]: () => false,
  [contactsOperations.fetchContacts.rejected]: () => false,
});

const filter = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});

const error = createReducer(null, {
  [contactsOperations.fetchContacts.fulfilled]: () => null,
  [contactsOperations.fetchContacts.rejected]: (_, { payload }) =>
    JSON.stringify(payload.message),
  [contactsOperations.addContact.pending]: () => null,
  [contactsOperations.addContact.rejected]: (_, { payload }) =>
    JSON.stringify(payload.message),
  [contactsOperations.deleteContact.pending]: () => null,
  [contactsOperations.deleteContact.rejected]: (_, { payload }) =>
    JSON.stringify(payload.message),
});

export default combineReducers({
  contacts,
  filter,
  loading,
  error,
});
