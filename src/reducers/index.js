import { combineReducers } from "redux";

import genresReducer from "./genereReducer";
import moviesReducer from "./moviesReducer";
import movieReducer from "./movieReducer";
import castReducer from "./castReducer";

export default combineReducers({
  genres: genresReducer,
  movies: moviesReducer,
  movie: movieReducer,
  cast: castReducer
});
