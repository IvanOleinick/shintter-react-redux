import {createSlice} from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        name:'Monster ',
       avatar: 'https://gravatar.com/avatar/000?d=monsterid'
    },
    reducers: {
        changeName: (state, action) => {
            return { ...state, name: action.payload };
        },
        changeAvatar: (state, action) => {
            return { ...state, avatar: action.payload };
        }
    }


})
export const {changeName, changeAvatar} = userSlice.actions;
export default userSlice.reducer;