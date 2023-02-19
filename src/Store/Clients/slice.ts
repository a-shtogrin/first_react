import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchClients, fetchOneClient } from './effects';
import { OneClientType } from './types';

const oneClient: OneClientType | {} = {};

const initialState = {
  clients: {
    results: [],
    info: {},
  },
  oneClient: {
    name: {
      title: '',
      first: '',
      last: '',
    },
    location: {
      street: {
        number: 0,
        name: '',
      },
      city: '',
      state: '',
      country: '',
      postcode: '',
      coordinates: {
        latitude: '',
        longitude: '',
      },
      timezone: {
        offset: '',
        description: '',
      },
    },
    email: '',
    registered: {
      date: '',
      age: 0,
    },
    phone: '',
    id: {
      name: '',
      value: '',
    },
    picture: {
      large: '',
      medium: '',
      thumbnail: '',
    },
    nat: '',
    gender: '',
    dob: {
      date: '',
      age: 0,
    },
    login: {
      uuid: '',
      username: '',
      password: '',
      salt: '',
      md5: '',
      sha1: '',
      sha256: '',
    },
    cell: '',
  },
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
    builder.addCase(fetchClients.fulfilled, (state, { payload }) => {
      return { ...state, clients: payload, loading: false };
    });
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
