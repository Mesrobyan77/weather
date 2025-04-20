import { configureStore } from "@reduxjs/toolkit";
import { weatherReducer } from "./weatherSlice/weatherSlice";
import { currentCityReducer } from "./weatherSlice/curetCitySlice";

const store = configureStore({
    reducer:{
        data:weatherReducer,
        curetCity:currentCityReducer
    }
})

export default store