import React from "react";
import styles from "./Location.module.scss";
import { useSelector } from "react-redux";
import { getWeather } from "../../../store/weatherSlice/weatherSlice";

function Location() {
  const weather = useSelector(getWeather);

  return (
    <div className={styles.location}>
      <div className={styles.info}>
        <h2>{weather?.name || "N/A"}</h2>
        <p>
          {weather?.main?.temp ? `${weather.main.temp.toFixed(1)}°` : "N/A"}
        </p>
      </div>
        <img
          src={`https://openweathermap.org/img/wn/${weather?.weather?.[0]?.icon}@2x.png`}
          alt="Weather Icon"
        />
    </div>
  );
}

export default Location;
