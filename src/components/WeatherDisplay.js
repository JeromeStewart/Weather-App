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
        <h6 class="card-text">{props.weather.weather[0].main}</h6>
        <h6 class="card-text">{props.weather.weather[0].description}</h6>
        <p class="card-text">Temperature: {props.weather.main.temp} °C</p>
        <p class="card-text">Feels like: {props.weather.main.feels_like} °C</p>
      </div>
    </div>
  );
};
