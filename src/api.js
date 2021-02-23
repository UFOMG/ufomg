import {
  fetchSightingsPending,
  fetchSightingsSuccess,
  fetchSightingsError,
  postSightingsSuccess,
} from "./actions";

const fetchSightings = () => {
  return (dispatch) => {
    dispatch(fetchSightingsPending());
    fetch("http://localhost:5000/api/v1/reports")
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
};

export const postSighting = (sighting, dispatch) => {
  fetch("http://localhost:5000/api/v1/reports", {
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

export default fetchSightings;
