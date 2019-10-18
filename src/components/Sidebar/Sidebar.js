import React from "react";
import { slide as Menu } from "react-burger-menu";
import { Link, NavLink } from "react-router-dom";
import { connect } from "react-redux";

import classes from "./Sidebar.module.css";

class Sidebar extends React.Component {
  state = {
    menuOpen: false
  };

  handleStateChange(state) {
    this.setState({ menuOpen: state.isOpen });
  }

  closeMenu() {
    this.setState({ menuOpen: false });
  }

  renderGenres() {
    return this.props.genres.map(genre => (
      <NavLink
        to={`/genres/${genre.id}`}
        key={genre.id}
        className={classes.linkItem}
        activeStyle={{
          color: "#00D47f",
          border: "1px solid #fff",
          borderRadius: "15px",
          boxSizing: "border-box"
        }}
        onClick={() => this.closeMenu()}
      >
        <li>{genre.name}</li>
      </NavLink>
    ));
  }

  render() {
    // var styles = {
    //   bmBurgerButton: {
    //     position: "absolute",
    //     width: "36px",
    //     height: "30px",
    //     left: "36px",
    //     top: "36px"
    //   },
    //   bmBurgerBars: {
    //     background: "#f00"
    //   },
    //   bmCrossButton: {
    //     height: "24px",
    //     width: "24px"
    //   },
    //   bmCross: {
    //     background: "#bdc3c7"
    //   },
    //   bmMenu: {
    //     position: 'absolute',
    //     top: '-8%',
    //     width: '100%',
    //     height: '100%',
    //     background: "#373a47",
    //     padding: "2.5em 1.5em 0",
    //     fontSize: "1.15em"
    //   },
    //   bmMorphShape: {
    //     fill: "#373a47"
    //   },
    //   bmItemList: {
    //     color: "#b8b7ad",
    //     padding: "0.8em"
    //   },
    //   bmOverlay: {
    //     background: "rgba(0, 0, 0, 0.3)"
    //   }
    // };

    var styles = {
      bmBurgerButton: {
        display: "none"
      },
      bmBurgerBars: {
        background: "red"
      },
      bmCrossButton: {
        height: "24px",
        width: "24px",
        marginRight: "1rem"
      },
      bmCross: {
        background: "#fafafa"
      },
      bmMenuWrap: {
        position: "fixed",
        height: "100%",
        top: 0,
        left: 0
      },
      bmMenu: {
        background: "#263238",
        overflowY: "scroll",
        padding: "2.5em 1.5em"
      },
      bmItemList: {
        color: "#fafafa",
        padding: "0.8rem"
      },
      // bmItem: {
      //   outline: "none",
      //   color: "#fff",
      //   textDecoration: "none",
      //   padding: "3px 10px"
      // },
      bmOverlay: {
        top: 0,
        left: 0,
        background: "rgba(0, 0, 0, 0.3)"
      }
    };

    if (!this.props.genres) {
      return <div>Loading.......</div>;
    }

    return (
      <div className={classes.Sidebar}>
        <i
          className="fa fa-bars fa-2x"
          style={{ color: "white", cursor: "pointer" }}
          aria-hidden="true"
          onClick={() => this.setState({ menuOpen: true })}
        />
        <Menu
          styles={styles}
          // className={classes}
          isOpen={this.state.menuOpen}
          onStateChange={state => this.handleStateChange(state)}
        >
          <h3 className={classes.title}>Discover</h3>
          <NavLink
            onClick={() => this.closeMenu()}
            className={classes.linkItem}
            to="/discover/popular"
            exact
            activeStyle={{
              color: "#00D47f",
              border: "1px solid #fff",
              borderRadius: "15px",
              boxSizing: "border-box"
            }}
          >
            <li>Popular</li>
          </NavLink>
          <NavLink
            onClick={() => this.closeMenu()}
            className={classes.linkItem}
            to="/discover/top_rated"
            exact
            activeStyle={{
              color: "#00D47f",
              border: "1px solid #fff",
              borderRadius: "15px",
              boxSizing: "border-box"
            }}
          >
            <li>Top Rated</li>
          </NavLink>
          <NavLink
            onClick={() => this.closeMenu()}
            className={classes.linkItem}
            to="/discover/upcoming"
            exact
            activeStyle={{
              color: "#00D47f",
              border: "1px solid #fff",
              borderRadius: "15px",
              boxSizing: "border-box"
            }}
          >
            <li>Upcoming</li>
          </NavLink>
          <h3 className={classes.title}>Genres</h3>
          {this.renderGenres()}
        </Menu>
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
)(Sidebar);
