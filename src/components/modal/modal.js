import * as React from "react";
import Box from "@mui/material/Box";
import CardMedia from "@mui/material/CardMedia";
import Modal from "@mui/material/Modal";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import "./modal.css";
import { Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { modalHandler, filteredTags, getTagName } from "../../features/posts";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const selectedPost = useSelector((state) => state.posts.selectedPost);
  const tagName = useSelector((state) => state.posts.tagName);
  const posts = useSelector((state) => state.posts.posts);
  const modal = useSelector((state) => state.posts.modalOpen);

  const selectTagObj = (tag) => {
    const tags = posts.filter((post) => post.tags.includes(tag));
    dispatch(filteredTags(tags));
    dispatch(getTagName(tag));
    handleClose();
  };

  const dispatch = useDispatch();
  const handleClose = () => dispatch(modalHandler(false));

  return (
    <div className="LandingPage__modal">
      <Modal
        open={modal}
        s
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="LandingPageModal__card" key={selectedPost.id}>
            <div className="LandingPage__cardHeader">
              <div className="LandingPage__ownerInfo">
                <img src={selectedPost.owner.picture} alt="owner pictures" />
                <div className="LandingPage__ownerInfoDetails">
                  <p>{selectedPost.owner.title}.</p>
                  <p>{selectedPost.owner.firstName}</p>
                  <p>{selectedPost.owner.lastName}</p>
                </div>
              </div>
            </div>

            <CardMedia component="img" height="400" image={selectedPost.image} alt="Paella dish" />
            <div className="LandingPageModal__ownerInfoText">
              <div className="LandingPageModal__ownerInfo">
                <div className="LandingPageModal__ownerInfoDetails">
                  <p>{selectedPost.owner.firstName}</p>
                  <p>{selectedPost.owner.lastName}</p>
                </div>
              </div>
              <p>{selectedPost.text}</p>
            </div>
            <div className="LandingPageModal__social">
              <div className="LandingPageModal__socialLike">
                <ThumbUpIcon />
                {selectedPost.likes}
              </div>
              <div className="LandingPageModal__socialTags">
                {selectedPost.tags.map((tag) => (
                  <Link to={`/${tag}`} onClick={() => selectTagObj(tag)}>
                    {tag}
                  </Link>
                ))}
              </div>
            </div>
            <div className="LandingPageModal__postDate">
              <p>
                {new Date(selectedPost.publishDate).toLocaleDateString("sr-RS")} at{" "}
                {new Date(selectedPost.publishDate).toLocaleTimeString("sr-RS")}
              </p>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
