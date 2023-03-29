import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchAllContacts } from 'redux/contacts/operations';
import { deleteContact } from 'redux/contacts/operations';
import { getFilteredContacts } from 'redux/utils';
import { Li, Ul, Span, DeleteButton } from './ContactListStyled';
import { selectContactsItems, selectFilter } from 'redux/contacts/selectors';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContactsItems);
  const filter = useSelector(selectFilter);

  const filteredContacts = getFilteredContacts(contacts, filter);
  useEffect(() => {
    dispatch(fetchAllContacts());
  }, [dispatch]);
  return (
    <Ul>
      {filteredContacts.map(contact => (
        <Li key={contact.id}>
          <Span>
            {contact.name}
            &nbsp;&nbsp;&nbsp;&nbsp;
            {contact.number}
          </Span>

          <DeleteButton
            type="button"
            onClick={() => {
              dispatch(deleteContact(contact.id));
            }}
          >
            Delete
          </DeleteButton>
        </Li>
      ))}
    </Ul>
  );
};
