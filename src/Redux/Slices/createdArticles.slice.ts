import { createSlice } from '@reduxjs/toolkit';
import { NormalizedArticle } from '../../types/Article';

export interface CreatedArticlesState {
  value: NormalizedArticle[];
}

const initialState: CreatedArticlesState = {
  value: [],
}

export const createdArticlesSlice = createSlice({
  name: 'createdArticles',
  initialState,
  reducers: {
    setCreatedArticles: (state, action) => {
      state.value = [ action.payload, ...state.value  ];
    },
    filterCreatedArticles: (state, action) => {
      state.value = state.value.filter((article) => article.title !== action.payload.title);
    },
    resetCreatedArticles: (state) => {
      state.value = [];
    },
  },
});

export const {
  setCreatedArticles,
  filterCreatedArticles,
  resetCreatedArticles,
} = createdArticlesSlice.actions;

export const createdArticlesReducer = createdArticlesSlice.reducer;
