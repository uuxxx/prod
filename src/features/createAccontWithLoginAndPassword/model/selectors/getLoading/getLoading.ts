import { RootState } from '@/app/providers/store';

export function getLoading(state: RootState) {
  return state.createAccountForm?.isLoading || '';
}
