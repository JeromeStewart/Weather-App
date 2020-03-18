import React from "react";

export default props => {
  return (
    <div class="card" style={{ width: "18rem" }}>
      <img
        src={props.conditions[props.weather.weather[0].description]}
        className="card-img-top"
        alt="Weather card"
      />
      <div className="card-body">
        <h4 className="card-title mt-5">{props.weather.name}</h4>
        <p className="card-text mt-3">{props.weather.weather[0].main}</p>
        <p className="card-text mt-3">{props.weather.weather[0].description}</p>
        <p className="card-text mt-3">{props.weather.main.temp}°C</p>
        <p className="card-text mt-3">
          <span className="text-muted">Feels like:</span>{" "}
          {props.weather.main.feels_like}°C
        </p>
      </div>
    </div>
  );
};
