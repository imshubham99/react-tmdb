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
// import poweredby from "../images/poweredby.png";
class App extends React.Component {
  componentDidMount() {
    this.props.init();
  }
  render() {
    return (
      <Router history={history} basename="/">
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
            path="/"
            render={() => <Redirect from={"/"} to={"/discover/popular"} />}
          />
          <Route
            exact
            path="/search/:searchTerm"
            render={props => <Search {...props} />}
          />
          {/* <Route exact path="/" component={GenresList} /> */}
          {/* <div style={{ textAlign: "center" }}>
            Copyright © <a href="#">Shubham</a>
            <br />
            <img src={poweredby} width={100} alt="" />
          </div> */}
        </div>
      </Router>
    );
  }
}

export default connect(
  null,
  { init }
)(App);
