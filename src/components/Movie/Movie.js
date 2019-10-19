import React from "react";
import { connect } from "react-redux";
import Spinner from "../UI/Spinner";
import history from "../../history";

import { fetchMovie } from "../../actions";
import classes from "./Movie.module.css";
import Cast from "../Cast/Cast";
import NotFound from "../../images/notFound.jpg";

class Movie extends React.Component {
  componentDidMount() {
    if (this.props.match.params.movieId) {
      this.props.fetchMovie(this.props.match.params.movieId);
    }
  }

  render() {
    const {
      title,
      overview,
      poster_path,
      homepage,
      release_date,
      vote_average,
      genres,
      runtime
    } = this.props.movie;

    if (this.props.loading) {
      return <Spinner />;
    }
    return (
      <div className={classes.movieWrapper}>
        <div className={classes.movieInfo}>
          <div className={classes.movieImage}>
            {poster_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w342/${poster_path}`}
                alt={title}
              />
            ) : (
              <img className={classes.NotFound} src={NotFound} alt="NotFound" />
            )}
          </div>
          <div className={classes.movieDetails}>
            <div className={classes.info}>
              <p>
                <i
                  style={{ color: "#00d47d", marginRight: "2px" }}
                  class="fa fa-star-o"
                  aria-hidden="true"
                ></i>
                {`${vote_average}/10`}
              </p>
              <p>{release_date}</p>
              <p>{runtime} Min</p>
            </div>
            <div className={classes.movieTitle}>
              {`${title}`}
              <span>.</span>
            </div>
            <div className={classes.movieOverview}>
              <p>{overview}</p>
            </div>
            <div className={classes.movieGenres}>
              {genres &&
                genres.map(genre => <p key={genre.id}>{genre.name}</p>)}
            </div>
            {homepage && (
              <div className={classes.movieWebsite}>
                <a target="_blank" href={homepage}>
                  Go To Website
                </a>
              </div>
            )}
            <div className={classes.goHome} onClick={history.goBack}>
              <a>
                <i
                  class="fa fa-arrow-left"
                  style={{ marginRight: "5px" }}
                  aria-hidden="true"
                ></i>
                <span>Back</span>
              </a>
            </div>
            {!this.props.castLoading ? (
              <Cast
                casts={this.props.cast}
                castLoading={this.props.castLoading}
              />
            ) : (
              <p style={{ margin: "1rem" }}>Loading Casts...</p>
            )}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    movie: state.movie.movieData,
    loading: state.movie.loading,
    cast: state.cast.cast,
    castLoading: state.cast.castLoading
  };
};

export default connect(
  mapStateToProps,
  { fetchMovie }
)(Movie);
