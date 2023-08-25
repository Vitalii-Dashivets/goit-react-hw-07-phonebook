import React from 'react';

import { selectFilter, selectIsSorted } from 'redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import { setSortByName } from 'redux/sortSlice';
import {
  FilterStyle,
  FilterInput,
  FilterLabel,
  Checkbox,
} from './Filter.styled';

export const Filter = () => {
  const filter = useSelector(selectFilter);
  const isSorted = useSelector(selectIsSorted);
  const dispatch = useDispatch();

  const onChangeFilter = evt => dispatch(setFilter(evt.target.value));
  const onChangeSortedByName = evt => {
    return dispatch(setSortByName(evt.target.checked));
  };
  return (
    <FilterStyle>
      <FilterLabel>
        Find contact by Name
        <FilterInput
          type="text"
          name="filter"
          value={filter}
          onChange={evt => onChangeFilter(evt)}
          placeholder="Enter search name"
        ></FilterInput>
      </FilterLabel>
      <FilterLabel>
        Sort by name
        <Checkbox
          type="checkbox"
          checked={isSorted}
          onChange={onChangeSortedByName}
        />
      </FilterLabel>
    </FilterStyle>
  );
};
