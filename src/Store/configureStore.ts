import { configureStore } from '@reduxjs/toolkit';
import { cartCounterSliceName, cartCounterSliceReducer } from './CartCounter/slice';
import { fruitSliceName, fruitSliceReducer } from './Fruits/slice';
import { userSliceName, userSliceReducer } from './User/slice';

export const store = configureStore({
  reducer: {
    [userSliceName]: userSliceReducer,
    [cartCounterSliceName]: cartCounterSliceReducer,
    [fruitSliceName]: fruitSliceReducer,
  },
  devTools: true,
});

export type RootStateType = ReturnType<typeof store.getState>;
