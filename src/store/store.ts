import { configureStore } from '@reduxjs/toolkit';
import catReducer from './slices/catSlice';
import dogReducer from './slices/dogSlice';

export const store = configureStore({
  reducer: {
    catReducer,
    dogReducer
  },
});

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;