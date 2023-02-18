import { configureStore } from '@reduxjs/toolkit';
import { cartCounterSliceName, cartCounterSliceReducer } from './CartCounter/slice';
import { clientSliceName, clientSliceReducer } from './Clients/slice';
import { userSliceName, userSliceReducer } from './User/slice';

export const store = configureStore({
  reducer: {
    [userSliceName]: userSliceReducer,
    [cartCounterSliceName]: cartCounterSliceReducer,
    [clientSliceName]: clientSliceReducer,
  },
  devTools: true,
});

export type RootStateType = ReturnType<typeof store.getState>;
