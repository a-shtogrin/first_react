import { RootStateType } from 'Store/configureStore'

export const getCartCounter = (state: RootStateType) => state.cartCounterSlice.counter;
