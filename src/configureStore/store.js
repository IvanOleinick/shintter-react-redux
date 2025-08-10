import {legacy_createStore as createStore} from "redux";
import {rootReducer} from "../reducers/rootReducer.js";

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

export const store = createStore(rootReducer, initialState);