export const sightings = (state = [], action) => {
  switch (action.type) {
    case "ADD_SIGHTING":
      return [
        ...state,
        {
          name: action.name,
          location: action.location,
          description: action.description,
          eventType: action.eventType,
          comments: [],
        },
      ];
    default:
      return state;
  }
};
