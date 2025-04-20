import { useDispatch, useSelector } from "react-redux";
import { formatTime } from "../../../helpers/time";
import styles from "./City.module.scss";
import {
  curentCityForecast,
  curetCityToday,
} from "../../../store/weatherSlice/api";
import { getUnit } from "../../../store/weatherSlice/weatherSlice";

function City({ data }) {
  const dispatch = useDispatch();
  const unit = useSelector(getUnit);
  const unitSymbol = unit === "imperial" ? "°F" : "°C";
  return (
    <div className={styles.cites}>
      {data?.length > 0 ? (
        data?.map((item, index) => (
          <div
            key={index}
            className={styles.cityBox}
            onClick={async () => {
              await dispatch(
                curetCityToday({
                  lat: item?.coord?.lat,
                  lon: item?.coord?.lon,
                }),
              );
              await dispatch(curentCityForecast({ city: item?.name }));
            }}
          >
            <div className={styles.box}>
              <img
                src={`http://openweathermap.org/img/w/${item?.weather?.[0]?.icon}.png`}
                alt="Weather Icon"
                className={styles.imm}
              />
              <div className={styles.citydecs}>
                <span className={styles.name}>{item?.name || "Unknown"}</span>
                <span className={styles.time}>{formatTime(item.dt)}</span>
              </div>
            </div>
            <span className={styles.temp}>
              {item?.main?.temp
                ? `${Math.round(item.main.temp)}${unitSymbol}`
                : null}
            </span>
          </div>
        ))
      ) : (
        <p>No matching cities found.</p>
      )}
    </div>
  );
}

export default City;
