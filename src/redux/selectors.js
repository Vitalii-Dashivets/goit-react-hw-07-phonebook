import { createSelector } from '@reduxjs/toolkit';

export const selectFilter = state => state.filter;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;
export const selectContacts = state => state.contacts.items;

export const selectVisibleContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filterValue) => {
    const normalizedFilter = filterValue.toLowerCase();

    const sortedContacts = [...contacts].sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    return sortedContacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter, 0)
    );
  }
);
