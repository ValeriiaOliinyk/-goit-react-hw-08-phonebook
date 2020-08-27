import React from 'react';
import './Title.scss';
import PropTypes from 'prop-types';

const Title = ({ text }) => (
  <>
    <div className="Title__box">
      <div className="Title__img"></div>
      <h2>{text}</h2>
    </div>
  </>
);

Title.defaultProps = {
  text: '',
};

Title.prototypes = {
  text: PropTypes.string,
};

export default Title;
