import { createSlice } from '@reduxjs/toolkit';
import { NormalizedArticle } from '../../types/Article';

export interface FilteredArticlesState {
  value: NormalizedArticle[];
}

const initialState: FilteredArticlesState = {
  value: [],
}

export const filteredArticlesSlice = createSlice({
  name: 'filteredArticles',
  initialState,
  reducers: {
    setFilteredArticles: (state, action) => {
      state.value = [ action.payload, ...state.value  ];
    },
    filterFilteredArticles: (state, action) => {
      state.value = state.value.filter((article) => article !== action.payload);
    },
    resetFilteredArticles: (state) => {
      state.value = [];
    },
  },
});

export const {
  setFilteredArticles,
  filterFilteredArticles,
  resetFilteredArticles,
} = filteredArticlesSlice.actions;

export const filteredArticlesReducer = filteredArticlesSlice.reducer;
