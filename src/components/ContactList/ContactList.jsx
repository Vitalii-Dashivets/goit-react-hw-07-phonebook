import { useSelector } from 'react-redux/es/hooks/useSelector';
import { Contact } from 'components/Contact/Contact';
import { getFilter, getContacts } from 'redux/selectors';
import { useEffect, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/operations';

export function ContactList() {
  const filterValue = useSelector(getFilter);
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts('/contacts'));
  }, [dispatch]);

  const visibleContacts = useMemo(() => {
    const normalizedFilter = filterValue.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter, 0)
    );
  }, [filterValue, contacts]);

  return visibleContacts.map(item => {
    return <Contact key={item.id} contact={item} id={item.id} />;
  });
}
