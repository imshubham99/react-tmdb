import React, { useEffect } from "react";
import MovieList from "./Movie/MovieList";
import { connect } from "react-redux";

import { searchMovie } from "../actions";

const Search = props => {
  useEffect(() => {
    props.searchMovie(props.match.params.searchTerm);
  }, [props.match.params.searchTerm]);
  return <MovieList />;
};

export default connect(
  null,
  { searchMovie }
)(Search);
