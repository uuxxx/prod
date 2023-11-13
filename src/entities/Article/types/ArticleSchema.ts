import { Article } from './Article';

export interface ArticleSchema {
  isLoading: boolean;
  error: null | string;
  data?: Article;
}
