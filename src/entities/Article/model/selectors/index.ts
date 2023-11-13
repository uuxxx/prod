import { RootState } from '@/app/providers/store';

export function getArticleData(state: RootState) {
  return state.article?.data;
}

export function getArticleLoadingStatus(state: RootState) {
  return state.article?.isLoading || false;
}

export function getArticleError(state: RootState) {
  return state.article?.error || null;
}
