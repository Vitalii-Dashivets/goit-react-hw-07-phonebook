import { createSlice } from '@reduxjs/toolkit';

const sortSlice = createSlice({
  name: 'sortByName',
  initialState: false,
  reducers: {
    setSortByName(state, action) {
      return (state = action.payload);
    },
  },
});

export const { setSortByName } = sortSlice.actions;
export const sortReducer = sortSlice.reducer;
