import React from "react";

import "../footer.css";

export default () => {
  return (
    <div id="wrap">
      <div id="main" className="container clear-top">
        <footer id="footer-line-height" className="pt-5 my-md-5 pt-md-5">
          <div className="row">
            <div className="col-12 col-md">
              <h4>Icons</h4>
              <ul className="list-unstyled text-small">
                <li>Cool icons from amcharts</li>
                <li>
                  <a href="https://www.amcharts.com/free-animated-svg-weather-icons/">
                    amcharts weather icons
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-12 col-md">
              <h5>API</h5>
              <ul className="list-unstyled text-small">
                <li>The API used is Weather API from openWeatherMap</li>
                <li>It's free! just sign up and start using</li>
                <li>
                  <a href="https://openweathermap.org/api">openWeatherMap</a>
                </li>
              </ul>
            </div>
            <div className="col-6 col-md">
              <h5>CSS</h5>
              <ul className="list-unstyled text-small">
                <li>Bootstrap version 4.4.1</li>
                <li>Easy to use CSS framework</li>
                <li>It is open source and responsive</li>
                <li>
                  <a href="https://getbootstrap.com/">Boostrap</a>
                </li>
              </ul>
            </div>
            <div className="col-6 col-md">
              <h5>React</h5>
              <ul className="list-unstyled text-small">
                <li>Project built with React js</li>
                <li>
                  <a href="https://reactjs.org/">React</a>
                </li>
                <li>Web app create by Jerome Stewart</li>
              </ul>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};
