import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authSelectors } from '../../redux/auth';
import '../../styles/Navigation.scss';

const Navigation = () => {
  const isAuthenticated = useSelector(authSelectors.getIsAuthenticated);
  return (
    <nav>
      <NavLink
        to="/"
        exact
        className="Navigation__link"
        activeClassName="Navigation__active"
      >
        Home
      </NavLink>
      {isAuthenticated && (
        <NavLink
          to="/contacts"
          exact
          className="Navigation__link"
          activeClassName="Navigation__active"
        >
          Phonebook
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;
