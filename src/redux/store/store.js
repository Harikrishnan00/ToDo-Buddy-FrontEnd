import { configureStore } from '@reduxjs/toolkit'
import userStateReducer from "../slices/slice"

export const store = configureStore({
  reducer: {
    userStateChanger:userStateReducer
  },
})