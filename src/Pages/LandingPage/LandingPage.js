import React, { useEffect } from "react";
import "./LandingPage.css";
import Modal from "../../components/modal/modal";

import CardMedia from "@mui/material/CardMedia";

import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { savePosts, selectPost, modalHandler } from "../../features/posts";

import { appID } from "../../appID";
import { Link } from "react-router-dom";
import NewPost from "./NewPost/NewPost";

function LandingPage() {
  const postsData = useSelector((state) => state.posts.posts);
  const selectedPost = useSelector((state) => state.posts.selectedPost);
  const dispatch = useDispatch();
  const handleOpen = (data) => (dispatch(modalHandler(true)), dispatch(selectPost(data)));

  console.log(new Date());

  useEffect(() => {
    axios.get("https://dummyapi.io/data/v1/post?limit=50", { headers: { "app-id": appID } }).then((res) => {
      const responseData = res.data.data;
      responseData.sort((a, b) => {
        return new Date(a.publishDate) - new Date(b.publishDate);
      });

      responseData.map((res) => {
        const newCommentsArray = { comments: [] };
        const assignNewCommentsArray = Object.assign(res, newCommentsArray);
        return assignNewCommentsArray;
      });
      dispatch(savePosts(responseData));
    });
  }, [dispatch]);

  return (
    <div className="LandingPage">
      <h1>Posts</h1>
      <div className="LandingPage__link">
        <Link to="/id">Go to Second Page</Link>
        <NewPost />
      </div>
      <div className="LandingPage__container">
        {postsData.map((data) => {
          return (
            <div onClick={() => handleOpen(data)} className="LandingPage__card" key={data.id}>
              <div className="LandingPage__cardHeader">
                <div className="LandingPage__ownerInfo">
                  <img src={data.owner.picture} alt="owner pictures" />
                  <div className="LandingPage__ownerInfoDetails">
                    <p>{data.owner.title}.</p>
                    <p>{data.owner.firstName}</p>
                    <p>{data.owner.lastName}</p>
                  </div>
                </div>
              </div>

              <CardMedia component="img" height="194" image={data.image} alt="Paella dish" />
              <div className="LandingPage__postDate">
                <p>
                  {new Date(data.publishDate).toLocaleDateString("sr-RS")} at{" "}
                  {new Date(data.publishDate).toLocaleTimeString("sr-RS")}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      {selectedPost ? <Modal /> : null}
    </div>
  );
}

export default LandingPage;
