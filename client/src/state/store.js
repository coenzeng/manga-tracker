import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../components/counter/counterSlice";
import bookDetailsReducer from "../components/bookDetails/bookDetailsSlice";
import bookListRedcuer from '../components/bookList/bookListSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    bookDetails: bookDetailsReducer,
    bookList: bookListRedcuer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
