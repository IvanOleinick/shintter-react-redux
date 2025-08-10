import {userReducer} from "./userReducer.js";
import {statsReducer} from "./statsReducer.js";
import {combineReducers} from "redux";

// typeof State = {
//     user: {
//         name: string,
//         avatar: string
//     },
//     stats: {
//         followers: number,
//         following: number
//     }
// }


export const rootReducer = combineReducers({
    user: userReducer,
    stats: statsReducer
})