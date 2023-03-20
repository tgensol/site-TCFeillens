import React, { useState, useEffect } from "react";
import tableWeather from "../_params/tableWeather";

const Weather = () => {
  // const [location, setLocation] = useState("Feillens");
  const location = "Feillens";
  const [data, setData] = useState("");
  const [icon, setIcon] = useState("");
  const [latitude, setLat] = useState("");
  const [longitude, setLon] = useState("");

  // const handleSearchLocation = (e) => {
  //   if (e.key === "Enter") {
  //     setLocation(e.target.value);
  //   }
  // };

  useEffect(() => {
    // if (location) {
    const URLCITY = `https://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=1&appid=${process.env.REACT_APP_API_KEY}`;
    const getDataCity = async () => {
      await fetch(URLCITY)
        .then((response) => {
          console.log("response city: ", response);
          return response.json();
        })
        .then((data) => {
          setLat(data[0].lat);
          setLon(data[0].lon);
        })
        .catch((error) => {
          console.log("error fetch api.openweathermap:", error);
          setData(false);
        });
    };

    getDataCity();

    if (latitude) {
      const URLWEATHER = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&lang=fr&units=metric&appid=${process.env.REACT_APP_API_KEY}`;

      const getDataWeather = async () => {
        await fetch(URLWEATHER)
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            if (data.cod >= 400) {
              setData(false);
            } else {
              setData(data);
              const iconId = data.weather[0].id;
              setIcon(tableWeather.map((item) => item.id).indexOf(iconId));
              console.log("data: ", data);
            }
          })
          .catch((error) => {
            console.log("error fetch api.openweathermap:", error);
          });
      };
      getDataWeather();
    }
    // }
    // }, [location, latitude, longitude, icon]);
  }, [latitude, longitude, icon]);

  return (
    <div className="mc-weather">
      <p className="fw-bold lh-2 text-center" style={{ fontSize: "1.3rem" }}>
        Quel temps pour jouer ?
      </p>
      {/* <div className="mc-wsearch">
        <input
          className="mc-winput"
          onKeyDown={handleSearchLocation}
          type="text"
          placeholder="ville ?"
          autoFocus
        />
      </div> */}

      {data ? (
        <div className="px-2">
          <div className="mc-wtop">
            <div className="align-items-center">
              <p className="m-0 text-black-50 fw-bold">{data.name}</p>
            </div>
            <div className="mc-wtemp">
              <p className="m-0 text-black-50 fw-bold">
                {data.main.temp.toFixed(0)}&deg;C
              </p>
            </div>
          </div>
          <div className="d-flex align-items-center">
            <div
              className="text-center rounded-pill w-25 p-2"
              style={{
                fontSize: "0.8rem",
                background: "rgba(84, 144, 255, 0.5)",
              }}
            >
              <p className="m-0">
                <small className="text-light fw-bold">min </small>
                {data.main.temp_min.toFixed(0)}&deg;C
              </p>
              <p className="m-0">
                <small className="text-light fw-bold">max </small>
                {data.main.temp_max.toFixed(0)}&deg;C
              </p>
            </div>
            <img
              className="w-50"
              src={tableWeather[icon].icon}
              alt="icon-weather"
            />
            <div className="mc-wdesc w-25">
              <p className="m-0">{tableWeather[icon].desc}</p>
            </div>
          </div>
          <div className="mc-wbottom">
            <div className="mc-feels">
              {data.main.feels_like.toFixed(0)}&deg;C
              <p className="m-0">Ressenti</p>
              <img src="icons/thermometer-celsius.svg" alt="" />
            </div>
            <div className="mc-humidity">
              {data.main.humidity.toFixed(0)} %<p className="m-0">Humidité</p>
              <img src="icons/humidity.svg" alt="" />
            </div>
            <div className="mc-wind">
              {data.wind.speed.toFixed(0)} kh
              <p className="m-0">Vent</p>
              <img src="icons/windsock.svg" alt="" />
            </div>
          </div>
        </div>
      ) : (
        <h1>{"City not Found"}</h1>
      )}
    </div>
  );
};

export default Weather;
