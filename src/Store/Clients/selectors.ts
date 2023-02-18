import { RootStateType } from 'Store/configureStore';

export const getClientData = (state: RootStateType) => state.clientSlice.clients.results;

export const getClientLoading = (state: RootStateType) => state.clientSlice.loading;

export const getOneClientData = (state: RootStateType) => state.clientSlice.oneClient;
