// export const addSighting = (eventDetails) => ({
//   type: "ADD_SIGHTING",
//   eventDetails,
// });

//  GET data
export const FETCH_SIGHTINGS_PENDING = "FETCH_SIGHTINGS_PENDING";
export const FETCH_SIGHTINGS_SUCCESS = "FETCH_SIGHTINGS_SUCCESS";
export const FETCH_SIGHTINGS_ERROR = "FETCH_SIGHTINGS_ERROR";
//  POST data
// export const POST_SIGHTINGS_PENDING = "POST_SIGHTINGS_PENDING";
export const POST_SIGHTINGS_SUCCESS = "POST_SIGHTINGS_SUCCESS";
// export const POST_SIGHTINGS_ERROR = "POST_SIGHTINGS_ERROR";

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

export const postSightingsSuccess = (sighting) => {
  return {
    type: POST_SIGHTINGS_SUCCESS,
    sighting,
  };
};
