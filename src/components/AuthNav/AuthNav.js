import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../styles/Navigation.scss';

const AuthNav = () => (
  <div>
    <NavLink
      to="/register"
      exact
      className="Navigation__link"
      activeClassName="Navigation__active"
    >
      Sign Up
    </NavLink>
    <NavLink
      to="/login"
      exact
      className="Navigation__link"
      activeClassName="Navigation__active"
    >
      Sign In
    </NavLink>
  </div>
);

export default AuthNav;
