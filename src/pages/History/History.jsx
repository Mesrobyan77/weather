import { useSelector } from "react-redux";
import { getHistory } from "../../store/weatherSlice/weatherSlice";
import LeftSideBar from "../../components/features/LeftSideBar/LeftSideBar";
import styles from './History.module.scss'
function History() {
    const history = useSelector(getHistory)
    console.log(history);
  return (
    <div className={styles.history}>
        <LeftSideBar/>
        
    </div>
  );
}

export default History;