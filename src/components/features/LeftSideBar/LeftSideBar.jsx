import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  cloudSun,
  listTask,
  sliders,
  umbrella,
} from "../../../costands/costands";
import { Menu } from "lucide-react";
import ROUTES from "../../../Router";
import styles from "./LeftSideBar.module.scss";
import { addUnit, getUnit } from "../../../store/weatherSlice/weatherSlice";
import { useDispatch, useSelector } from "react-redux";

function LeftSideBar() {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => setIsOpen(!isOpen);
  const unit = useSelector(getUnit);

  return (
    <>
      <button className={styles.menuButton} onClick={toggleSidebar}>
        <Menu size={28} />
      </button>
      <div
        className={`${styles.leftSideBar} ${
          isOpen ? styles.open : styles.closed
        }`}
      >
        <img src={umbrella} alt="umbrella" className={styles.umbrella} />

        <div className={styles.leftSideBarbox}>
          <Link to={ROUTES.CURRENT_CITY} className={styles.link}>
            <img src={cloudSun} alt="weather" className={styles.icon} />
            {isOpen && <span>Weather</span>}
          </Link>
        </div>
        <div className={styles.leftSideBarbox}>
          <Link to={ROUTES.HISTORY} className={styles.link}>
            <img src={listTask} alt="history" className={styles.icon} />
            {isOpen && <span>History</span>}
          </Link>
        </div>
        <div className={styles.unitToggle}>
          <span>Unit</span>
          <button
            onClick={() =>
              dispatch(addUnit(unit === "metric" ? "imperial" : "metric"))
            }
            className={styles.unitButton}
          >
            {unit === "C" ? "°F" : "°C"}
          </button>
        </div>
      </div>
    </>
  );
}

export default LeftSideBar;
