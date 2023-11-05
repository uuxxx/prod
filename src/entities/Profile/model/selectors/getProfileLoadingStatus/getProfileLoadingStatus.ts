import { RootState } from '@/app/providers/store';

export function getProfileLoadingStatus(state: RootState) {
  return state.profile?.isLoading || false;
}
