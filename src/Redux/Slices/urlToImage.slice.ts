import { createSlice } from '@reduxjs/toolkit'

export interface UrlToImageState {
  value: string
}

const initialState: UrlToImageState = {
  value: '',
}

export const urlToImageSlice = createSlice({
  name: 'urlToImage',
  initialState,
  reducers: {
    setUrlToImage: (state, action) => {
      state.value = action.payload
    },
    resetUrlToImage: (state) => {
      state.value = ''
    },
  },
})

export const {
  setUrlToImage,
  resetUrlToImage,
} = urlToImageSlice.actions;

export const urlToImageReducer = urlToImageSlice.reducer;
