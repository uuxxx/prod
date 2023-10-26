import { AnyAction, combineReducers, CreateReducerManager } from '@reduxjs/toolkit';
import { ReducerMap, ReducerMapKey, StoreSchema } from './types';

export const createReducerManager: CreateReducerManager<StoreSchema> = (
    initialReducers: ReducerMap,
) => {
  const reducers = { ...initialReducers };

  let combinedReducer = combineReducers(reducers);

  let keysToRemove: Array<ReducerMapKey> = [];

  return {
    getReducerMap: () => reducers,

    reduce: (state: StoreSchema, action: AnyAction) => {
      if (keysToRemove.length > 0) {
        state = { ...state };
        for (const key of keysToRemove) {
          delete state[key];
        }
        keysToRemove = [];
      }

      return combinedReducer(state, action);
    },

    add: <K extends ReducerMapKey>(key: K, reducer: ReducerMap[K]) => {
      if (!key || reducers[key]) {
        return;
      }

      reducers[key] = reducer;

      combinedReducer = combineReducers(reducers);
    },

    remove: (key) => {
      if (!key || !reducers[key]) {
        return;
      }

      delete reducers[key];

      keysToRemove.push(key);

      combinedReducer = combineReducers(reducers);
    },
  };
};
