import { configureStore } from "@reduxjs/toolkit";
import postReducer from "../features/posts";
import editPostReducer from "../features/editPost";
import addPostReducer from "../features/addPost";

export const store = configureStore({
  reducer: { posts: postReducer, editPosts: editPostReducer, addPost: addPostReducer },
});
