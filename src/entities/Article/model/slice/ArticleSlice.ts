import { createSlice } from '@reduxjs/toolkit';
import { ArticleEror } from '../../types/ArticleError';
import { ArticleSchema } from '../../types/ArticleSchema';
import { fetchArticle } from '../services/fetchArticle';

const initialState: ArticleSchema = {
  error: null,
  isLoading: false,
};

const articleSlice = createSlice({
  name: 'article',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchArticle.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.error = null;
      state.data = payload;
    });
    builder.addCase(fetchArticle.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchArticle.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload || ArticleEror.UNEXPECTED_ERROR;
    });
  },
});

export const { actions: articleActions } = articleSlice;
export const { reducer: articleReducer } = articleSlice;
