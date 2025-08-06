import {legacy_createStore as createStore} from "redux";
import {shmitterReducer} from "../reducers/shmitterReducer.js";

const initialState = {
    user: {
        name: 'Monster',
        avatar: 'https://gravatar.com/avatar/000?d=monsterid'
    },
    stats: {
        followers: 0,
        following: 0
    }
};

export const store = createStore(shmitterReducer, initialState);