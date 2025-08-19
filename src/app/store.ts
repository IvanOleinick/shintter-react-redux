import {configureStore} from "@reduxjs/toolkit";
import user from "../features/user/userSlice.js";
import stats from "../features/stats/statsSlice.js";
import userSlice from "../features/user/userSlice.js";
import statsSlice from "../features/stats/statsSlice.js";

export const store = configureStore(
    {
        reducer: {
            user:userSlice, stats:statsSlice
        },
    }
)

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;