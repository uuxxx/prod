import { RootState } from '@/app/providers/store';

export function getLoadingStatus(state: RootState) {
  return state?.loginForm?.isLoading || false;
}
