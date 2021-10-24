import React, { useState } from "react";
import "./EditPost.css";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import TextField from "@mui/material/TextField";
import Modal from "@mui/material/Modal";

import { useDispatch, useSelector } from "react-redux";
import { getNewId, getNewText, getNewImageUrl, getNewTag1, getNewTag2, getNewTag3 } from "../../../features/editPost";

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
  p: 15,
};

function EditPost({ post, i }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const postsData = useSelector((state) => state.posts.posts);
  const newId = useSelector((state) => state.editPosts.newId);
  const newText = useSelector((state) => state.editPosts.newText);
  const newImageUrl = useSelector((state) => state.editPosts.newImageUrl);
  const newTag1 = useSelector((state) => state.editPosts.newTag1);
  const newTag2 = useSelector((state) => state.editPosts.newTag2);
  const newTag3 = useSelector((state) => state.editPosts.newTag3);
  const dispatch = useDispatch();

  const editPostHandler = (e) => {
    e.preventDefault();
    const newPost = {
      id: newId,
      text: newText,
      image: newImageUrl,
      likes: post.likes,
      publishDate: Date.now(),
      owner: post.owner,
      comments: post.comments,
      tags: [newTag1, newTag2, newTag3],
    };

    const postDataCoppy = [...postsData];
    postDataCoppy[i] = newPost;
    dispatch(savePosts(postDataCoppy));
  };

  return (
    <div className="EditPost">
      <button onClick={handleOpen}>Edit Post</button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="EditPost__box" sx={style}>
          <form onSubmit={(e) => editPostHandler(e)} className="EditPost__form">
            <h2>Edit Post</h2>
            <div className="EditPost__formContainer">
              <h4>Post Info</h4>
              <div className="EditPost__formInfo">
                <TextField
                  onChange={(e) => dispatch(getNewId(e.target.value))}
                  id="outlined-basic"
                  label="ID"
                  variant="outlined"
                />

                <TextField
                  onChange={(e) => dispatch(getNewText(e.target.value))}
                  id="outlined-basic"
                  label="Text"
                  variant="outlined"
                />

                <TextField
                  onChange={(e) => dispatch(getNewImageUrl(e.target.value))}
                  id="outlined-basic"
                  label="Enter image url"
                  variant="outlined"
                />

                <TextField
                  onChange={(e) => dispatch(getNewTag1(e.target.value))}
                  id="outlined-basic"
                  label="Enter tag"
                  variant="outlined"
                />

                <TextField
                  onChange={(e) => dispatch(getNewTag2(e.target.value))}
                  id="outlined-basic"
                  label="Enter tag"
                  variant="outlined"
                />

                <TextField
                  onChange={(e) => dispatch(getNewTag3(e.target.value))}
                  id="outlined-basic"
                  label="Enter tag"
                  variant="outlined"
                />
              </div>
            </div>
            <Button type="submit" variant="contained">
              EDIT
            </Button>
          </form>
        </Box>
      </Modal>
    </div>
  );
}

export default EditPost;
