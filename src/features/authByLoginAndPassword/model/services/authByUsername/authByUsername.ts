import { createAsyncThunk } from '@reduxjs/toolkit';
import { signInWithEmailAndPassword, AuthError } from 'firebase/auth';
import { auth } from '@/firebase';
import { UserCredentials } from '@/entities/User';
import { USER_LOCALSTORAGE_KEY } from '@/shared/constants/localstorage';
import { extractProfileSchemaObjFromUserCredentials } from '@/shared/lib';

interface AuthByUsernameAndPasswordProps {
  email: string;
  password: string;
}

export const authByUsernameAndPassword = createAsyncThunk<
  UserCredentials,
  AuthByUsernameAndPasswordProps,
  { rejectValue: string }
>('user/fetchByIdStatus', async ({ password, email }, { rejectWithValue }) => {
  try {
    const { user } = await signInWithEmailAndPassword(auth, email, password);

    const userCredentials = extractProfileSchemaObjFromUserCredentials(user);

    localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(userCredentials));

    return userCredentials;
  } catch (e) {
    return rejectWithValue((e as AuthError).code);
  }
});
