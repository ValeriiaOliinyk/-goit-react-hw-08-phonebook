import React, { useState } from 'react';
import { connect } from 'react-redux';
import { contactsOperations } from '../../redux/phonebook';
import './Contact.scss';

const ContactForm = ({ contacts, onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [error, setError] = useState('');

  const updateContacts = e => {
    if (error) {
      setError(null);
    }
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return null;
    }
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  const getSameName = name => {
    return contacts.some(contact => contact.name === name.trim());
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (name === '') {
      setError(`Add name please`);
      reset();
      return;
    }

    if (getSameName(name)) {
      setError(`${name.trim()} is already in contacts`);
      reset();
      return;
    }
    onSubmit(name, number);
    reset();
  };

  return (
    <form onSubmit={handleSubmit} className="Form__label">
      <label className="Contacts__data">
        Name <br />
        <input
          type="text"
          value={name}
          name="name"
          onChange={updateContacts}
          className="Form__input"
          placeholder="Type name... "
        />
      </label>
      <label className="Contacts__data">
        Number <br />
        <input
          type="text"
          value={number}
          name="number"
          pattern="[0-9]{3}-[0-9]{2}-[0-9]{2}"
          onChange={updateContacts}
          className="Form__input"
          placeholder="Type number 289-48-27"
        />
      </label>
      <br />
      {error ? (
        <p className="Form__error">{error}</p>
      ) : (
        <button type="submit" className="Form__btn">
          Add contact
        </button>
      )}
    </form>
  );
};

const mapStateToProps = ({ contacts: { contacts } }) => ({
  contacts,
});

const mapDispatchToProps = dispatch => ({
  onSubmit: (name, number) =>
    dispatch(contactsOperations.addContact({ name, number })),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
