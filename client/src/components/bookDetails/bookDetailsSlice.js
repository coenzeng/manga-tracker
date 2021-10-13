import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: null,
};

export const bookDetailsSlice = createSlice({
  name: "bookDetails",
  initialState,
  reducers: {
    setBookDetails: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setBookDetails } = bookDetailsSlice.actions;
export default bookDetailsSlice.reducer;
