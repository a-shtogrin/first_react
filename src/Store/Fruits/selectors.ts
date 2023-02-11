import { RootStateType } from 'Store/configureStore';

export const getFruitData = (state: RootStateType) => state.fruitSlice.fruits;

export const getFruitLoading = (state: RootStateType) => state.fruitSlice.loading;

export const getOneFruitData = (state: RootStateType) => state.fruitSlice.oneFruit;
