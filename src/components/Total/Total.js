import React from 'react';
import PropTypes from 'prop-types';
import './Total.scss';

const Total = ({ total }) => <p className="Total">Total contacts: {total}</p>;

Total.defaultProps = {
  total: null,
};

Total.prototypes = {
  total: PropTypes.number,
};

export default Total;
