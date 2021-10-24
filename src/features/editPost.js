import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  newId: "",
  newText: "",
  newImageUrl: "",
};

const editPosts = createSlice({
  name: "editPosts",
  initialState,
  reducers: {
    getNewId: (state, action) => {
      state.newId = action.payload;
    },
    getNewText: (state, action) => {
      state.newText = action.payload;
    },
    getNewImageUrl: (state, action) => {
      state.newImageUrl = action.payload;
    },
  },
});

export const { getNewId, getNewText, getNewImageUrl } = editPosts.actions;

export default editPosts.reducer;
