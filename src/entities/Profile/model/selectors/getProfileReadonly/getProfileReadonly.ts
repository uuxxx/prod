import { RootState } from '@/app/providers/store';

export function getProfileReadonly(state: RootState) {
  return state.profile?.readonly || false;
}
