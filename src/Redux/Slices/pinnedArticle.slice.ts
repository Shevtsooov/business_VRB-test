import { createSlice } from '@reduxjs/toolkit'
import { NormalizedArticle } from '../../types/Article'

export interface PinnedArticleState {
  value: NormalizedArticle | null
}

const initialState: PinnedArticleState = {
  value: null,
}

export const pinnedArticleSlice = createSlice({
  name: 'pinnedArticle',
  initialState,
  reducers: {
    setPinnedArticle: (state, action) => {
      state.value = action.payload
    },
    resetPinnedArticle: (state) => {
      state.value = null
    },
  },
})

export const {
  setPinnedArticle,
  resetPinnedArticle,
} = pinnedArticleSlice.actions;

export const pinnedArticleReducer = pinnedArticleSlice.reducer;
