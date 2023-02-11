import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchFruits, fetchOneFruit } from './effects';
import { OneFruitType } from './types';

const oneFruit: OneFruitType | {} = {};

const initialState = {
  fruits: [] as OneFruitType[],
  oneFruit,
  name: '',
  id: 0,
  genus: '',
  family: '',
  order: '',
  nutritions: {},
  carbohydrates: 0,
  protein: 0,
  fat: 0,
  calories: 0,
  sugar: 0,
  loading: false,
  error: {},
};

const fruitSlice = createSlice({
  name: 'fruitSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // fruitList
    builder.addCase(fetchFruits.pending, (state) => {
      return { ...state, loading: true };
    });
    builder.addCase(fetchFruits.fulfilled, (state, { payload }: PayloadAction<OneFruitType[]>) => {
      return { ...state, fruits: payload, loading: false };
    });
    builder.addCase(fetchFruits.rejected, (state, { error }) => {
      return { ...state, error, loading: false };
    });

    // oneFruit
    builder.addCase(fetchOneFruit.pending, (state) => {
      return { ...state, loading: true };
    });
    builder.addCase(fetchOneFruit.fulfilled, (state, { payload }) => {
      return { ...state, fruits: payload, loading: false };
    });
    builder.addCase(fetchOneFruit.rejected, (state, { error }) => {
      return { ...state, error, loading: false };
    });
  },
});

export const { name: fruitSliceName, reducer: fruitSliceReducer } = fruitSlice;
