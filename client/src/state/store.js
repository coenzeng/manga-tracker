import { configureStore } from "@reduxjs/toolkit";
import bookDetailsReducer from "../components/bookDetails/bookDetailsSlice";
import bookListRedcuer from '../components/bookList/bookListSlice'
import authorListReducer from '../components/authorList/authorListSlice'
import addBookReducer from '../components/addBook/addBookSlice'

export const store = configureStore({
  reducer: {
    bookDetails: bookDetailsReducer,
    bookList: bookListRedcuer,
    authorList: authorListReducer,
    addBook: addBookReducer,

  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
