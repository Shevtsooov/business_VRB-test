import { createSlice } from '@reduxjs/toolkit'

export interface DescriptionState {
  value: string
}

const initialState: DescriptionState = {
  value: '',
}

export const descriptionSlice = createSlice({
  name: 'description',
  initialState,
  reducers: {
    setDescription: (state, action) => {
      state.value = action.payload
    },
    resetDescription: (state) => {
      state.value = ''
    },
  },
})

export const {
  setDescription,
  resetDescription,
} = descriptionSlice.actions;

export const descriptionReducer = descriptionSlice.reducer;
