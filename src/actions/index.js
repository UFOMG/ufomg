//  GET data
export const FETCH_SIGHTINGS_PENDING = "FETCH_SIGHTINGS_PENDING";
export const FETCH_SIGHTINGS_SUCCESS = "FETCH_SIGHTINGS_SUCCESS";
export const FETCH_SIGHTINGS_ERROR = "FETCH_SIGHTINGS_ERROR";
export const FETCH_COMMENTS_SUCCESS = "FETCH_COMMENTS_SUCCESS";
//  POST data
export const POST_SIGHTINGS_SUCCESS = "POST_SIGHTINGS_SUCCESS";
export const POST_COMMENT_SUCCESS = "POST_COMMENT_SUCCESS";

export const fetchSightingsPending = () => {
  return {
    type: FETCH_SIGHTINGS_PENDING,
  };
};

export const fetchSightingsSuccess = (sightings) => {
  return {
    type: FETCH_SIGHTINGS_SUCCESS,
    sightings,
  };
};

export const fetchSightingsError = (error) => {
  return {
    type: FETCH_SIGHTINGS_ERROR,
    error,
  };
};

export const fetchCommentsSuccess = (sighting) => {
  return {
    type: FETCH_COMMENTS_SUCCESS,
    singleSighting: sighting,
  };
};

export const postSightingsSuccess = (sighting) => {
  return {
    type: POST_SIGHTINGS_SUCCESS,
    sighting,
  };
};

export const postCommentSuccess = (comment) => {
  return {
    type: POST_COMMENT_SUCCESS,
    comment
  }
}
