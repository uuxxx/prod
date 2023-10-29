import { createSlice } from '@reduxjs/toolkit';
import { ProfileSchema } from '../types/ProfileSchema';

const initialState = {
  error: null,
  isLoading: false,
  readonly: true,
} as ProfileSchema;

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {},
});

export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;
