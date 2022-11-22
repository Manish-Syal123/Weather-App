import React, { useEffect, useState } from "react";
import Weathercard from "./weathercard";
import "./style.css";

const Temp = () => {
  const [searchValue, setSearchValue] = useState("Pune");

  const [tempInfo, setTempInfo] = useState({});
  const getWeatherInfo = async () => {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=5e27beac707e28e08f4480993dda95df`;

      const res = await fetch(url); // this returns promis so for handling that we write await
      const data = await res.json();

      //Object destructuring data getting from api
      const { temp, humidity, pressure } = data.main;
      const { main: weathermood } = data.weather[0]; // changing the name of main to weathermood from data(weather pi data in json formate)
      const { name } = data;
      const { speed } = data.wind;
      const { country, sunset } = data.sys;

      //gathering all the above destructured data together in one object variable to use that data simply
      const myNewWeatherInfo = {
        temp,
        humidity,
        pressure,
        weathermood,
        name,
        speed,
        country,
        sunset,
      };

      setTempInfo(myNewWeatherInfo); //passed object
      console.log(temp);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getWeatherInfo(); //for the very first time on loading the page this show default weather
  }, []);

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
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />

          <button
            className="searchButton"
            type="button"
            onClick={getWeatherInfo}
          >
            Search
          </button>
        </div>
      </div>

      {/* creating temp card */}
      <Weathercard tempInfo={tempInfo} />
    </>
  );
};

export default Temp;
