import React, { useState, useEffect } from "react";
import tableWeather from "../_params/tableWeather";

const Weather = () => {
  const [search, setSearch] = useState("");
  const [values, setValues] = useState("");
  const [icon, setIcon] = useState("");
  const [latitude, setLat] = useState("");
  const [longitude, setLon] = useState("");

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      setSearch(e.target.value);
    }
  };

  useEffect(() => {
    if (search) {
      const URLCITY = `https://api.openweathermap.org/geo/1.0/direct?q=${search}&limit=1&appid=0398986c08632f06c0cc09de8a03bdf3`;

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
            setValues(false);
          });
      };

      getDataCity();

      if (latitude) {
        const URLWEATHER = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&lang=fr&units=metric&appid=0398986c08632f06c0cc09de8a03bdf3`;

        const getDataWeather = async () => {
          await fetch(URLWEATHER)
            .then((response) => {
              return response.json();
            })
            .then((data) => {
              if (data.cod >= 400) {
                setValues(false);
              } else {
                setValues(data);
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
    }
  }, [search, latitude, longitude, icon]);

  return (
    <div className="mc-weather">
      <h3 className="fw-bold lh-2 fs-3 text-center">Quel temps pour jouer ?</h3>
      <div className="mc-wsearch">
        <input
          className="mc-winput"
          onKeyDown={handleSearch}
          type="text"
          placeholder="ville ?"
          autoFocus
        />
      </div>

      {values ? (
        <div className="mc-wcontainer">
          <div className="mc-wtop">
            <div className="mc-wlocation">
              <p className="">{values.name}</p>
            </div>
            <div className="mc-wtemp">
              <p>{values.main.temp.toFixed(0)}&deg;C</p>
            </div>
            <div className="mc-wdesc">
              <p>{"Clair"}</p>
            </div>
            <div className="mc-wtemp-min-max">
              <p>
                <small className="text-muted">min </small>
                {values.main.temp_min.toFixed(0)}&deg;C |
                <small className="text-muted"> max </small>
                {values.main.temp_max.toFixed(0)}&deg;C
              </p>
            </div>
          </div>
          <div className="mc-animated-icon">
            <img
              className="mc-icon"
              src={tableWeather[icon].icon}
              alt="icon-weather"
            />
          </div>
          <div className="mc-wbottom">
            <div className="mc-feels">
              <p>{"Ressenti"}</p>
            </div>
            <div className="mc-humidity">
              <p>{"Humidité"}</p>
            </div>
            <div className="mc-wind">
              <p>{"Vent"}</p>
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
