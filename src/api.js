import {
  fetchSightingsPending,
  fetchSightingsSuccess,
  fetchSightingsError,
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

export default fetchSightings;
