import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
// import LazyLoad from "react-lazyload";
import Spinner from "../UI/Spinner";
import NotFound from "../../images/notFound.jpg";
import history from "../../history";

import classes from "./MovieList.module.css";
import Loader from "../UI/Loader";

class MovieList extends React.Component {
  state = {
    loaded: false
  };
  onImageLoaded = () => {
    this.setState({
      loaded: true
    });
  };

  render() {
    if (this.props.loading) {
      return <Spinner />;
    }
    return (
      <div className={classes.MovieListContainer}>
        {this.props.movies.length === 0 ? (
          <div style={{ textAlign: "center" }}>
            <h1 style={{ textAlign: "center", marginTop: "100px" }}>
              No Movies Found
            </h1>

            <div className={classes.goHome} onClick={() => history.push("/")}>
              <a>
                <i
                  class="fa fa-arrow-left"
                  style={{ marginRight: "5px" }}
                  aria-hidden="true"
                ></i>
                <span>Back</span>
              </a>
            </div>
          </div>
        ) : (
          <h2 className={classes.title}>Movie List</h2>
        )}

        <div className={classes.MovieList}>
          {this.props.movies.map(movie => {
            return (
              <Link
                to={`/movie/${movie.id}`}
                key={movie.id}
                className={classes.item}
              >
                {!this.state.loaded ? (
                  <div className={classes.imageOverlay}>
                    <Loader />
                  </div>
                ) : null}

                {movie.poster_path ? (
                  <img
                    src={`http://image.tmdb.org/t/p/w342${movie.poster_path}`}
                    alt={movie.original_title}
                    onLoad={this.onImageLoaded}
                    style={!this.state.loaded ? { display: "none" } : {}}
                  />
                ) : (
                  <img src={NotFound} alt="Not Found" />
                )}

                <p>{movie.title}</p>
              </Link>
            );
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    movies: state.movies.movies,
    loading: state.movies.loading
  };
};

export default connect(
  mapStateToProps,
  {}
)(MovieList);
