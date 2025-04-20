import CityData from "../../components/features/CityData/CityData";
import styles from "./CurrentCity.module.scss";

function CurrentCity() {
  return (
    <div className={styles.currentCity}>
      <CityData />
    </div>
  );
}

export default CurrentCity;
