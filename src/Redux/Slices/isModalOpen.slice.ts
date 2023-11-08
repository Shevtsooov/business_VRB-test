import { createSlice } from '@reduxjs/toolkit'

export interface IsModalOpenState {
  value: boolean
}

const initialState: IsModalOpenState = {
  value: false,
}

export const isModalOpenSlice = createSlice({
  name: 'isModalOpen',
  initialState,
  reducers: {
    showModalWindow: (state) => {
      state.value = true
    },
    hideModalWindow: (state) => {
      state.value = false
    },
  },
})

export const {
  showModalWindow,
  hideModalWindow,
} = isModalOpenSlice.actions;

export const isModalOpenReducer = isModalOpenSlice.reducer;
