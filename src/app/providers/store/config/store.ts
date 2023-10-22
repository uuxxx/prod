import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from '@/entities/User';

export function createReduxStore() {
  return configureStore({
    reducer: {
      user: userReducer,
    },
    devTools: !__IS_PROD__,
  });
}
