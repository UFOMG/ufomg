import {
  FETCH_SIGHTINGS_PENDING,
  FETCH_SIGHTINGS_SUCCESS,
  FETCH_SIGHTINGS_ERROR,
  FETCH_COMMENTS_SUCCESS,
  POST_SIGHTINGS_SUCCESS,
} from "../actions";

export const initialState = {
  pending: false,
  sightings: [],
  error: null,
  singleSighting: {},
};

export const sightingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SIGHTINGS_PENDING:
      return {
        ...state,
        pending: true,
      };
    case FETCH_SIGHTINGS_SUCCESS:
      return {
        ...state,
        pending: false,
        sightings: action.sightings,
      };
    case FETCH_SIGHTINGS_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error,
      };
    case POST_SIGHTINGS_SUCCESS:
      return {
        ...state,
        sightings: [...state.sightings, action.sighting],
      };
    case FETCH_COMMENTS_SUCCESS:
      return {
        ...state,
        singleSighting: action.singleSighting,
      };
    default:
      return state;
  }
};
