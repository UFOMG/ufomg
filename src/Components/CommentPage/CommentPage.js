import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSingleSighting } from "../../api";
import CommentForm from "../CommentForm/CommentForm";
import { Link } from "react-router-dom";
import "./CommentPage.scss";

const CommentPage = ({ id }) => {
  const sightings = useSelector((state) => state.sightingsReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchSingleSighting(dispatch, id);
  }, [dispatch, id]);

  const displayComments = () => {
    const comments = sightings.singleSighting.comments;
    if (comments) {
      return comments.map((comment, index) => {
        return (
          <div key={index} className="comment-div">
            <p>{comment}</p>
          </div>
        );
      });
    }
  };

  const displayUpdates = displayComments();

  return (
    <section className="comment-section">
      <Link className="link-style" to="/">
        <h1 className="glitch" data-text="UFOMG">
          UFOMG
        </h1>
      </Link>
      <div className="sighting-card">
        <div className="comment-details">
          <img
            src={sightings.singleSighting.image}
            className="comment-image"
            alt={sightings.singleSighting.event_type}
          />
          <article className="comment-article">
            <h1>Name: {sightings.singleSighting.name}</h1>
            <h1>
              City/State: {sightings.singleSighting.city},{" "}
              {sightings.singleSighting.state}
            </h1>
            <h1>Description: {sightings.singleSighting.description}</h1>
            <h1>Comments:</h1>
            <div className="display-comment">{displayUpdates}</div>
          </article>
        </div>
        <CommentForm id={id} />
      </div>
    </section>
  );
};

export default CommentPage;
