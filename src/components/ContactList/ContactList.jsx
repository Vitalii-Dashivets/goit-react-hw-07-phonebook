import { useSelector } from 'react-redux/es/hooks/useSelector';
import { Contact } from 'components/Contact/Contact';
import { selectVisibleContacts } from 'redux/selectors';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { List, ListContainer, Message } from './ContactList.styled';

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

  return (
    <ListContainer>
      <List>
        {visibleContacts.length === 0 && (
          <Message>There are no contacts for your search</Message>
        )}
        {visibleContacts.map(item => {
          return <Contact key={item.id} contact={item} id={item.id} />;
        })}
      </List>
    </ListContainer>
  );
}
