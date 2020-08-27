import React from 'react';
import PropTypes from 'prop-types';
import Contact from '../Contact';
import './ContactList.scss';
import { connect } from 'react-redux';

const ContactList = ({ contacts, onDeleteContact }) => (
  <ul className="Contacts__list ">
    {contacts.length >= 1 ? (
      contacts.map(({ name, number, id }) => (
        <li key={id} className="Contacts__item ">
          <Contact
            name={name}
            number={number}
            onDeleteContact={() => onDeleteContact(id)}
            id={id}
          />
        </li>
      ))
    ) : (
      <p className="Contacts__zero">No contacts found</p>
    )}
  </ul>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }),
  ),
  onDeleteContact: PropTypes.func.isRequired,
};

export default connect()(ContactList);
