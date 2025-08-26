import {createSlice} from "@reduxjs/toolkit";
import {fetchWeather} from "../api/weatherAction";

const messageSlice = createSlice({
    name: "message",
    initialState: "Enter city name" as string,
    reducers: {
        setMessage: (_state, action) => action.payload as string,
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchWeather.pending, () => "Pending")
            .addCase(fetchWeather.fulfilled, () => "")
            .addCase(fetchWeather.rejected, (_state, action) => {
                return action.error.message || "Enter correct city name";
            });
    },
});

export const {setMessage} = messageSlice.actions;
export default messageSlice.reducer;
