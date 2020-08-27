import React from 'react';
import './LogError.scss';
import PropTypes from 'prop-types';

const LogError = ({ message }) => <div className="Log__error ">{message}</div>;

LogError.defaultProps = {
  message: '',
};

LogError.prototypes = {
  message: PropTypes.string,
};

export default LogError;
