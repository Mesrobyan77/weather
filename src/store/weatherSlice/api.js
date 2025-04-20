import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const api = "df068d92aadeefce6d126678efe1efa3";

export const fetchWeather = createAsyncThunk(
  "data/fetchWeather",
  async ({ city, unit = "metric", location }, { rejectWithValue }) => {
    try {
      const res = await axios({
        url: location
          ? `https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lon}&appid=${api}&units=${unit}`
          : `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}&units=${unit}`,
        timeout: 3000,
        timeoutErrorMessage: "Long fetching, please try again",
      });
      return res.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Error fetching weather",
      );
    }
  },
);

export const today = createAsyncThunk(
  "data/today",
  async ({ lat, lon, unit = "metric" }, { rejectWithValue }) => {
    try {
      const res = await axios({
        url: `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${api}&units=${unit}`,
        timeout: 3000,
        timeoutErrorMessage: "Long fetching, please try again",
      });
      return res.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Error fetching today's weather",
      );
    }
  },
);

export const forecast = createAsyncThunk(
  "data/forecast",
  async ({ city, unit = "metric" }, { rejectWithValue }) => {
    try {
      const res = await axios({
        url: `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${api}&units=${unit}`,
        timeout: 3000,
        timeoutErrorMessage: "Long fetching, please try again",
      });
      return res.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Error fetching forecast",
      );
    }
  },
);

export const curetCityToday = createAsyncThunk(
  "curetCity/today",
  async ({ lat, lon, unit = "metric" }, { rejectWithValue }) => {
    try {
      const res = await axios({
        url: `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${api}&units=${unit}`,
        timeout: 3000,
        timeoutErrorMessage: "Long fetching, please try again",
      });
      return res.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Error fetching today's weather",
      );
    }
  },
);

export const curentCityForecast = createAsyncThunk(
  "curetCity/forecast",
  async ({ city, unit = "metric" }, { rejectWithValue }) => {
    try {
      const res = await axios({
        url: `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${api}&units=${unit}`,
        timeout: 3000,
        timeoutErrorMessage: "Long fetching, please try again",
      });
      return res.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Error fetching forecast",
      );
    }
  },
);
