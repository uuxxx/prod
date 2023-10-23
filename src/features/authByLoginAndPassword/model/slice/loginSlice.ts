import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { authByUsernameAndPassword } from '../services/authByUsername';
import { LoginSchema } from '../types/loginSchema';

const initialState: LoginSchema = {
  username: '',
  password: '',
  isLoading: false,
};

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setUsername(state, { payload }: PayloadAction<string>) {
      state.username = payload;
    },
    setPassword(state, { payload }: PayloadAction<string>) {
      state.password = payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(authByUsernameAndPassword.fulfilled, (state) => {
      delete state.error;
      state.isLoading = false;
      state.username = '';
      state.password = '';
    });
    builder.addCase(authByUsernameAndPassword.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(authByUsernameAndPassword.rejected, (state, { payload }) => {
      state.error = payload || 'Что-то пошло не так';
      state.isLoading = false;
    });
  },
});

export const { actions: loginActions } = loginSlice;
export const { reducer: loginReducer } = loginSlice;
