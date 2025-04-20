import { createSlice } from "@reduxjs/toolkit";
import { curentCityForecast, curetCityToday,} from "./api";

export const currentCitySlice = createSlice({
  name: "curetCity",
  initialState: {
    curetCityToday: null,
    curetCityForecast: null,
  },
  selectors: {
    getCurrentCityData: (state) => state,
  },
  extraReducers: (builder) => {
    builder
      .addCase(curetCityToday.fulfilled, (state, action) => {
        state.today = action.payload;
      })
      .addCase(curentCityForecast.fulfilled, (state, action) => {
        state.forecast = action.payload;
      });
  },
});

export const currentCityReducer = currentCitySlice.reducer;
export const { getCurrentCityData } = currentCitySlice.selectors;
