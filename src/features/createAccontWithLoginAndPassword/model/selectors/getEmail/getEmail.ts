import { RootState } from '@/app/providers/store';

export function getEmail(state: RootState) {
  return state.createAccountForm?.email || '';
}
