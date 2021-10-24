import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
  selectedPost: "",
  modalOpen: false,
  tagsData: [],
  tagName: "",
  comment: "",
  userComments: "",
};

const posts = createSlice({
  name: "posts",
  initialState,
  reducers: {
    savePosts: (state, action) => {
      state.posts = action.payload;
    },
    selectPost: (state, action) => {
      state.selectedPost = action.payload;
    },
    modalHandler: (state, action) => {
      state.modalOpen = action.payload;
    },
    filteredTags: (state, action) => {
      state.tagsData = action.payload;
    },
    getTagName: (state, action) => {
      state.tagName = action.payload;
    },
    setComment: (state, action) => {
      state.comment = action.payload;
    },
    getUserComments: (state, action) => {
      state.userComments = action.payload;
    },
  },
});

export const { savePosts, selectPost, modalHandler, filteredTags, getTagName, setComment, getUserComments } =
  posts.actions;

export default posts.reducer;
