import React from "react";
import CardMedia from "@mui/material/CardMedia";
import SentimentSatisfiedOutlinedIcon from "@mui/icons-material/SentimentSatisfiedOutlined";

import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import "./SecondPage.css";
import { Link } from "react-router-dom";
import EditPost from "./EditPost/EditPost";

import { useSelector, useDispatch } from "react-redux";
import { setComment, savePosts } from "../../features/posts";

export default function SecondPage() {
  const comment = useSelector((state) => state.posts.comment);
  const posts = useSelector((state) => state.posts.posts);

  const dispatch = useDispatch();

  const pushComment = (i, e) => {
    e.preventDefault();
    const newPosts = JSON.parse(JSON.stringify(posts));
    newPosts[i].comments.push(comment);
    dispatch(savePosts(newPosts));
    dispatch(setComment(""));
    const form = e.target;
    form.reset();
  };

  return (
    <div className="SecondPage">
      <div className="SecondPage__container">
        {posts.map((post, i) => {
          return (
            <div className="SecondPage__card" key={post.id}>
              <div className="SecondPage__cardHeader">
                <div className="SecondPage__ownerInfo">
                  <img src={post.owner.picture} alt="owner pictures" />
                  <div className="SecondPage__ownerInfoDetails">
                    <p>{post.owner.title}.</p>
                    <p>{post.owner.firstName}</p>
                    <p>{post.owner.lastName}</p>
                  </div>
                </div>
                <div className="SecondPage__ID">
                  <p>ID:</p>
                  <p>{post.id}</p>
                </div>
              </div>

              <CardMedia component="img" height="400" image={post.image} alt="Paella dish" />
              <div className="SecondPage__bottomContainer">
                <div className="SecondPage__social">
                  <div className="SecondPage__socialLike">
                    <ThumbUpIcon />
                    {post.likes}
                  </div>
                  <EditPost post={post} i={i} />
                  <div className="SecondPage__socialTags">
                    {post.tags.map((tag) => (
                      <Link to="/">{tag}</Link>
                    ))}
                  </div>
                </div>
                <div className="SecondPage__ownerInfoText">
                  <div className="SecondPage__ownerInfo">
                    <div className="SecondPage__ownerInfoDetails">
                      <p>{post.owner.firstName}</p>
                      <p>{post.owner.lastName}</p>
                    </div>
                  </div>
                  <p>{post.text}</p>
                </div>
                <p>
                  {post.comments
                    ? post.comments.map((allPosts) => {
                        return (
                          <div className="SecondPage__ownerInfoText">
                            <div className="SecondPage__ownerInfo">
                              <div className="SecondPage__ownerInfoDetails">
                                <p>{post.owner.firstName}</p>
                                <p>{post.owner.lastName}</p>
                              </div>
                            </div>
                            <p>{allPosts}</p>
                          </div>
                        );
                      })
                    : null}
                </p>
                <div className="SecondPage__postDate">
                  <p>
                    {new Date(post.publishDate).toLocaleDateString("sr-RS")} at{" "}
                    {new Date(post.publishDate).toLocaleTimeString("sr-RS")}
                  </p>
                </div>
              </div>
              <form onSubmit={(e) => pushComment(i, e)} className="SecondPage__comment">
                <SentimentSatisfiedOutlinedIcon />
                <input
                  type="text"
                  placeholder="Write your comment..."
                  onChange={(e) => dispatch(setComment(e.target.value))}
                />
                <button>Submit</button>
              </form>
            </div>
          );
        })}
      </div>
    </div>
  );
}
