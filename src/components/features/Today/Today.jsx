import { useSelector } from "react-redux";
import { getToday } from "../../../store/weatherSlice/weatherSlice";
import { formatTime } from "../../../helpers/time";

import styles from "./Today.module.scss";

function Today() {
  const hourlyData = useSelector(getToday);
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
            <span className={styles.temp}>{Math.round(hour?.main.temp)}°</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Today;
