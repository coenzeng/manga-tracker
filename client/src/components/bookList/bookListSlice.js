import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
      books: []
  },
};

export const BookListSlice = createSlice({
  name: "bookList",
  initialState,
  reducers: {
    setBookList: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setBookList } = BookListSlice.actions;
export default BookListSlice.reducer;
