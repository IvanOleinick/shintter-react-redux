import {configureStore} from "@reduxjs/toolkit";
import user from "../features/user/userSlice";
import stats from "../features/stats/statsSlice";
export const store = configureStore({
    reducer: {
        user,stats
    },

})