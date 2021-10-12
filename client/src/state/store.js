import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../components/counter/counterSlice'
import bookDetailsReducer from '../components/bookDetails/bookDetailsSlice'

export const store = configureStore({
  reducer: {
      counter: counterReducer,
      bookDetails: bookDetailsReducer,
  },
  middleware: getDefaultMiddleware =>
  getDefaultMiddleware({
    serializableCheck: false,
  }),
})