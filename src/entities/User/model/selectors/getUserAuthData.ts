import { RootState } from '@/app/providers/store';

export function getUserAuthData(state: RootState) {
  return state.user;
}
