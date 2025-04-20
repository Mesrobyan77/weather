import React from "react";
import styles from "./Loading.module.scss";

const Loading = () => {
  return (
    <div className={styles.overlay}>
      <div className={styles.loader}></div>
      <p>Loading weather data...</p>
    </div>
  );
};

export default Loading;
