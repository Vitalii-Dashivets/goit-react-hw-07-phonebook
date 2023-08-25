import { combineReducers } from 'redux';
import { contactsReducer } from './contactsSlice';
import { filterReducer } from './filterSlice';
import { sortReducer } from './sortSlice';

export default combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
  sortByName: sortReducer,
});
