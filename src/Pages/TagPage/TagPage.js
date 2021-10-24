import React from "react";
import "./TagPage.css";
import CardMedia from "@mui/material/CardMedia";
import { useDispatch, useSelector } from "react-redux";
import { selectPost, modalHandler } from "../../features/posts";

function TagPage() {
  const tagsData = useSelector((state) => state.posts.tagsData);
  const tagName = useSelector((state) => state.posts.tagName);
  const dispatch = useDispatch();
  const handleOpen = (data) => (dispatch(modalHandler(true)), dispatch(selectPost(data)));
  console.log(tagsData);
  return (
    <div className="TagPage">
      <h1>{tagName}</h1>
      <div className="LandingPage__container">
        {tagsData.map((data) => {
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
    </div>
  );
}

export default TagPage;
