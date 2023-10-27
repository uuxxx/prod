import { RootState } from '@/app/providers/store';

export function getLogin(state: RootState) {
  return state?.loginForm?.username || '';
}
