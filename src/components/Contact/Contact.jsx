import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { ContactStyle, ButtonStyle, Name, Number } from './Contact.styled';
import { deleteContact } from 'redux/operations';

export function Contact({ contact }) {
  const dispatch = useDispatch();
  const { name, number, id } = contact;
  const handleDeleteContact = () => dispatch(deleteContact(id));

  return (
    <ContactStyle>
      <Name>{name} :</Name>
      <Number>{number}</Number>
      <ButtonStyle type="button" onClick={handleDeleteContact}>
        Delete
      </ButtonStyle>
    </ContactStyle>
  );
}

Contact.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string,
    number: PropTypes.string,
  }),
};
