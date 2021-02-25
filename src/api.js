import {
  fetchSightingsPending,
  fetchSightingsSuccess,
  fetchSightingsError,
  postSightingsSuccess,
} from "./actions";

const fetchSightings = (dispatch) => {
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

export const geolocateUser = (city, state) => {
  const formatCity = city.split(" ").join("+");
  const formatState = state.split(" ").join("+");
  // check for CO vs Colorado
  return fetch(
    `https://maps.googleapis.com/maps/api/geocode/json?address=${formatCity},+${formatState}&key=${process.env.REACT_APP_API_KEY}`
  ).then((response) => response.json());
};

// if locate me functionality
export const reverseGeolocateUser = (lat, long) => {
  return fetch (
    `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${long}&key=${process.env.REACT_APP_API_KEY}`
  )
}

export default fetchSightings;
