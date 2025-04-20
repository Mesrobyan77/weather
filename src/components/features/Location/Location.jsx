import React from "react";
import styles from "./Location.module.scss";
import { useSelector } from "react-redux";
import {
  getLoading,
  getUnit,
  getWeather,
} from "../../../store/weatherSlice/weatherSlice";
import Loading from "../../shared/Loading/Loading";

function Location() {
  const weather = useSelector(getWeather);
  const loading = useSelector(getLoading);
  const unit = useSelector(getUnit);
  const unitSymbol = unit === "imperial" ? "°F" : "°C";
  return (
    <div className={styles.location}>
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className={styles.info}>
            <h2>{weather?.name || "N/A"}</h2>
            <p>
              {weather?.main?.temp
                ? `${weather.main.temp.toFixed(1)}${unitSymbol}`
                : "N/A"}
            </p>
          </div>
          {weather?.weather && (
            <img
              src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
              alt="Weather Icon"
            />
          )}
        </>
      )}
    </div>
  );
}

export default Location;
