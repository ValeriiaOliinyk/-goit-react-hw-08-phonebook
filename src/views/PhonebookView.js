// Base
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { getLoading } from '../redux/phonebook/phonebook-selectors';

// Components
import Container from '../components/Container';
import Section from '../components/Section';
import Filter from '../components/Filter';
import ContactForm from '../components/ContactForm';
import ContactList from '../components/ContactList';
import Total from '../components/Total';
import MainLoder from '../components/MainLoader';
import { contactsOperations } from '../redux/phonebook';

const PhonebookViews = () => {
  const contacts = useSelector(state => state.contacts.contacts);
  const isLoadingContacts = useSelector(getLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <Section title="Phonebook">
        <ContactForm />
      </Section>
      <Section title="Contacts">
        {contacts.length >= 1 && <Filter />}
        {isLoadingContacts && <MainLoder />}
        <ContactList />
        {contacts && contacts.length >= 1 && <Total total={contacts.length} />}
      </Section>
    </Container>
  );
};

PhonebookViews.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }),
  ),
};

export default PhonebookViews;
