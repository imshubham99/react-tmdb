import React, { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import { searchMovie } from "../../actions";
import { connect } from "react-redux";
import history from "../../history";

import classes from "./Navigation.module.css";
import Logo from "../../images/tmdbLogo.png";

const Navigation = props => {
  const [value, setValue] = useState("");

  function onFormSubmit(e) {
    e.preventDefault();
    history.push(`/search/${value}`);
    setValue("");
  }

  return (
    <div className={classes.Navigation}>
      <Sidebar />
      <img src={Logo} style={{ marginLeft: "45%" }} alt="Logo" />
      <form onSubmit={onFormSubmit}>
        <input
          type="text"
          value={value}
          placeholder="Search Movie..."
          onChange={e => setValue(e.target.value)}
        />
      </form>
    </div>
  );
};

export default connect(
  null,
  { searchMovie }
)(Navigation);
