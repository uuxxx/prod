import { RootState } from '@/app/providers/store';

export function getProfileError(state: RootState) {
  return state.profile?.error || null;
}
