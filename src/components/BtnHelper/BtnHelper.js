import React from 'react';
import './BtnHelper.scss';
import PropTypes from 'prop-types';

const Button = ({ children, onClick }) => (
  <button className="User__btn" type="button" onClick={onClick}>
    {children}
  </button>
);

Button.defaultProps = {
  children: '',
};

Button.prototypes = {
  children: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

export default Button;
