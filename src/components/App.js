import React from "react";

import Jumbotron from "./Jumbotron";
import WeatherDisplay from "./WeatherDisplay";
import Footer from "./Footer";
import Navbar from "./Navbar";

import CityList from "../data/CityList";
import SearchCity from "./SearchCity";
import weatherConditions from "../data/WeatherConditions";
import ApiKey from "../config/keys";

import validator from "validator";
import isEmpty from "is-empty";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      allWeatherData: [],
      cityName: "",
      cities: CityList,
      searchedWeather: [],
      isReadyToDisplay: false,
      weatherConditions: weatherConditions,
      errors: {}
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {
    // window.onscroll = function() {
    //   scrollFunc();
    // };

    // const scrollFunc = () => {
    //   if (
    //     document.body.scrollTop > 686.6666870117188 ||
    //     document.documentElement.scrollTop > 686.6666870117188
    //   ) {
    //     document.getElementById("navbar").style.top = "0px";
    //   } else {
    //     document.getElementById("navbar").style.top = "-50px";
    //   }
    // };

    let prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
      let currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
      } else {
        document.getElementById("navbar").style.top = "-62px";
      }
      prevScrollpos = currentScrollPos;
    };

    const randCity1 = this.state.cities[
      Math.floor(Math.random() * this.state.cities.length)
    ].id;
    const randCity2 = this.state.cities[
      Math.floor(Math.random() * this.state.cities.length)
    ].id;
    const randCity3 = this.state.cities[
      Math.floor(Math.random() * this.state.cities.length)
    ].id;

    const randCity4 = this.state.cities[
      Math.floor(Math.random() * this.state.cities.length)
    ].id;

    const randCity5 = this.state.cities[
      Math.floor(Math.random() * this.state.cities.length)
    ].id;

    const randCity6 = this.state.cities[
      Math.floor(Math.random() * this.state.cities.length)
    ].id;

    fetch(
      `http://api.openweathermap.org/data/2.5/group?id=${randCity1},${randCity2},${randCity3},${randCity4},${randCity5},${randCity6}&units=metric&appid=` +
        ApiKey
    )
      .then(res => res.json())
      .then(data => this.setState({ allWeatherData: data.list }));
  }

  handleChange(e) {
    this.setState({ cityName: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({ errors: {} });

    let city = this.state.cityName;

    //Validation..
    let errors = {};

    city = !isEmpty(city) ? city : "";

    if (validator.isAlpha(city) !== true) {
      errors.onlyLetters = "City name must only contain letters.";
    }

    if (validator.isEmpty(city)) {
      errors.emptyInput = "Enter a city name.";
    }

    if (!isEmpty(errors)) {
      this.setState({ errors });
    } else {
      let cityToCap = city[0].toUpperCase() + city.slice(1);

      fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${cityToCap}&units=metric&appid=` +
          ApiKey
      )
        .then(res => {
          if (res.status === 404) {
            errors.notFound = "City not found.";
            this.setState({ errors });
            return Promise.reject(); //Stop promise chain.
          } else {
            return res;
          }
        })
        .then(res => {
          return res.json();
        })
        .then(data =>
          this.setState({ allWeatherData: data, isReadyToDisplay: true })
        );
    }
  }
  render() {
    let scroll = window.scrollY;

    console.log(scroll);
    const {
      allWeatherData,
      isReadyToDisplay,
      weatherConditions,
      errors
    } = this.state;

    const weatherComponent = isReadyToDisplay ? (
      <SearchCity weather={allWeatherData} conditions={weatherConditions} />
    ) : (
      allWeatherData.map(data => {
        return (
          <WeatherDisplay
            key={data.id}
            weather={data}
            conditions={weatherConditions}
          />
        );
      })
    );

    return (
      <div>
        <Navbar />
        <Jumbotron />
        <div className="container">
          <form onSubmit={this.handleSubmit}>
            <div className="input-group mb-3">
              <div className="input-group-prepend"></div>
              <input
                value={this.state.cityName}
                onChange={this.handleChange}
                type="text"
                placeholder="Enter city name"
                className="form-control mb-2"
              />
            </div>
          </form>
          {!isEmpty(errors) && (
            <div class="alert alert-danger" role="alert">
              {errors.emptyInput || errors.onlyLetters || errors.notFound}
            </div>
          )}
        </div>
        <div className="container">
          <div
            className={
              isReadyToDisplay
                ? "d-flex justify-content-center mb-3"
                : "card-group my-md-5"
            }
          >
            {weatherComponent}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
