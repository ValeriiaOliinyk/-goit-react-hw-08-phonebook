import React from 'react';
import { changeFilter } from '../../redux/phonebook/phonebook-actions';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from '../../redux/phonebook/phonebook-selectors';
import './Filter.scss';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = e => dispatch(changeFilter(e.target.value));
  const value = useSelector(getFilter);
  return (
    <label className="Filter__label">
      Find contacts by name
      <br />
      <input
        type="text"
        value={value}
        onChange={filter}
        className="Filter__input"
        placeholder="Type name... "
      />
    </label>
  );
};

export default Filter;
