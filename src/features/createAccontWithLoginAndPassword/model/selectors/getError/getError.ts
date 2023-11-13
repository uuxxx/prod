import { RootState } from '@/app/providers/store';

export function getError(state: RootState) {
  return state.createAccountForm?.error || null;
}
