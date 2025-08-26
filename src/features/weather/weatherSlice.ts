import {createSlice} from "@reduxjs/toolkit";
import type {WeatherInfo} from "../../utils/types";
import {fetchWeather} from "../api/weatherAction";

const initialState: WeatherInfo = {
    country: "",
    city: "",
    temp: 0,
    pressure: 0,
    sunset: "",
};

const weatherSlice = createSlice({
    name: "weather",
    initialState,
    reducers: {
        setWeather: (_state, action) => action.payload as WeatherInfo,
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchWeather.pending, () => initialState)
            .addCase(fetchWeather.fulfilled, (_state, action) => action.payload)
            .addCase(fetchWeather.rejected, (state) => state);
    },
});

export const {setWeather} = weatherSlice.actions;
export default weatherSlice.reducer;
