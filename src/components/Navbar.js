import React from "react";
import { NavLink } from "react-router-dom";

import "../navbar.css";

export default () => {
  return (
    <div id="navbar">
      <a href="#home">
        <h5>Weather App</h5>
      </a>
      <NavLink to="/home">home</NavLink>
      <a id="to-right" href="#news">
        News
      </a>
      <a id="to-right" href="#contact">
        Contact
      </a>
    </div>
  );
};
