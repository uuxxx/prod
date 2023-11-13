import { RootState } from '@/app/providers/store';

export function getReapeatedPassword(state: RootState) {
  return state.createAccountForm?.reapeatedPassword || '';
}
