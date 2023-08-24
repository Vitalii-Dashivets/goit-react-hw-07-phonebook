import { createSlice, nanoid } from '@reduxjs/toolkit';
import {
  thunkGetContacts,
  thunkAddContacts,
  thunkDeleteContacts,
} from './operations';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialState,
  extraReducers: {
    [thunkGetContacts.pending](state) {
      state.isLoading = true;
    },
    [thunkGetContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [thunkGetContacts.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    [thunkAddContacts.pending](state) {
      state.isLoading = true;
    },
    [thunkAddContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    },
    [thunkAddContacts.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    [thunkDeleteContacts.pending](state) {
      state.isLoading = true;
    },
    [thunkDeleteContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    },
    [thunkDeleteContacts.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

// export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;

// const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState: initialState,
//   reducers: {
//     addContact: {
//       reducer(state, action) {
//         state.push(action.payload);
//       },
//       prepare(data) {
//         return {
//           payload: {
//             ...data,
//             id: nanoid(),
//           },
//         };
//       },
//     },
//     deleteContact(state, action) {
//       const index = state.findIndex(contact => contact.id === action.payload);
//       state.splice(index, 1);
//     },
//   },
// });
