import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from '@/entities/User';
import { loginReducer } from '@/features/authByLoginAndPassword';

const store = configureStore({
  reducer: {
    user: userReducer,
    loginForm: loginReducer,
  },
  devTools: !__IS_PROD__,
});

export function createReduxStore() {
  return store;
}

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
