import { createAsyncThunk } from '@reduxjs/toolkit';
// import { fetchGetContacts } from 'components/services/service-api';
import axios from 'axios';

axios.defaults.baseURL = 'https://64e5f5f709e64530d17f5447.mockapi.io';

export const thunkGetContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (endpoint, thunkAPI) => {
    try {
      const response = await axios.get(endpoint);
      console.log(response.data);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const thunkAddContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (data, thunkAPI) => {
    try {
      const response = await axios.post('/contacts', data);
      console.log(response.data);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
export const thunkDeleteContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (id, thunkAPI) => {
    try {
      const response = await axios.post(`/contacts/${id}`);
      console.log(response.data);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
