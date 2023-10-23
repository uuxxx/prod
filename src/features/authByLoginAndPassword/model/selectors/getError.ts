import { RootState } from '@/app/providers/store';

export function getError(state: RootState) {
  return state.loginForm.error;
}
