import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const api = 'df068d92aadeefce6d126678efe1efa3'

export const fetchWeather = createAsyncThunk(
  "data/fetchWeather",
  async (city, { rejectWithValue }) => {
    try {
      const res = await axios({
        url: `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}&units=metric`,
        timeout: 3000,
        timeoutErrorMessage: "long fetching, please try again",
      });

      return res.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || "Error fetching weather");
    }
  }
);
