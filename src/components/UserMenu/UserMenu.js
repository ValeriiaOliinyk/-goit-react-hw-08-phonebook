import React from 'react';
import { authSelectors, authOperations } from '../../redux/auth';
import { useDispatch, useSelector } from 'react-redux';
import defaultAvatar from './sauropod.png';
import { ReactComponent as LogOutIcon } from './logout.svg';
import BtnHelper from '../BtnHelper';
import PropTypes from 'prop-types';
import './UserMenu.scss';

const UserMenu = () => {
  const name = useSelector(authSelectors.getUsername);
  const dispatch = useDispatch();
  const onLogOut = () => dispatch(authOperations.logOut());
  return (
    <div className="User__container">
      <img src={defaultAvatar} alt="avatar" className="User__avatar" />
      <div className="User__name">Welcome, {name}</div>
      <BtnHelper type="button" onClick={onLogOut}>
        <LogOutIcon width="23" height="23" fill="white" />
      </BtnHelper>
    </div>
  );
};

UserMenu.defaultProps = {
  name: '',
  avatar: '',
};

UserMenu.prototypes = {
  name: PropTypes.string,
  avatar: PropTypes.string,
  onLogout: PropTypes.func.isRequired,
};

export default UserMenu;
