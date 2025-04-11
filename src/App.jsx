import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchWeather } from "./store/weatherSlice/api";
import { getWeather } from "./store/weatherSlice/weatherSlice";

function App() {
  const dispatch = useDispatch();
  const { weather, loading, error } = useSelector(getWeather);
  
  useEffect(() => {
    dispatch(fetchWeather("Yerevan"));
  }, []);

  return (
    <div >
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(fetchWeather(e.target[0].value));
        }}
      >
        <input type="text" placeholder="City name" />
      </form>

      <div>
        <h1>{weather.name}</h1>
        <img
          src={`http://openweathermap.org/img/w/${weather?.weather?.[0]?.icon}.png`}
          alt="weather"
        />
      </div>
    </div>
  );
}

export default App;
