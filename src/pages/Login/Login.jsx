import { Link } from "react-router-dom";
import styles from "./Login.module.scss";
import ROUTES from "../../Router";
import { umbrella } from "../../costands/costands";

const LandingPage = () => {
  return (
    <div className={styles.mainBox}>
      <div className={styles.imageBox}>
        <img src={umbrella} alt="umbrella" />
      </div>
      <div className={styles.textBox}>
        <img src={umbrella} alt="logo" className={styles.textBoxImg} />
        <h1 className={styles.title}>Breeze</h1>
        <p className={styles.subtitle}>Weather App</p>
        <Link to={ROUTES.CURRENT_CITY} className={styles.button}>
          Get started
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
