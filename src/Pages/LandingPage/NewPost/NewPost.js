import React, { useState } from "react";
import "./NewPost.css";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import TextField from "@mui/material/TextField";
import Modal from "@mui/material/Modal";

import { useDispatch, useSelector } from "react-redux";
import {
  getNewId,
  getNewText,
  getNewImageUrl,
  getNewTag1,
  getNewTag2,
  getNewTag3,
  getnewOwnerId,
  getnewOwnerFirstName,
  getnewOwnerLastName,
  getnewOwnerPicture,
  getnewOwnerTitle,
} from "../../../features/editPost";

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

function NewPost() {
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
  const newOwnerId = useSelector((state) => state.editPosts.newOwnerId);
  const newOwnerTitle = useSelector((state) => state.editPosts.newOwnerTitle);
  const newOwnerFirstName = useSelector((state) => state.editPosts.newOwnerFirstName);
  const newOwnerLastName = useSelector((state) => state.editPosts.newOwnerLastName);
  const newOwnerPicture = useSelector((state) => state.editPosts.newOwnerPicture);
  const dispatch = useDispatch();

  const editPostHandler = (e) => {
    e.preventDefault();
    const newPost = {
      id: newId,
      text: newText,
      image: newImageUrl,
      likes: 0,
      publishDate: Date.now(),
      owner: {
        id: newOwnerId,
        title: newOwnerTitle,
        firstName: newOwnerFirstName,
        lastName: newOwnerLastName,
        picture: newOwnerPicture,
      },
      comments: [],
      tags: [newTag1, newTag2, newTag3],
    };

    const postDataCoppy = [...postsData];
    postDataCoppy.unshift(newPost);
    console.log(postDataCoppy);
    dispatch(savePosts(postDataCoppy));
  };

  return (
    <div className="NewPost">
      <button onClick={handleOpen}>New Post</button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form onSubmit={(e) => editPostHandler(e)} className="EditPost__form">
            <h2>New Post</h2>
            <div className="NewPost__formContainer">
              <div className="NewPost__formInfo">
                <h4>Post Info</h4>
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
              <div className="NewPost__formInfo">
                <h4>Owner Info</h4>
                <TextField
                  onChange={(e) => dispatch(getnewOwnerId(e.target.value))}
                  id="outlined-basic"
                  label="Enter ID"
                  variant="outlined"
                />

                <TextField
                  onChange={(e) => dispatch(getnewOwnerTitle(e.target.value))}
                  id="outlined-basic"
                  label="Enter title"
                  variant="outlined"
                />

                <TextField
                  onChange={(e) => dispatch(getnewOwnerFirstName(e.target.value))}
                  id="outlined-basic"
                  label="Enter first name"
                  variant="outlined"
                />

                <TextField
                  onChange={(e) => dispatch(getnewOwnerLastName(e.target.value))}
                  id="outlined-basic"
                  label="Enter last name"
                  variant="outlined"
                />

                <TextField
                  onChange={(e) => dispatch(getnewOwnerPicture(e.target.value))}
                  id="outlined-basic"
                  label="Enter picture url"
                  variant="outlined"
                />
              </div>
            </div>
            <Button type="submit" variant="contained">
              Submit
            </Button>
          </form>
        </Box>
      </Modal>
    </div>
  );
}

export default NewPost;
