import { RootState } from '@/app/providers/store';

export function getPassword(state: RootState) {
  return state.loginForm.password;
}
