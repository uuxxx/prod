import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchProfile } from '../services/fetchProfile/fetchProfile';
import { ProfileSchema } from '../types/ProfileSchema';
import { Profile } from '../types/Profile';
import { saveProfile } from '../services/saveProfile/saveProfile';
import { ProfileErrors } from '../types/ProfileErrors';

const initialState: ProfileSchema = {
  error: null,
  isLoading: false,
  readonly: true,
  formData: {},
  initialData: {},
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    toggleReadonly(state) {
      state.readonly = !state.readonly;
    },
    setFormData(state, { payload }: PayloadAction<Profile>) {
      state.formData = {
        ...state.formData,
        ...payload,
      };
    },
    resetFormDataToInitial(state) {
      state.formData = state.initialData;
    },
    cancelError(state) {
      state.error = null;
    },
    resetAll() {
      return initialState;
    },
  },
  extraReducers(builder) {
    // fetchProfile
    builder.addCase(fetchProfile.fulfilled, (state, { payload }) => {
      state.initialData = payload;
      state.formData = payload;
      state.isLoading = false;
      state.error = null;
    });
    builder.addCase(fetchProfile.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchProfile.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload as ProfileErrors;
    });

    // saveProfile
    builder.addCase(saveProfile.fulfilled, (state) => {
      state.isLoading = false;
      state.error = null;
    });
    builder.addCase(saveProfile.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(saveProfile.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload as ProfileErrors;
    });
  },
});

export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;
