import { useSelector } from "react-redux";
import { getToday, getUnit } from "../../../store/weatherSlice/weatherSlice";
import { formatTime } from "../../../helpers/time";

import styles from "./Today.module.scss";

function Today() {
  const hourlyData = useSelector(getToday);
  const unit = useSelector(getUnit);
  const unitSymbol = unit === "imperial" ? "°F" : "°C";
  return (
    <div className={styles.today}>
      <p>Today's Forecast</p>
      <div className={styles.todayWeather}>
        {hourlyData?.list?.slice(0, 10).map((hour, index) => (
          <div className={styles.weather} key={index}>
            <span className={styles.time}>{formatTime(hour?.dt)}</span>
            <img
              src={`http://openweathermap.org/img/wn/${hour?.weather[0].icon}.png`}
              alt={hour.weather[0].description}
            />
            <span className={styles.temp}>
              {Math.round(hour?.main.temp)}
              {unitSymbol}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Today;
