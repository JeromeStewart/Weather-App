import React from "react";

import "../jumbotron.css";

export default () => {
  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <div className="row">
          <div className="col">
            <h1 className="display-4">Weather app</h1>
            <p className="lead">Find the current weather in your location.</p>
          </div>
          <div className="col">
            <img
              id="jumbotron-img"
              src="https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather01-512.png"
              alt="weather icon"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
