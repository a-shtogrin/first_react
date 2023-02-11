import { createAsyncThunk } from '@reduxjs/toolkit';
import { networkInstance } from 'Helpers/Network';

export const fetchFruits = createAsyncThunk('fruit/all', async () => {
  const { data } = await networkInstance.get('/api/fruit/all');
  return data;
});

export const fetchOneFruit = createAsyncThunk('fruit/byId', async (id: number) => {
    const { data } = await networkInstance.get(`/api/fruit/${id}`);
    return data;
  });
