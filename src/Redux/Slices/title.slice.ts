import { createSlice } from '@reduxjs/toolkit'

export interface TitleState {
  value: string
}

const initialState: TitleState = {
  value: '',
}

export const titleSlice = createSlice({
  name: 'title',
  initialState,
  reducers: {
    setTitle: (state, action) => {
      state.value = action.payload
    },
    resetTitle: (state) => {
      state.value = ''
    },
  },
})

export const {
  setTitle,
  resetTitle,
} = titleSlice.actions;

export const titleReducer = titleSlice.reducer;
