import { Route, Routes } from "react-router-dom";
import ROUTES from "./Router";
import Login from "./pages/Login/Login";
import styles from "./App.module.scss";
import "./global/global.css";
import { CurrentCity, History } from "./pages";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className={styles.container}>
      <ToastContainer />
      <Routes>
        <Route path={ROUTES.HOME} element={<Login />} />
        <Route path={ROUTES.CURRENT_CITY} element={<CurrentCity />} />
        <Route path={ROUTES.HISTORY} element={<History />} />
      </Routes>
    </div>
  );
}

export default App;
