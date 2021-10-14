import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
      authors: []
  },
};

export const AuthorListSlice = createSlice({
  name: "authorList",
  initialState,
  reducers: {
    setAuthorList: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setAuthorList } = AuthorListSlice.actions;
export default AuthorListSlice.reducer;