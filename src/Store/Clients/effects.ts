import { createAsyncThunk } from '@reduxjs/toolkit';
import { networkInstance } from 'Helpers/Network';

export const fetchClients = createAsyncThunk('clients/all', async () => {
  const { data } = await networkInstance.get('api/?results=50&seed=foobar&nat=us');
  return data;
});

export const fetchOneClient = createAsyncThunk('clients/byId', async (value: string) => {
  const { data } = await networkInstance.get(`api/?seed=foobar&id[value]=${value}`);
  return data;
});
