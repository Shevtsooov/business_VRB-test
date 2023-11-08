import { createSlice } from '@reduxjs/toolkit'

export interface AuthorState {
  value: string
}

const initialState: AuthorState = {
  value: '',
}

export const authorSlice = createSlice({
  name: 'author',
  initialState,
  reducers: {
    setAuthor: (state, action) => {
      state.value = action.payload
    },
    resetAuthor: (state) => {
      state.value = ''
    },
  },
})

export const {
  setAuthor,
  resetAuthor,
} = authorSlice.actions;

export const authorReducer = authorSlice.reducer;
