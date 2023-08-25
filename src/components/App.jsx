import React from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { AppSection, TitleOne, TitleContacts } from './APP.styled';
import { Loader } from 'components/Loader/Loader';

import { useSelector } from 'react-redux';
import { selectError, selectIsLoading } from 'redux/selectors';

export const App = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  return (
    <AppSection>
      <TitleOne>Phonebook</TitleOne>
      <ContactForm />
      <TitleContacts>Contacts</TitleContacts>
      <Filter />
      {error && <b>ERROR: {error}</b>}

      {isLoading && <Loader />}
      <ContactList />
    </AppSection>
  );
};
