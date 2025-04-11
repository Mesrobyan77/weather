import { createSlice } from "@reduxjs/toolkit";
import { fetchWeather } from "./api";

export const weatherSlice = createSlice({
  name: "data",
  initialState: {
    weather: [],
    loading: false,
    error: "",
  },
  reducers: {},
  selectors: {
    getWeather: (state) => state,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchWeather.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchWeather.fulfilled, (state, action) => {
      state.loading = false,
      state.weather = action.payload
    });
    builder.addCase(fetchWeather.rejected, (state, action) => {
      state.loading = false
      state.error = action.payload
    });
  },
});

export const weatherReducer = weatherSlice.reducer;
export const { getWeather } = weatherSlice.selectors;
