import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../components/counter/counterSlice";
import bookDetailsReducer from "../components/bookDetails/bookDetailsSlice";
import bookListRedcuer from '../components/bookList/bookListSlice'
import authorListReducer from '../components/authorList/authorListSlice'
import addBookReducer from '../components/addBook/addBookSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
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
