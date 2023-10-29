import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { USER_LOCALSTORAGE_KEY } from '@/shared/constants/localstorage';
import { UserSchema } from '../types/userSchema';

const initialState = null as UserSchema;

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserData(_, { payload }: PayloadAction<UserSchema>) {
      return payload;
    },
    initAuthData() {
      return JSON.parse(localStorage.getItem(USER_LOCALSTORAGE_KEY)!);
    },
    signout() {
      localStorage.removeItem(USER_LOCALSTORAGE_KEY);
      return null;
    },
  },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
