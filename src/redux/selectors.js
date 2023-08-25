import { createSelector } from '@reduxjs/toolkit';

export const selectFilter = state => state.filter;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;
export const selectContacts = state => state.contacts.items;
export const selectIsSorted = state => state.sortByName;

export const selectVisibleContacts = createSelector(
  [selectContacts, selectFilter, selectIsSorted],
  (contacts, filterValue, isSorted) => {
    const normalizedFilter = filterValue.toLowerCase();
    if (isSorted) {
      return (contacts = [...contacts].sort((a, b) =>
        a.name.localeCompare(b.name)
      ));
    }

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter, 0)
    );
  }
);
