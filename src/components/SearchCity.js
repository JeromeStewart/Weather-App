import React from "react";

export default props => {
  return (
    <div class="card" style={{ width: "18rem" }}>
      <img
        src={props.conditions[props.weather.weather[0].description]}
        class="card-img-top"
        alt="Weather card"
      />
      <div class="card-body">
        <h5 class="card-title">{props.weather.name}</h5>
        <p class="card-text">{props.weather.weather[0].main}</p>
        <p class="card-text">{props.weather.weather[0].description}</p>
        <p class="card-text text-muted">
          Temperature: {props.weather.main.temp} °C
        </p>
        <p class="card-text text-muted">
          Feels like: {props.weather.main.feels_like} °C
        </p>
      </div>
    </div>
  );
};
