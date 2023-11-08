import { createSlice } from '@reduxjs/toolkit'

export interface QueryState {
  value: string
}

const initialState: QueryState = {
  value: '',
}

export const querySlice = createSlice({
  name: 'query',
  initialState,
  reducers: {
    setQuery: (state, action) => {
      state.value = action.payload
    },
    resetQuery: (state) => {
      state.value = ''
    },
  },
})

export const {
  setQuery,
  resetQuery,
} = querySlice.actions;

export const queryReducer = querySlice.reducer;
