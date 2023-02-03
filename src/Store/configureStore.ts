import { configureStore } from '@reduxjs/toolkit';
import { cartCounterSliceName, cartCounterSliceReducer } from './CartCounter/slice';
import { userSliceName, userSliceReducer } from './User/slice';

export const store = configureStore({
  reducer: {
    [userSliceName]: userSliceReducer,
    [cartCounterSliceName]: cartCounterSliceReducer,
  },
  devTools: true,
});

export type RootStateType = ReturnType<typeof store.getState>;
