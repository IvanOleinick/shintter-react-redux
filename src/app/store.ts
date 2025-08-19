import weather from "../features/weather/weatherSlice";
import message from "../features/message/messageSlice";

import {configureStore} from "@reduxjs/toolkit";

export const store = configureStore({
        reducer: {
            weather, message
        }
    }
)
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
