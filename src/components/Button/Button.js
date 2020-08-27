import React from 'react';
import './Button.scss';
import PropTypes from 'prop-types';

const Button = ({ text }) => <button className="btn">{text}</button>;

Button.defaultProps = {
  text: '',
};

Button.prototypes = {
  text: PropTypes.string,
};

export default Button;
