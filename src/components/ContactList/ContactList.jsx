import { useSelector } from 'react-redux/es/hooks/useSelector';
import { Contact } from 'components/Contact/Contact';
import { selectVisibleContacts } from 'redux/selectors';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/operations';

export function ContactList() {
  const dispatch = useDispatch();
  const visibleContacts = useSelector(selectVisibleContacts);

  useEffect(() => {
    dispatch(fetchContacts('/contacts'));
  }, [dispatch]);

  // const visibleContacts = useMemo(() => {
  //   const normalizedFilter = filterValue.toLowerCase();
  //   return contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(normalizedFilter, 0)
  //   );
  // }, [filterValue, contacts]);

  return visibleContacts.map(item => {
    return <Contact key={item.id} contact={item} id={item.id} />;
  });
}
