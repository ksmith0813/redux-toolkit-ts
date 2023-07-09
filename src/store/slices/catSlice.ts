import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from 'store/store'

export interface Cat {
  name: string
}

const initialState: Array<Cat> = []

export const catSlice = createSlice({
  name: 'cat',
  initialState,
  reducers: {
    addCat: (state, action: PayloadAction<Cat>) => {
      state.push(action.payload)
    },
  },
})

export const { addCat } = catSlice.actions

export const catSelector = (state: RootState) => state.catReducer

export default catSlice.reducer