import React from 'react';
import styles from './ChooseCity.module.scss';
import {  useSelector } from 'react-redux';
import { getCurrentCityData } from '../../../store/weatherSlice/curetCitySlice';
import { formatTime, getDayName } from '../../../helpers/time';
import { getUnit } from '../../../store/weatherSlice/weatherSlice';

function ChooseCity() {
  const {today,forecast} = useSelector(getCurrentCityData) 
  const unit = useSelector(getUnit)
  const unitSymbol = unit === "imperial" ? "°F" : "°C";

  return (
    <div className={styles.MainBox}>
      {today ? (
        <div className={styles.wrapper}>
          <div className={styles.about}>
            <div>
              <h2>{today?.city?.name}</h2>
              <span>{`${Math.round(today?.list?.[0]?.main.temp)}${unitSymbol}`}</span>
            </div>
            <img
              src={`http://openweathermap.org/img/wn/${today?.list?.[0]?.weather?.[0]?.icon}.png`}
              alt="Weather Icon"
            />
          </div>

           <div className={styles.today}>
            <p>Today's Forecast</p>
            <div className={styles.todayWeather}>
              {today?.list?.slice(0, 3).map((hour, index) => (
                <div className={styles.weather} key={index}>
                  <span className={styles.time}>{formatTime(hour?.dt)}</span>
                  <img
                    src={`http://openweathermap.org/img/wn/${hour?.weather?.[0]?.icon}.png`}
                    alt={hour?.weather?.[0]?.description || "Weather Icon"}
                  />
                  <span className={styles.temp}>
                    {hour?.main?.temp
                      ? `${Math.round(hour.main.temp)}${unitSymbol}`
                      : "N/A"}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.forecast}>
            <h2>3-day forecast</h2>
            <div className={styles.daysMainBox}>
              {forecast?.list?.length > 0
                ? forecast?.list?.slice(0, 3).map((day, index) => (
                    <div key={index} className={styles.dayBox}>
                      <span className={styles.day}>
                        {index === 0 ? "Today" : getDayName(index)}
                      </span>
                      <div className={styles.weather}>
                        <img
                          src={`http://openweathermap.org/img/wn/${day?.weather[0].icon}.png`}
                          alt="weather icon"
                        />
                        <span>{day.weather[0].description}</span>
                      </div>
                    </div>
                  ))
                : null}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default ChooseCity;
