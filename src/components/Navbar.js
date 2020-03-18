import React from "react";
import { NavLink } from "react-router-dom";

import "../navbar.css";

export default () => {
  return (
    <div id="navbar">
      <NavLink to="/home">
        <h5>Weather App</h5>
      </NavLink>
      <NavLink to="/home">home</NavLink>
    </div>
  );
};
