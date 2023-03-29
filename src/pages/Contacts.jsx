import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchAllContacts } from 'redux/contacts/operations';
import {
  selectLoadingValue,
  selectError,
  applayFilter,
} from 'redux/contacts/selectors';
import { selectToken } from 'redux/auth/selectors';
import { ContactList } from '../components/ContactList/ContactList';
import { ContactForm } from '../components/ContactForm/ContactForm';
import { Filter } from '../components/Filter/Filter';


export const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoadingValue);
  const error = useSelector(selectError);
  const token = useSelector(selectToken);
  const contactsList = useSelector(applayFilter);

  useEffect(() => {
    token && dispatch(fetchAllContacts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  return (
    <div>
      <h2>Phonebook</h2>
      <ContactForm />

      <Filter />
      {contactsList.length === 0 ? (
        <h2>Add your contacts</h2>
      ) : (
        <h2>Contacts</h2>
      )}

      {isLoading && !error && <b>Request in progress...</b>}
      <ContactList />
    </div>
  );
};

export default Contacts;