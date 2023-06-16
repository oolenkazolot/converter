import { configureStore } from '@reduxjs/toolkit';
import converterReducer from './features/converter-slice';
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { Api } from './services/api';

export const store = configureStore({
  reducer: {
    converterReducer,
    [Api.reducerPath]: Api.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({}).concat(Api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
