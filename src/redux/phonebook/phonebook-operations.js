import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const fetchContacts = createAsyncThunk('contact/fetchContacts', async () => {
  return axios
    .get('/contacts')
    .then(({ data }) => data)
    .catch(error => error);
});

const addContact = createAsyncThunk(
  'contact/addContact',
  async ({ name, number }) => {
    const contact = { name, number };
    return axios
      .post('/contacts', contact)
      .then(({ data }) => data)
      .catch(error => error);
  },
);

const deleteContact = createAsyncThunk('contact/deleteContact', async id => {
  return axios
    .delete(`/contacts/${id}`)
    .then(() => id)
    .catch(error => error);
});

export default { fetchContacts, addContact, deleteContact };
