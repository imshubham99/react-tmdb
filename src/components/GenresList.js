import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class GenresList extends React.Component {
  renderGenres() {
    return this.props.genres.map(genre => (
      <Link to={`/genres/${genre.id}`} key={genre.id}>
        <li>{genre.name}</li>
      </Link>
    ));
  }
  render() {
    console.log("Genre" + this.props.match);
    console.log(this.props.genres);
    return (
      <div className="">
        <Link to={`/discover/popular`}>
          <li>Populer</li>
        </Link>
        <Link to={`/discover/top_rated`}>
          <li>Top Rated</li>
        </Link>
        <Link to={`/discover/upcoming`}>
          <li>Upcoming</li>
        </Link>
        <h3>Genres</h3>
        {this.renderGenres()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    genres: state.genres
  };
};
export default connect(
  mapStateToProps,
  {}
)(GenresList);
