import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  counter: 0,
};

const cartCounterSlice = createSlice({
  name: 'cartCounterSlice',
  initialState,
  reducers: {
    setCartCounter(
      state,
      { payload: { counter } }: PayloadAction<{ counter: number }>,
    ) {
      return { ...state, playload: counter };
    },

    clearCartCounter() {
      return { ...initialState };
    },
  },
});

export const {
  name: cartCounterSliceName,
  reducer: cartCounterSliceReducer,
  actions: CartCounterSliceActions,
} = cartCounterSlice;
