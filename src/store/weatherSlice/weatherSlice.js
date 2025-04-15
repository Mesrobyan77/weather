import { createSlice } from "@reduxjs/toolkit";
import { fetchWeather, forecast, today } from "./api";

export const weatherSlice = createSlice({
  name: "data",
  initialState: {
    weather: null,
    today: null,
    forecast: [],
    loading: false,
    error: "",
    history:[],
    units:'metric'
  },
  reducers: {
    addToHistory(state,action){
      state.history = [...state.history,action.payload]
    },
    addUnit(state,action){
      state.units = action.payload
    }
  },
  selectors: {
    getWeather: (state) => state.weather,
    getToday: (state) => state.today,
    getForecast: (state) => state.forecast,
    getUnit:(state)=>state.units,
    getGlobal: (state) => state,
    getHistory:(state)=>state.history
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeather.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchWeather.fulfilled, (state, action) => {
        state.loading = false;
        state.weather = action.payload;
      })
      .addCase(fetchWeather.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(today.pending, (state) => {
        state.loading = true;
      })
      .addCase(today.fulfilled, (state, action) => {
        state.today = action.payload;
        state.loading = false;
      })
      .addCase(today.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(forecast.pending, (state) => {
        state.loading = true;
      })
      .addCase(forecast.fulfilled, (state, action) => {
        state.forecast = action.payload;
        state.loading = false;
      })
      .addCase(forecast.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const weatherReducer = weatherSlice.reducer;
export const {addToHistory} = weatherSlice.actions
export const { getWeather, getForecast, getToday ,getGlobal,getUnit,getHistory} = weatherSlice.selectors;
