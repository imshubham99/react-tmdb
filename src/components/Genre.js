import React, { useEffect } from "react";
import MovieList from "./Movie/MovieList";
import { connect } from "react-redux";

import { fetchGenreById } from "../actions";

// class Genre extends React.Component {
const Genre = props => {
  // componentDidMount() {
  //   if (this.props.match.params.genreId) {
  //     console.log("ComponentDidMount");
  //     this.props.fetchGenreById(this.props.match.params.genreId);
  //   }
  // }
  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.match.params.genreId !== this.props.match.params.genreId) {
  //     this.props.fetchGenreById(nextProps.match.params.genreId);
  //   }
  //   console.log("Next Props", nextProps.match.params.genreId);
  //   console.log("This Props", this.props.match.params.genreId);
  // }
  useEffect(() => {
    console.log("[Gernre ] : ", props.match.params.genreId);
    props.fetchGenreById(props.match.params.genreId);
  }, [props.match.params.genreId]);
  // render() {
  return <div>{<MovieList />}</div>;
};
// }

export default connect(
  null,
  { fetchGenreById }
)(Genre);
