import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { postSighting } from "../../api";
import CommentForm from "../CommentForm/CommentForm";
import "./CommentPage.scss";

const CommentPage = ({ id }) => {
  const sightings = useSelector((state) => state.sightingsReducer);

  const dispatch = useDispatch();

  const findSighting = () => {
    return sightings.sightings.find((sighting) => sighting.id === parseInt(id));
  };

  const singleSighting = findSighting();

  const mockComments = [
    { name: "billy", comment: "fake news" },
    { name: "sussy", comment: "fake news" },
    { name: "jenny", comment: "fake news" },
    { name: "jejoeynny", comment: "fake news" },
    { name: "billy", comment: "you're fake news" },
    { name: "sussy", comment: "you're fake news" },
    { name: "jenny", comment: "you're fake news" },
    { name: "jejoeynny", comment: "you're fake news" },
    { name: "billy", comment: "you're fake news" },
    { name: "sussy", comment: "you're fake news" },
    { name: "jenny", comment: "fake news" },
    { name: "jejoeynny", comment: "fake news" },
  ];

  const displayComments = () => {
    return mockComments.map((comment, index) => {
      return (
        <div key={index} className="comment-div">
          <p className="comment-name">{comment.name}</p>
          <p>{comment.comment}</p>
        </div>
      );
    });
  };
// once we have BE functionality
  // const postSightingComment = (comment) => {
  //   postSighting(
  //     {
  //       ...singleSighting, comments: []
  //     },
  //     dispatch
  //   );
  // }

  return (
    <section className="comment-section">
      <div className="comment-details">
        <img
          src={singleSighting.image}
          className="comment-image"
          alt={singleSighting.event_type}
        />
        <article className="comment-article">
          <h1>Name: {singleSighting.name}</h1>
          <h1>
            City/State: {singleSighting.city}, {singleSighting.state}
          </h1>
          <h1>Description: {singleSighting.description}</h1>
          <h1>Comments:</h1>
          <div className="display-comment"> {displayComments()}</div>
        </article>
      </div>
      <CommentForm />
    </section>
  );
};

export default CommentPage;
