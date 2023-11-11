import { createAsyncThunk } from '@reduxjs/toolkit';
import { getDoc } from 'firebase/firestore';
import { getBlob } from 'firebase/storage';
import { getAvatarsRef, getUserRef } from '@/firebase/refs';
import { RootState } from '@/app/providers/store';
import { Profile } from '../../types/Profile';
import { ProfileError, ProfileErrors } from '../../types/ProfileErrors';
import { Country } from '@/shared/constants/country';
import { Currency } from '@/shared/constants/currency';

function downloadAvatar(uid: string) {
  return new Promise<Blob | string>((resolve, reject) => {
    setTimeout(() => reject('waiting time exceeded'), 5_000);
    getBlob(getAvatarsRef(uid))
        .then(resolve)
        .catch(() => resolve('no avatar'));
  });
}

export const fetchProfile = createAsyncThunk<
  Profile,
  string | undefined,
  { rejectValue: string; state: RootState }
>('profile/fetchProfile', async (uid, { rejectWithValue, getState }) => {
  try {
    if (!uid) {
      uid = getState().user?.uid;
      if (!uid) {
        throw new Error(ProfileErrors.UNABLE_TO_RETRIEVE_PROFILE_DATA);
      }
    }
    const docSnap = await getDoc(getUserRef(uid));

    const avatarResponse = await downloadAvatar(uid);
    const userProfileData = docSnap.exists() ?
      docSnap.data() :
      ({
        name: '',
        surname: '',
        age: '',
        city: '',
        country: Country.Russia,
        currency: Currency.RUB,
      } as Profile);
    if (typeof avatarResponse !== 'string') {
      userProfileData.photoURL = URL.createObjectURL(avatarResponse);
    }
    return userProfileData;
  } catch (e) {
    return rejectWithValue((e as ProfileError).message || ProfileErrors.UNEXPECTED_ERROR);
  }
});
