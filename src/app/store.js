import { configureStore } from "@reduxjs/toolkit";
import postReducer from "../features/posts";
import editPostReducer from "../features/editPost";

export const store = configureStore({
  reducer: { posts: postReducer, editPosts: editPostReducer },
});
