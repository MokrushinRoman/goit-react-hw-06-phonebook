import { useDispatch, useSelector } from 'react-redux';
import { capitalLetter } from 'helpers';
import { Contact, ContactsList, DeleteButton } from './Contacts.styled';
import { deleteContact, getContacts, getFilterValue } from 'reduxFiles';

export const Contacts = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilterValue);
  const dispatch = useDispatch();

  const filteredContacts = contacts.filter(({ name }) => {
    return name.toLowerCase().includes(filter);
  });

  return (
    <ContactsList>
      {filteredContacts.map(({ id, name, number }) => {
        return (
          <Contact key={id}>
            {name}: {number}
            <DeleteButton onClick={() => dispatch(deleteContact(id))}>
              {capitalLetter('delete')}
            </DeleteButton>
          </Contact>
        );
      })}
    </ContactsList>
  );
};
