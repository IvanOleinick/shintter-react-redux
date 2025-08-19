import {createSlice} from "@reduxjs/toolkit";

const statsSlice = createSlice({
    name: 'stats',
    initialState: {
        followers: 0,
        following: 0,
    },
    reducers: {
        changeFollowers: (state, action) => {
            const res = state.followers + action.payload;
            state.followers = res >= 0 ? res : 0;
        },
        changeFollowing: (state, action) => {
            const res = state.following + action.payload;
            state.following = res >= 0 ? res : 0;
        },
    },
});


export const {changeFollowing,changeFollowers} = statsSlice.actions;
export default statsSlice.reducer;