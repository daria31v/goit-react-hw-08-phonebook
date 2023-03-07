import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import { selectError } from '../redux/selectors';
import { ContactList } from 'components/ContactList/ContactList';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { fetchAllContacts } from '../redux/contacts/operations';
import { selectIsLoading } from '../redux/selectors';

const ContactsView = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchAllContacts());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Your Phonebook</title>
      </Helmet>

      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      {isLoading && !error && (
        <h3>Please waite the request in progress...🐌</h3>
      )}
      {error && !isLoading && (
        <h4>Something went wrong... ♫ ♫ ♫ Try later ♫ ♫ ♫</h4>
      )}
      <ContactList />
    </>
  );
};

export default ContactsView;