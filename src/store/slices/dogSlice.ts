import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from 'store/store'

export interface Dog {
  name: string
}

const initialState: Array<Dog> = []

export const dogSlice = createSlice({
  name: 'dog',
  initialState,
  reducers: {
    addDog: (state, action: PayloadAction<Dog>) => {
      state.push(action.payload)
    },
  },
})

export const { addDog } = dogSlice.actions

export const dogSelector = (state: RootState) => state.dogReducer

export default dogSlice.reducer
