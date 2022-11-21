// api.openweathermap.org/data/2.5/weather?q=pune&appid=5e27beac707e28e08f4480993dda95df
import React from "react";
import "./style.css";

const Temp = () => {
  return (
    <>
      <div className="wrap">
        <div className="search">
          <input
            type="Search"
            placeholder="search....."
            autoFocus
            id="Search"
            className="searchTerm"
          />

          <button className="searchButton" type="button">
            Search
          </button>
        </div>
      </div>

      {/* creating temp card */}
      <article className="widget">
        <div className="weatherIcon">
          <i className={"wi wi-day-sunny"}></i>
        </div>

        <div className="weatherInfo">
          <div className="temperature">
            <span>25.58&deg;</span>
          </div>

          <div className="description">
            <div className="weatherCondition">Sunny</div>
            <div className="place">Pune, India</div>
          </div>
        </div>

        <div className="date"> {new Date().toLocaleDateString()} </div>

        {/* Adding 4column section */}

        <div className="extra-temp">
          <div className="temp-info-minmax">
            <div className="two-sided-section">
              <p>
                <i className={"wi wi-sunset"}></i>
              </p>
              <p className="extra-info-leftside">
                19:19 PM <br />
                Sunset
              </p>
            </div>

            <div className="two-sided-section">
              <p>
                <i className={"wi wi-humidity"}></i>
              </p>
              <p className="extra-info-leftside">
                19:19 PM <br />
                Humidity
              </p>
            </div>
          </div>

          <div className="weather-extra-info">
            <div className="two-sided-section">
              <p>
                <i className={"wi wi-rain"}></i>
              </p>
              <p className="extra-info-leftside">
                19:19 PM <br />
                Pressure
              </p>
            </div>

            <div className="two-sided-section">
              <p>
                <i className={"wi wi-strong-wind"}></i>
              </p>
              <p className="extra-info-leftside">
                19:19 PM <br />
                Speed
              </p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default Temp;
