import { createSlice } from '@reduxjs/toolkit';
import { USER_LOCALSTORAGE_KEY } from '@/shared/constants/localstorage';
import { UserSchema } from '../types/userSchema';
import { authByUsernameAndPassword }
  from '@/features/authByLoginAndPassword/model/services/authByUsername/authByUsername';
import { createAccontWithEmailAndPassword }
// eslint-disable-next-line
from '@/features/createAccontWithLoginAndPassword/model/services/createAccountWithEmailAndPassword/createAccountWithEmailAndPassword';

const initialState = null as UserSchema;

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    initAuthData() {
      return JSON.parse(localStorage.getItem(USER_LOCALSTORAGE_KEY)!);
    },
    signout() {
      localStorage.removeItem(USER_LOCALSTORAGE_KEY);
      return null;
    },
  },
  extraReducers(builder) {
    builder.addCase(authByUsernameAndPassword.fulfilled, (_, { payload }) => {
      return payload;
    });
    builder.addCase(createAccontWithEmailAndPassword.fulfilled, (_, { payload }) => {
      return payload;
    });
  },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
