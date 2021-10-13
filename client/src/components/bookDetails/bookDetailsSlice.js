import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: null,
};

export const bookDetailsSlice = createSlice({
  name: "bookDetails",
  initialState,
  reducers: {
    changeBookDetails: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { changeBookDetails } = bookDetailsSlice.actions;
export default bookDetailsSlice.reducer;
