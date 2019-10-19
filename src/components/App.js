import React from "react";
import { connect } from "react-redux";
import { Router, Route, Redirect } from "react-router-dom";
import { init } from "../actions";
import history from "../history";

import Discover from "./Discover";
import Genre from "./Genre";
import Movie from "./Movie/Movie";
import Navigation from "./Navigation/Navigation";
import Search from "./Search";
import classes from "./App.module.css";

class App extends React.Component {
  componentDidMount() {
    this.props.init();
  }
  render() {
    return (
      <Router history={history} basename="react-tmdb">
        <div className={classes}>
          <Navigation {...this.props} />
          <Route exact path="/discover/:type" component={Discover} />
          <Route
            exact
            path="/genres/:genreId"
            render={props => <Genre {...props} />}
          />
          <Route exact path="/movie/:movieId" component={Movie} />
          <Route
            exact
            path={process.env.PUBLIC_URL + "/"}
            render={() => (
              <Redirect
                from={process.env.PUBLIC_URL + "/"}
                to="/discover/popular"
              />
            )}
          />
          <Route
            exact
            path="/search/:searchTerm"
            render={props => <Search {...props} />}
          />
        </div>
      </Router>
    );
  }
}

export default connect(
  null,
  { init }
)(App);
