import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchClients, fetchOneClient } from './effects';
import { OneClientType } from './types';

const oneClient: OneClientType | {} = {};

const initialState = {
  clients: {
    results: [],
    info: {},
  },
  oneClient: {},
  loading: false,
  error: {},
};

const clientSlice = createSlice({
  name: 'clientSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // clientList
    builder.addCase(fetchClients.pending, (state) => {
      return { ...state, loading: true };
    });
    builder.addCase(
      fetchClients.fulfilled,
      (state, { payload }) => {
        return { ...state, clients: payload, loading: false };
      },
    );
    builder.addCase(fetchClients.rejected, (state, { error }) => {
      return { ...state, error, loading: false };
    });

    // oneClient
    builder.addCase(fetchOneClient.pending, (state) => {
      return { ...state, loading: true };
    });
    builder.addCase(fetchOneClient.fulfilled, (state, { payload }) => {
      return { ...state, oneClient: payload, loading: false };
    });
    builder.addCase(fetchOneClient.rejected, (state, { error }) => {
      return { ...state, error, loading: false };
    });
  },
});

export const { name: clientSliceName, reducer: clientSliceReducer } = clientSlice;

// name: {
//   title: '',
//   first: '',
//   last: '',
// },
// location: {
//   street: {
//     number: 0,
//     name: '',
//   },
//   city: '',
//   state: '',
//   country: '',
//   postcode: '',
// },
// email: '',
// registered: {
//   date: '',
//   age: '',
// },
// phone: '',
// id: {
//   name: '',
//   value: '',
// },
// picture: {
//   large: '',
//   medium: '',
//   thumbnail: '',
// },
