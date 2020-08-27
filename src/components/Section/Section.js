import React from 'react';
import PropTypes from 'prop-types';
import './Section.scss';

const Section = ({ children, title }) => (
  <>
    <h2 className="Section__title">{title}</h2>
    <div className="Section__box">{children}</div>
  </>
);

Section.protoTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};

export default Section;
