import { createSelector } from '@reduxjs/toolkit';

export const getFilter = ({ contacts }) => contacts.filter;

export const getError = state => state.contacts.error;

export const getLoading = state => state.contacts.loading;

const getAllContacts = ({ contacts: { contacts } }) => contacts;

export const getVisibleContacts = createSelector(
  [getAllContacts, getFilter],
  (contacts, filter) => {
    const normalizedFilter = filter.toLocaleLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  },
);
