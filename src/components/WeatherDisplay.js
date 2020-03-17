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
        <h5 class="card-title mt-4">{props.weather.name}</h5>
        <h6 class="card-text mt-4">{props.weather.weather[0].main}</h6>
        <h6 class="card-text mt-4">{props.weather.weather[0].description}</h6>
        <h6 class="card-text mt-4">
          Temperature: {props.weather.main.temp} °C
        </h6>
        <h6 class="card-text mt-4">
          Feels like: {props.weather.main.feels_like} °C
        </h6>
      </div>
    </div>
  );
};
