import { createSlice } from '@reduxjs/toolkit';
import { NormalizedArticle } from '../../types/Article';

export interface ArticlesStateState {
  value: NormalizedArticle[];
}

const initialState: ArticlesStateState = {
  value: [],
}

export const articlesStateSlice = createSlice({
  name: 'articlesState',
  initialState,
  reducers: {
    setArticlesState: (state, action) => {
      state.value = action.payload;
    },
    addArticleToState: (state, action) => {
      if (state.value) {
        state.value = [ action.payload, ...state.value  ];

        return;
      }

      state.value = [ action.payload ];
    },
    filterArticlesState: (state, action) => {
      state.value = state.value.filter((article) => article.title !== action.payload.title);
    },
    resetArticlesState: (state) => {
      state.value = [];
    },
  },
});

export const {
  setArticlesState,
  addArticleToState,
  filterArticlesState,
  resetArticlesState,
} = articlesStateSlice.actions;

export const articlesStateReducer = articlesStateSlice.reducer;
