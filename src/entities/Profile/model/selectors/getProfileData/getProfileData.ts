import { RootState } from '@/app/providers/store';
import { createSelector } from '@reduxjs/toolkit';

function selectProfileData(state: RootState) {
  return state.profile;
}

export const getProfileData = createSelector([selectProfileData], (state) => {
  return (
    state || {
      isLoading: false,
      error: null,
      readonly: true,
      formData: {},
      initialData: {},
    }
  );
});
