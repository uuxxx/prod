import { createAsyncThunk } from '@reduxjs/toolkit';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { RootState } from '@/app/providers/store';
import { auth } from '@/firebase';
import { validateCreateAccountForm } from '../createAccountFormValidation/validateCreateAccountForm';
import { UserCredentials } from '@/entities/User';
import { extractProfileSchemaObjFromUserCredentials } from '@/shared/lib';
import { USER_LOCALSTORAGE_KEY } from '@/shared/constants/localstorage';

export const createAccontWithEmailAndPassword = createAsyncThunk<
  UserCredentials,
  void,
  { rejectValue: string; state: RootState }
>('user/createAccount', async (_, { getState, rejectWithValue }) => {
  try {
    const { createAccountForm } = getState();
    validateCreateAccountForm(createAccountForm);

    const { password, email } = createAccountForm;
    const { user } = await createUserWithEmailAndPassword(auth, email, password);
    const userCredentials = extractProfileSchemaObjFromUserCredentials(user);
    localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(userCredentials));
    return userCredentials;
  } catch (e) {
    return rejectWithValue((e as Error).message);
  }
});
