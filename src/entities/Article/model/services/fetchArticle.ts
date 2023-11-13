import { createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '@/app/providers/store';
import { Article } from '../../types/Article';
import { getDoc } from 'firebase/firestore';
import { getArticlesRef } from '@/firebase/refs';
import { ArticleEror } from '../../types/ArticleError';

export const fetchArticle = createAsyncThunk<
  Article,
  string,
  { rejectValue: string; state: RootState }
>('article/fetchArticle', async (id, { rejectWithValue }) => {
  try {
    const articlesRef = getArticlesRef(id);
    const articlesSnap = await getDoc(articlesRef);

    if (!articlesSnap.exists()) {
      throw new Error(ArticleEror.ARTICLE_NOT_FOUND);
    }

    return articlesSnap.data() as Article;
  } catch (e) {
    return rejectWithValue((e as Error).message);
  }
});
