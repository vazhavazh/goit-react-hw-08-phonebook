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
  import {
    WrapperHome,
    // WrapperHome2,
    H2Home,
    // LabelStyled,
  } from './pagesStyled';

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
    <WrapperHome>
      <H2Home>Phonebook</H2Home>
      <ContactForm />

      <Filter />
      {contactsList.length === 0 ? (
        <H2Home>Add your contacts</H2Home>
      ) : (
        <H2Home>Contacts</H2Home>
      )}

      {isLoading && !error && <b>Request in progress...</b>}
      <ContactList />
    </WrapperHome>
  );
};

export default Contacts;