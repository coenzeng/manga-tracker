import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    name: null,
    genre: null,
    authorId: null,
  },
};

export const addBookSlice = createSlice({
  name: "addBook",
  initialState,
  reducers: {
    setAddBook: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setAddBook } = addBookSlice.actions;
export default addBookSlice.reducer;
