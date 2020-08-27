import React from 'react';
import PropTypes from 'prop-types';
import './FormContainer.scss';

const Container = ({ children }) => <div className="Form">{children}</div>;

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
