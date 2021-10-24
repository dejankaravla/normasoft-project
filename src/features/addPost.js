import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  newPost: "",
};

const addPost = createSlice({
  name: "addPost",
  initialState,
  reducers: {
    setNewPost: (state, action) => {
      state.newPost = action.payload;
    },
  },
});

export const { getNewId } = addPost.actions;

export default addPost.reducer;
