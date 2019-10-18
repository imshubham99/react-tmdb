import { FETCH_GENRE_TYPES } from "../actions/types";

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_GENRE_TYPES:
      return action.payload;
    default:
      return state;
  }
};
