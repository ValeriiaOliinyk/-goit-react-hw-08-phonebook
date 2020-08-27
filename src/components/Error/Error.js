import React from 'react';
import './Error.scss';
import PropTypes from 'prop-types';

const Error = ({ text }) => <p className="Error">{text}</p>;

Error.defaultProps = {
  text: '',
};

Error.prototypes = {
  text: PropTypes.string,
};

export default Error;
