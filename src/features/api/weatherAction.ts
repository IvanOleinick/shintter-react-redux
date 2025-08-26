import { createAsyncThunk } from "@reduxjs/toolkit";
import type { WeatherInfo } from "../../utils/types";
import { base_url, api_key } from "../../utils/constants.ts";

export const fetchWeather = createAsyncThunk<WeatherInfo, string>(
    "weather/fetchByCity",
    async (city: string) => {
        if (!city?.trim()) {
            throw new Error("City is required");
        }

        const response = await fetch(
            `${base_url}?q=${city}&appid=${api_key}&units=metric`
        );

        if (response.status === 404) {
            throw new Error("Enter correct city name");
        }
        if (!response.ok) {
            throw new Error("Something went wrong");
        }

        const data = await response.json();

        return {
            country: data.sys.country,
            city: data.name,
            temp: data.main.temp,
            pressure: data.main.pressure,
            sunset: new Date(data.sys.sunset * 1000).toLocaleString(),
        };
    }
);
