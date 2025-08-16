import {configureStore} from "@reduxjs/toolkit";
import user from "../features/user/userSlice.js";
import stats from "../features/stats/statsSlice.js";

export const store = configureStore(
    {
        reducer: {
            user, stats
        },
    }
)