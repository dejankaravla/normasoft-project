import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  newId: "",
  newText: "",
  newImageUrl: "",
  newTag1: "",
  newTag2: "",
  newTag3: "",
  newOwnerId: "",
  newOwnerTitle: "",
  newOwnerFirstName: "",
  newOwnerLastName: "",
  newOwnerPicture: "",
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
    getNewTag1: (state, action) => {
      state.newTag1 = action.payload;
    },
    getNewTag2: (state, action) => {
      state.newTag2 = action.payload;
    },
    getNewTag3: (state, action) => {
      state.newTag3 = action.payload;
    },
    getnewOwnerId: (state, action) => {
      state.newOwnerId = action.payload;
    },
    getnewOwnerTitle: (state, action) => {
      state.newOwnerTitle = action.payload;
    },
    getnewOwnerFirstName: (state, action) => {
      state.newOwnerFirstName = action.payload;
    },
    getnewOwnerLastName: (state, action) => {
      state.newOwnerLastName = action.payload;
    },
    getnewOwnerPicture: (state, action) => {
      state.newOwnerPicture = action.payload;
    },
  },
});

export const {
  getNewId,
  getNewText,
  getNewImageUrl,
  getNewTag1,
  getNewTag2,
  getNewTag3,
  getnewOwnerId,
  getnewOwnerTitle,
  getnewOwnerFirstName,
  getnewOwnerLastName,
  getnewOwnerPicture,
} = editPosts.actions;

export default editPosts.reducer;
