import styles from "./AirCondition.module.scss";
import wind from "../../../assets/icons/wind.svg";
import temp from "../../../assets/icons/temp.svg";
import { useSelector } from "react-redux";
import { getWeather } from "../../../store/weatherSlice/weatherSlice";

function AirCondition() {
  const weather = useSelector(getWeather)
  const realFeel = weather?.main?.feels_like?.toFixed(1);
  const windSpeed = weather?.wind?.speed?.toFixed(1);
  const unitSymbol = weather?.unit === "imperial" ? "°F" : "°C";
  return (
    <div className={styles.airCondition}>
      <h2>Air conditions</h2>

      <div className={styles.airContitionBox}>
        <div className={styles.box}>
          <img src={temp} alt="Temperature Icon" />
          <div className={styles.realFeel}>
            <span>Real Feel</span>
            <span>{realFeel ? `${realFeel}${unitSymbol}` : "N/A"}</span>
          </div>
        </div>
        <div className={styles.box}>
          <img src={wind} alt="Wind Icon" />
          <div className={styles.realFeel}>
            <span>Wind</span>
            <span>{windSpeed ? `${windSpeed} m/s` : "N/A"}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AirCondition;
