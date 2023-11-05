import { createAsyncThunk } from '@reduxjs/toolkit';
import { getDoc } from 'firebase/firestore';
import { getBlob } from 'firebase/storage';
import { getAvatarsRef, getUserRef } from '@/firebase/refs';
import { RootState } from '@/app/providers/store';
import { Profile } from '../../types/Profile';
import { ProfileError, ProfileErrors } from '../../types/ProfileErrors';

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
    if (!docSnap.exists()) {
      throw new Error(ProfileErrors.USER_NOT_FOUND);
    }
    const avatarResponse = await downloadAvatar(uid);
    const userProfileData = docSnap.data() as Profile;
    if (typeof avatarResponse !== 'string') {
      userProfileData.photoURL = URL.createObjectURL(avatarResponse);
    }
    return userProfileData;
  } catch (e) {
    return rejectWithValue((e as ProfileError).message || ProfileErrors.UNEXPECTED_ERROR);
  }
});
