import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { createAccountFormSchema } from '../types/createAccountFormSchema';
import { createAccontWithEmailAndPassword } from '../services/createAccountWithEmailAndPassword/createAccountWithEmailAndPassword';

const initialState: createAccountFormSchema = {
  email: '',
  password: '',
  reapeatedPassword: '',
  isLoading: false,
  error: null,
};

const createAccountFormSlice = createSlice({
  name: 'createAccountForm',
  initialState,
  reducers: {
    setState(state, { payload }: PayloadAction<Partial<createAccountFormSchema>>) {
      return Object.assign(state, payload);
    },
  },
  extraReducers(builder) {
    builder.addCase(createAccontWithEmailAndPassword.fulfilled, () => {
      return initialState;
    });

    builder.addCase(createAccontWithEmailAndPassword.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });

    builder.addCase(createAccontWithEmailAndPassword.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload!;
    });
  },
});

export const { reducer: createAccountFormReducer } = createAccountFormSlice;
export const { actions: createAccountFormActions } = createAccountFormSlice;
