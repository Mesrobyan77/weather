import React, { useRef, useState } from "react";
import styles from "./HistoryCity.module.scss";
import { useSelector } from "react-redux";
import { getHistory } from "../../store/weatherSlice/weatherSlice";
import City from "../features/City/City";
import LeftSideBar from "../features/LeftSideBar/LeftSideBar";
import ChooseCity from "../features/ChooseCity/ChooseCity";

function HistoryCity() {
  const history = useSelector(getHistory);
  const inpRef = useRef();
  const [filteredHistory, setFilteredHistory] = useState(history);

  const handleFilter = () => {
    const value = inpRef.current.value.toLowerCase();
    const filtered = history.filter((item) =>
      item.name.toLowerCase().includes(value)
    );
    setFilteredHistory(filtered);
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <LeftSideBar />
        <div className={styles.currentDiv}>
          <input
            type="text"
            placeholder="Search City"
            onChange={handleFilter}
            ref={inpRef}
            className={styles.input}
          />
          <div className={styles.smallDiv}>
            <City data={filteredHistory} />
            <div style={{width:'500px'}}>
            <ChooseCity/>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default HistoryCity;
