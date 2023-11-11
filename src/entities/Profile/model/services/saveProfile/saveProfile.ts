import { createAsyncThunk } from '@reduxjs/toolkit';
import { setDoc } from 'firebase/firestore';
import { uploadBytes } from 'firebase/storage';
import { getAvatarsRef, getUserRef } from '@/firebase/refs';
import { RootState } from '@/app/providers/store';
import { fetchProfile } from '../fetchProfile/fetchProfile';
import { ProfileError, ProfileErrors } from '../../types/ProfileErrors';
import { validateProfile } from '../profileValidation/profileValidation';

export async function uploadAvatar(uid: string, blobUrl?: string) {
  if (!blobUrl) return;
  const r = await fetch(blobUrl);
  const blob = await r.blob();
  return await uploadBytes(getAvatarsRef(uid), blob);
}

export const saveProfile = createAsyncThunk<
  void,
  string | undefined,
  { rejectValue: ProfileErrors; state: RootState }
>('profile/saveProfile', async (uid, { rejectWithValue, getState, dispatch }) => {
  try {
    if (!uid) {
      uid = getState()?.user?.uid;
      if (!uid) {
        throw new Error(ProfileErrors.UNABLE_TO_RETRIEVE_PROFILE_DATA);
      }
    }

    const profileFormData = getState().profile?.formData;
    validateProfile(profileFormData);

    const blobUrl = getState()?.profile?.formData.photoURL || undefined;

    await Promise.all([
      setDoc(getUserRef(uid), profileFormData, { merge: true }),
      uploadAvatar(uid, blobUrl),
    ]);

    dispatch(fetchProfile(uid));
  } catch (e) {
    return rejectWithValue((e as ProfileError).message || ProfileErrors.UNEXPECTED_ERROR);
  }
});
