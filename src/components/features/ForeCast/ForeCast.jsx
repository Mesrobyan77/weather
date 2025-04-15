import React from "react";
import styles from "./Forecast.module.scss";
import { useSelector } from "react-redux";
import { getForecast } from "../../../store/weatherSlice/weatherSlice";
import {getDayName} from '../../../helpers/time'
function Forecast() {
  const groupedData = useSelector(getForecast);

  return (
    <div className={styles.forecast}>
      <h2>6 Day Forecast</h2>
      <div className={styles.daysMainBox}>
        {groupedData?.list?.slice(0, 6).map((day, index) => (
          <div key={index} className={styles.dayBox}>
          <span className={styles.day}>
            {index === 0 ? "Today" : getDayName(index)}
          </span>
          <div className={styles.wether}>
            <img
              src={`http://openweathermap.org/img/wn/${day?.weather[0].icon}.png`}
              alt="weather icon"
            />
            <span>{day.weather[0].description}</span>
          </div>
          <span>{day.main.temp.toFixed(1)}°C</span>
        </div>
        ))}
      </div>
    </div>
  );
}

export default Forecast;
