import { configureStore, PreloadedState } from '@reduxjs/toolkit';
import { userReducer } from '@/entities/User';
import { ReducerMap, StoreSchema } from './types';
import { createReducerManager } from './reducerManager';

const reducerMap: ReducerMap = {
  user: userReducer,
};

const reducerManager = createReducerManager(reducerMap);

export function createReduxStore(preloadedState?: PreloadedState<RootState>) {
  const store = configureStore({
    // @ts-ignore
    reducer: reducerManager.reduce,
    devTools: !__IS_PROD__,
    preloadedState,
  });

  store.reducerManager = reducerManager;

  return store;
}

export type RootState = StoreSchema;
export type AppStore = ReturnType<typeof createReduxStore>;
export type AppDispatch = AppStore['dispatch'];
