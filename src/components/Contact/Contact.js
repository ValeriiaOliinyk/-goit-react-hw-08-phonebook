import React from 'react';
import './Contact.scss';
import BtnHelper from '../BtnHelper';
import { ReactComponent as Delete } from './delete.svg';
import PropTypes from 'prop-types';

const Contact = ({ name, number, onDeleteContact }) => (
  <>
    <p className="Contact__text">
      {name}: {number}
    </p>
    <BtnHelper onClick={onDeleteContact} className="Contact__btn">
      <Delete width="20" height="20" fill="white" />
    </BtnHelper>
  </>
);

Contact.defaultProps = {
  name: '',
  number: '',
};

Contact.prototypes = {
  name: PropTypes.string,
  number: PropTypes.string,
  onDeleteContact: PropTypes.func.isRequired,
};

export default Contact;
