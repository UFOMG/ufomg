import {
  fetchSightingsPending,
  fetchSightingsSuccess,
  fetchSightingsError,
  fetchCommentsSuccess,
  postSightingsSuccess,
  postCommentSuccess,
} from "./actions";

const fetchSightings = (dispatch) => {
  dispatch(fetchSightingsPending());
  fetch("https://ancient-mesa-60922.herokuapp.com/api/v1/reports")
    .then((response) => response.json())
    .then((response) => {
      if (response.error) {
        throw response.error;
      }
      dispatch(fetchSightingsSuccess(response.results));
      return response.results;
    })
    .catch((error) => {
      dispatch(fetchSightingsError(error));
    });
};

export const fetchSingleSighting = (dispatch, id) => {
  fetch(`https://ancient-mesa-60922.herokuapp.com/api/v1/reports/${id}`)
    .then((response) => response.json())
    .then((response) => {
      if (response.error) {
        throw response.error;
      }
      dispatch(fetchCommentsSuccess(response));
      return response;
    });
};

export const postSighting = (sighting, dispatch) => {
  fetch("https://ancient-mesa-60922.herokuapp.com/api/v1/reports", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(sighting),
  })
    .then((response) => response.json())
    .then((response) => {
      if (response.error) {
        throw response.error;
      }
      dispatch(postSightingsSuccess(sighting));
    });
};

export const postComment = (id, text, dispatch) => {
  const comment = { report_id: id, text };
  fetch("https://ancient-mesa-60922.herokuapp.com/api/v1/comments", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(comment),
  })
    .then((response) => response.json())
    .then((response) => {
      if (response.error) {
        throw response.error;
      }
      dispatch(postCommentSuccess(text));
    });
};

export const geolocateUser = (city, state) => {
  const formatCity = city.split(" ").join("+");
  const formatState = state.split(" ").join("+");
  return fetch(
    `https://maps.googleapis.com/maps/api/geocode/json?address=${formatCity},+${formatState}&key=${process.env.REACT_APP_API_KEY}`
  ).then((response) => response.json());
};

// to display city state data on comment section with lat/long only storage
export const reverseGeolocateUser = (lat, long) => {
  return fetch(
    `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${long}&key=${process.env.REACT_APP_API_KEY}`
  );
};

export default fetchSightings;
