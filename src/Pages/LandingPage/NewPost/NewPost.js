import React, { useState } from "react";
import "./NewPost.css";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import TextField from "@mui/material/TextField";
import Modal from "@mui/material/Modal";

import { useDispatch, useSelector } from "react-redux";
import { getNewId, getNewText, getNewImageUrl } from "../../../features/editPost";

import { savePosts } from "../../../features/posts";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 20,
};

function NewPost() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const postsData = useSelector((state) => state.posts.posts);
  const newId = useSelector((state) => state.editPosts.newId);
  const newText = useSelector((state) => state.editPosts.newText);
  const newImageUrl = useSelector((state) => state.editPosts.newImageUrl);
  const dispatch = useDispatch();

  const editPostHandler = (e) => {
    e.preventDefault();
    const newPost = {
      id: newId,
      text: newText,
      image: newImageUrl,
      //   likes: post.likes,
      publishDate: Date.now(),
      //   owner: post.owner,
      //   comments: post.comments,
      //   tags: post.tags,
    };

    const postDataCoppy = [...postsData];
    // postDataCoppy[i] = newPost;
    console.log(postDataCoppy);
    dispatch(savePosts(postDataCoppy));
  };

  return (
    <div className="NewPost">
      <button onClick={handleOpen}>Edit Post</button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form onSubmit={(e) => editPostHandler(e)} className="EditPost__form">
            <h2>Add Post</h2>
            <div>
              <TextField
                onChange={(e) => dispatch(getNewId(e.target.value))}
                id="outlined-basic"
                label="ID"
                variant="outlined"
              />
            </div>
            <div>
              <TextField
                onChange={(e) => dispatch(getNewText(e.target.value))}
                id="outlined-basic"
                label="Text"
                variant="outlined"
              />
            </div>
            <div>
              <TextField
                onChange={(e) => dispatch(getNewImageUrl(e.target.value))}
                id="outlined-basic"
                label="Enter image url"
                variant="outlined"
              />
            </div>
            <Button type="submit" variant="contained">
              Post
            </Button>
          </form>
        </Box>
      </Modal>
    </div>
  );
}

export default NewPost;
