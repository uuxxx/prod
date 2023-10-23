import { createAsyncThunk } from '@reduxjs/toolkit';
import { signInWithEmailAndPassword, AuthError } from 'firebase/auth';
import { auth } from '@/firebase';
import { UserCredentials } from '@/entities/User';
import { userActions } from '@/entities/User';
import { USER_LOCALSTORAGE_KEY } from '@/shared/constants/localstorage';

interface AuthByUsernameAndPasswordProps {
  email: string;
  password: string;
}

export const authByUsernameAndPassword = createAsyncThunk<
  UserCredentials,
  AuthByUsernameAndPasswordProps,
  { rejectValue: string }
>('user/fetchByIdStatus', async ({ password, email }, { rejectWithValue, dispatch }) => {
  try {
    const { user } = await signInWithEmailAndPassword(auth, email, password);

    const userCredentials = {
      email: user.email,
      displayName: user.displayName,
      emailVerified: user.emailVerified,
      createdAt: user.metadata.creationTime,
      lastSignInTime: user.metadata.lastSignInTime,
      photoURL: user.photoURL,
    };

    localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(userCredentials));
    dispatch(userActions.setUserData(userCredentials));

    return userCredentials;
  } catch (e) {
    return rejectWithValue((e as AuthError).code);
  }
});
