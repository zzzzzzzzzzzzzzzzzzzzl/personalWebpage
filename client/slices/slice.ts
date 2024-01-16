import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store'

export const slice = createSlice({
  name: 'slice',
  initialState: {
    display: 'home',
  },

  reducers: {
    toggleDisplay: (state, action) => {
      console.log('action terigger')
      state.display = action.payload
      return state
    },
  },
})

export const CanvasToUI = (state: RootState) => state.slice

export const { toggleDisplay } = slice.actions
export default slice.reducer
