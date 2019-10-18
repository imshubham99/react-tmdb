import React from "react";
import MovieList from "./Movie/MovieList";
import { connect } from "react-redux";

import { fetchMovies } from "../actions";

class Discover extends React.Component {
  componentDidMount() {
    if (this.props.match.params.type) {
      this.props.fetchMovies(this.props.match.params.type);
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.match.params.type !== this.props.match.params.type) {
      this.props.fetchMovies(nextProps.match.params.type);
    }
    console.log("Next Props", nextProps.match.params.type);
    console.log("This Props", this.props.match.params.type);
  }
  render() {
    return (
      <div>
        <MovieList {...this.props} />
      </div>
    );
  }
}

export default connect(
  null,
  { fetchMovies }
)(Discover);
