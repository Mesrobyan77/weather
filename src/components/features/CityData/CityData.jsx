import React, {  } from "react";
import styles from "./CityData.module.scss";
import LeftSideBar from "../../../components/features/LeftSideBar/LeftSideBar";
import Search from "../../shared/Search/Search";
import Location from "../Location/Location";
import Today from "../Today/Today";
import AirCondition from "../AirCondition/AirCondition";
import ForeCast from "../ForeCast/ForeCast";

function CityData() { 
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <LeftSideBar />
        <div className={styles.mainContent}>
          <Search />
          <div className={styles.weatherOverview}>
            <div className={styles.weatherDetails}>
              <Location />
              <Today />
              <AirCondition />
            </div>
            <div className={styles.forecastSection}>
              <ForeCast />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CityData;
