import { createAsyncThunk } from '@reduxjs/toolkit';
import { networkInstance } from 'Helpers/Network';

export const fetchClients = createAsyncThunk('clients/all', async () => {
  const { data } = await networkInstance.get('api/?results=50&nat=gb,us,fr');
  return data;
});

export const fetchOneClient = createAsyncThunk('client/byId', async (value: string) => {
    const { data } = await networkInstance.get(`api/people/${value}`);
    return data;
  });
